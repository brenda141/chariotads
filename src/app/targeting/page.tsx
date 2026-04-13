'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Globe, Wifi, Filter, Layers, UserPlus, Clock, Languages, Award } from 'lucide-react';

export default function TargetingPage() {
  const targetingOptions = [
    { icon: <Monitor size={48} />, title: "DEVICE TYPE TARGETING", desc: "Mobile, Desktop, Tablet, SmartTV, + Console" },
    { icon: <Globe size={48} />, title: "COUNTRY GEO TARGETING", desc: "Filter Based on User's Country" },
    { icon: <Wifi size={48} />, title: "CONNECTION TARGETING", desc: "Target WiFi and/or Carriers" },
    { icon: <Filter size={48} />, title: "NICHE/CHANNEL TARGETING", desc: "Distinct Niche Filtering" },
    { icon: <Layers size={48} />, title: "BROWSER/OS TARGETING", desc: "Campaign to Specific Browser and OS" },
    { icon: <UserPlus size={48} />, title: "IP TARGETING", desc: "Reach Targeted IPs or an IP Range" },
    { icon: <Clock size={48} />, title: "DAY PARTING/HOURLY", desc: "Maximize on Specific Hours of the Day" },
    { icon: <Languages size={48} />, title: "LANGUAGE TARGETING", desc: "Target Specific Languages" },
    { icon: <Award size={48} />, title: "ALEXA RANKING TARGETING", desc: "Target just the top ranked websites in the world" }
  ];

  return (
    <div className="targeting-page">
      <section className="targeting-hero">
        <div className="container">
           <div className="section-title">
             <h1 className="seo-h1">Advanced Ad Targeting Options | Precision Global Traffic</h1>
             <div className="line"></div>
             <h2>TARGETING OPTIONS</h2>
             <div className="line"></div>
           </div>
           
           <div className="targeting-grid">
             {targetingOptions.map((opt, i) => (
               <motion.div 
                 key={i} 
                 className="targeting-card"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
               >
                 <div className="targeting-icon-box">{opt.icon}</div>
                 <h3>{opt.title}</h3>
                 <div className="targeting-divider"></div>
                 <p>{opt.desc}</p>
               </motion.div>
             ))}
           </div>

           <div className="targeting-cta">
              <h3>START MAKING MONEY WITH <br/><span className="highlight">CHARIOTADS TODAY!</span></h3>
              <a href="http://dashboard.chariotads.com/index.php?page=index/register" className="targeting-gs-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>GET STARTED NOW</a>
           </div>
        </div>
      </section>
    </div>
  );
}
