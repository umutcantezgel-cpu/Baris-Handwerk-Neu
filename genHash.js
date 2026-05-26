import { createHash } from 'crypto';
const h = createHash('sha256').update('Baris2024').digest('hex');
console.log(h.slice(0, 10));
console.log(h.slice(10, 20));
console.log(h.slice(20, 30));
console.log(h.slice(30, 40));
console.log(h.slice(40, 50));
console.log(h.slice(50));
