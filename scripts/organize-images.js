import fs from 'fs';
import path from 'path';

const uploadDir = 'public/images/uploads';
const files = fs.readdirSync(uploadDir);

let extraCount = 1;

files.forEach(file => {
    if (file.startsWith('Generated Image') && file.endsWith('.webp')) {
        const oldPath = path.join(uploadDir, file);
        const newFilename = `extra-${String(extraCount).padStart(2, '0')}.webp`;
        const newPath = path.join(uploadDir, newFilename);

        fs.renameSync(oldPath, newPath);
        console.log(`Renamed: ${file} -> ${newFilename}`);
        extraCount++;
    }
});

console.log('Renaming complete.');
