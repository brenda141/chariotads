import puppeteer from 'puppeteer';
import express from 'express';
import * as fs from 'fs';
import * as path from 'path';

const routes = [
  '/',
  '/publisher',
  '/advertiser',
  '/adsistant',
  '/targeting',
  '/contact',
  '/terms',
  '/privacy',
  '/faq'
];

async function prerender() {
  const PORT = 4000;
  const app = express();
  
  // Serve everything from dist
  app.use(express.static('dist'));
  // Fallback to index.html for SPA routing
  app.use((req, res) => {
    res.sendFile(path.resolve('dist/index.html'));
  });

  const server = app.listen(PORT, async () => {
    console.log(`Express server started on port ${PORT}`);
    
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    for (const route of routes) {
      console.log(`Prerendering route: ${route}`);
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' });
      
      const html = await page.content();
      
      // Calculate output path
      const outputPath = route === '/' ? 'dist/index.html' : `dist${route}/index.html`;
      const outputDir = path.dirname(outputPath);
      
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      fs.writeFileSync(outputPath, html);
      console.log(`Saved ${route} -> ${outputPath}`);
    }
    
    await browser.close();
    server.close();
    console.log('Prerendering complete!');
  });
}

prerender();
