import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public/images/uploads');

async function optimizeImages() {
    if (!fs.existsSync(PUBLIC_DIR)) {
        console.error(`Directory not found: ${PUBLIC_DIR}`);
        return;
    }

    const files = fs.readdirSync(PUBLIC_DIR);

    for (const file of files) {
        if (file.match(/\.(png|jpg|jpeg)$/i)) {
            const inputPath = path.join(PUBLIC_DIR, file);
            const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

            console.log(`Optimizing: ${file} -> ${path.basename(outputPath)}`);

            try {
                await sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                // Optional: Delete original
                // fs.unlinkSync(inputPath); 
            } catch (err) {
                console.error(`Error converting ${file}:`, err);
            }
        }
    }
}

optimizeImages();
