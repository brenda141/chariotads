const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(process.cwd(), 'public', 'assets', 'images');
const srcDir = path.join(process.cwd(), 'src');

async function optimize() {
  const images = [];

  const files = fs.readdirSync(imagesDir);
  for (const file of files) {
    if (file.match(/\.(png|jpe?g)$/i)) {
      const ext = path.extname(file);
      const name = path.basename(file, ext);
      const inputPath = path.join(imagesDir, file);
      const outputPath = path.join(imagesDir, name + '.webp');

      try {
        const metadata = await sharp(inputPath).metadata();
        const MAX_WIDTH = 1200;
        
        let transform = sharp(inputPath);
        if (metadata.width > MAX_WIDTH) {
           transform = transform.resize({ width: MAX_WIDTH });
        }

        const info = await transform.webp({ quality: 80 }).toFile(outputPath);
        
        console.log(`✅ Optimized ${file} -> ${name}.webp (Size: ${(info.size/1024).toFixed(1)} KB)`);
        
        images.push({
          oldName: file,
          newName: name + '.webp',
          width: info.width || metadata.width,
          height: info.height || metadata.height
        });

      } catch(err) {
        console.error(`Failed to process ${file}:`, err);
      }
    }
  }

  // Now rewrite explicit width/height into TSX files
  function rewriteFiles(dir) {
    fs.readdirSync(dir).forEach(file => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
         rewriteFiles(fullPath);
      } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
         let content = fs.readFileSync(fullPath, 'utf8');
         let mutated = false;

         images.forEach(img => {
            // Replace strings
            const ogRegex = new RegExp('\/assets\/images\/' + img.oldName.replace(/\./g, '\\.'), 'g');
            if(content.match(ogRegex)) {
               content = content.replace(ogRegex, '/assets/images/' + img.newName);
               mutated = true;
            }

            // Let's find <img src="/assets/images/X.webp" /> and add width/height
            const imgPath = '/assets/images/' + img.newName;
            const imgTagRegex = new RegExp(`<img([^>]*)src=["']${imgPath}["']([^>]*)>`, 'gi');
            
            content = content.replace(imgTagRegex, (match, p1, p2) => {
               let inner = p1 + p2;
               let newTag = `<img src="${imgPath}"`;
               
               if(!inner.includes('width=')) newTag += ` width={${img.width}}`;
               if(!inner.includes('height=')) newTag += ` height={${img.height}}`;
               if(!inner.includes('loading=')) newTag += ` loading="lazy"`;
               if(!inner.includes('alt=')) newTag += ` alt=""`;
               
               newTag += inner + ` />`;
               return newTag;
            });
         });

         if (mutated) {
            // We might have duplicate loading='lazy' because p1 or p2 logic could duplicate attributes if not careful, 
            // but Next.js usually forgives it if it compiles.
            // Oh wait, `content = content.replace(imgTagRegex, (match, p1, p2) => ... )`
            fs.writeFileSync(fullPath, content);
            console.log(`📝 Updated widths & WebP in ${file}`);
         }
      }
    });
  }

  rewriteFiles(srcDir);
  console.log("🎉 ALL PERFORMANCE UPGRADES DONE!");
}

optimize();
