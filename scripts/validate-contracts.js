import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTRACTS_DIR = path.resolve(__dirname, '../src/contracts/components');
const COMPONENTS_DIR = path.resolve(__dirname, '../src/components');

console.log('🔍 Validating Component Contracts...');

if (!fs.existsSync(CONTRACTS_DIR)) {
    console.log('Values directory not found.');
    process.exit(0);
}

const contracts = fs.readdirSync(CONTRACTS_DIR).filter(f => f.endsWith('.contract.json'));
let hasErrors = false;

contracts.forEach(contractFile => {
    const contractPath = path.join(CONTRACTS_DIR, contractFile);
    const contract = JSON.parse(fs.readFileSync(contractPath, 'utf-8'));
    const componentName = contract.name;

    console.log(`Checking contract for ${componentName}...`);

    // Naive check: Does the component file exist in one of the common/ui/sections folders?
    // In a real agent, we would parse the AST.
    const possiblePaths = [
        path.join(COMPONENTS_DIR, 'ui', `${componentName}.jsx`),
        path.join(COMPONENTS_DIR, 'sections', `${componentName}.jsx`),
        path.join(COMPONENTS_DIR, 'layout', `${componentName}.jsx`),
    ];

    const exists = possiblePaths.some(p => fs.existsSync(p));

    if (!exists) {
        console.error(`❌ ERROR: Component ${componentName} defined in ${contractFile} but not found in src/components/`);
        hasErrors = true;
    } else {
        console.log(`✅ ${componentName} found.`);
    }
});

if (hasErrors) {
    console.error('\nFAILED: Some components are missing implementation.');
    process.exit(1);
} else {
    console.log('\nSUCCESS: All contracts have matching implementations.');
    process.exit(0);
}
