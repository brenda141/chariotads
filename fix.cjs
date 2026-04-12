const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');
c = c.replace(/\/ \/\>/g, '/>');
c = c.replace(/loading="lazy"/, 'fetchPriority="high"');
fs.writeFileSync('src/app/page.tsx', c);
console.log('Fixed syntax and LCP priority');
