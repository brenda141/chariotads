import fs from 'fs';
import path from 'path';

const pages = [
  { file: 'src/pages/Home.tsx', name: 'Home', type: 'WebSite', desc: 'Chariotads: The Elite Ad Network' },
  { file: 'src/FAQPage.tsx', name: 'FAQ', type: 'FAQPage', desc: 'Frequently Asked Questions about Chariotads' },
  { file: 'src/ContactPage.tsx', name: 'Contact', type: 'ContactPage', desc: 'Contact Chariotads Elite Support' },
  { file: 'src/PrivacyPage.tsx', name: 'Privacy Policy', type: 'WebPage', desc: 'Chariotads Privacy Policy' },
  { file: 'src/TermsPage.tsx', name: 'Terms of Service', type: 'WebPage', desc: 'Chariotads Terms of Service' },
  { file: 'src/PublisherPage.tsx', name: 'Publishers', type: 'WebPage', desc: 'Chariotads for Publishers' },
  { file: 'src/AdvertiserPage.tsx', name: 'Advertisers', type: 'WebPage', desc: 'Chariotads for Advertisers' },
  { file: 'src/AdsistantPage.tsx', name: 'Adsistant', type: 'SoftwareApplication', desc: 'Adsistant Auto-Optimization Technology' },
  { file: 'src/TargetingPage.tsx', name: 'Targeting', type: 'WebPage', desc: 'Chariotads Advanced Targeting' }
];

pages.forEach(p => {
  if (!fs.existsSync(p.file)) return;
  let content = fs.readFileSync(p.file, 'utf8');
  
  if (!content.includes('react-helmet-async')) {
    if (content.includes("import React, { useState")) {
      content = content.replace("import React, { useState", "import { Helmet } from 'react-helmet-async';\nimport React, { useState");
    } else if (content.includes("import React, { useEffect")) {
      content = content.replace("import React, { useEffect", "import { Helmet } from 'react-helmet-async';\nimport React, { useEffect");
    } else if (content.includes("import React ")) {
      content = content.replace("import React ", "import { Helmet } from 'react-helmet-async';\nimport React ");
    } else if (content.includes("import React")) {
      content = content.replace("import React", "import { Helmet } from 'react-helmet-async';\nimport React");
    }
  }
  
  const schema = {
    "@context": "https://schema.org",
    "@type": p.type,
    "name": p.name + " - Chariotads",
    "description": p.desc,
    "url": "https://chariotads.com" + (p.name === 'Home' ? '' : '/' + p.name.toLowerCase().replace(/ /g, '-'))
  };

  const helmetTag = `\n      <Helmet>\n        <title>${p.name} | Chariotads</title>\n        <meta name="description" content="${p.desc}" />\n        <script type="application/ld+json">\n          {\`${JSON.stringify(schema)}\`}\n        </script>\n      </Helmet>\n`;
  
  if (!content.includes('<Helmet>')) {
     const pattern1 = /return\s*\(\s*</;
     if (pattern1.test(content)) {
        // Just put helmet inside the first fragment or div
        content = content.replace(/return\s*\(\s*(<[^>]+>)/, `return (\n    <>\n${helmetTag}$1`);
        // We need to close the fragment at the end. Actually, it's easier to find the component wrapper.
        // Let's replace the top level return.
     }
  }
});
