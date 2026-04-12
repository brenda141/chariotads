'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Search, BarChart, ShieldCheck } from 'lucide-react';

export default function AdsistantPage() {
  return (
    <div className="adsistant-page">
      {/* Hero Section */}
      <section className="ads-hero-section">
        <div className="container ads-hero-container">
          <div className="ads-hero-text">
            <motion.div 
               className="ads-logo-header"
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
            >
               <h1>adsistant<span className="trademark">™</span></h1>
               <p className="subtitle">Your Personal Adsistant®</p>
            </motion.div>
            
            <motion.div 
              className="ads-main-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
               <div className="divider-line"></div>
               <h3>What is it and what does it do?</h3>
               <p>
                 Our Adsistant® is an auto-optimization system, your personal shopper, and the brains behind the Chariotads 
                 self-service platform. She not only embodies the "Elite" feeling – she also drives our Elite Technology™ 
                 functionality to get your job done. Only available at the Elite Advertising Network™.
               </p>
            </motion.div>
          </div>
          
          <div className="ads-hero-visual">
            <motion.img 
              src="/assets/images/chariotads_elite_assistant_mascot.png" 
              alt="Adsistant Elite Mascot" 
              className="ads-mascot-img"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
            <div className="mockup-floating-window">
               <div className="mockup-header-bar">Settings</div>
               <div className="mockup-body-row">
                  <div className="mockup-label">Limit Views & Clicks</div>
                  <div className="mockup-switch active"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Ai That Gets You */}
      <section className="ads-white-section">
        <div className="container ads-split-grid">
           <div className="ads-text-col">
              <h2>AI That 'Gets You'</h2>
              <p>
                Much like Microsoft's Cortana, or Amazon's Alexa, Chariotads' Adsistant® is here to help you do what you're 
                here to do... and that is smarter and more intelligent media buying by using data, custom rules, and 
                automation to your advantage. She also provides tips and tricks for your banner campaigns to help 
                identify and fix errors.
              </p>
           </div>
           <div className="ads-visual-col center">
              <div className="suggestion-bubble-group">
                 <img src="/assets/images/chariotads_elite_assistant_mascot.png" alt="Mascot Circle" className="mascot-circle" />
                 <motion.div 
                   className="bubble-text"
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 3, repeat: Infinity }}
                 >
                    " I have some <br/><strong>suggestions <br/>for you!</strong> "
                 </motion.div>
              </div>
           </div>
        </div>
      </section>

      {/* Feature 2: Why do you need it? */}
      <section className="ads-centered-info">
        <div className="container">
           <div className="centered-content">
              <h2>Why do you need it?</h2>
              <p>
                The biggest reason we built Adsistant was to automate the time-consuming process of optimization campaign 
                sources by hand. Blocking unproductive sources takes a long time, but with Adsistant you just set up rules 
                and turn it on... and forget it.
              </p>
           </div>
           
           <div className="adsistant-interface-mockup">
              <div className="mockup-grid">
                 <div className="mockup-field">
                    <label>Impressions / Day</label>
                    <div className="mockup-select">Doesn't Matter <Settings size={14} /></div>
                 </div>
                 <div className="mockup-field">
                    <label>Clicks / Day</label>
                    <div className="mockup-select">Doesn't Matter <Settings size={14} /></div>
                 </div>
                 <div className="mockup-field">
                    <label>Country</label>
                    <div className="mockup-select">Select Target <Search size={14} /></div>
                 </div>
                 <div className="mockup-field">
                    <label>Target Niche</label>
                    <div className="mockup-select">All Categories <BarChart size={14} /></div>
                 </div>
              </div>
              <div className="mockup-action-bar">
                 <button className="mockup-save-btn">Adsistant Request</button>
              </div>
              <div className="mockup-table">
                 <div className="mockup-table-header">
                    <span>Min Imps / Day</span>
                    <span>Min Clicks / Day</span>
                    <span>Country</span>
                    <span>Min %</span>
                    <span>Added Date</span>
                 </div>
                 <div className="mockup-table-row">
                    <span>5000</span>
                    <span>50</span>
                    <span>Global</span>
                    <span>1.5%</span>
                    <span>2025-03-29</span>
                 </div>
              </div>
              <div className="mockup-logo-watermark">
                 adsistant<span className="logo-color">®</span>
              </div>
           </div>
        </div>
      </section>

      {/* Feature 3: Trouble Shoot */}
      <section className="ads-white-section">
        <div className="container ads-split-grid inverse">
           <div className="ads-visual-col">
              <div className="troubleshoot-icon-box">
                 <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 5, repeat: Infinity }}>
                    < ShieldCheck size={120} color="#fb923c" strokeWidth={1} />
                 </motion.div>
              </div>
           </div>
           <div className="ads-text-col">
              <h2>Trouble Shoot & Get Suggestions</h2>
              <p>
                She (Adsistant®) also helps with easier things like problems causing your banner campaigns not to receive 
                traffic. Things like too low of bid, no approved images, lack of target countries, and more. She helps 
                out even without being asked. She also helps you find spots that you might be interested in.
              </p>
           </div>
        </div>
      </section>

      {/* Footer / CTA Area */}
       <section className="ads-get-started-cta-footer">
         <div className="container text-center">
            <h2>LET OUR AI DO THE WORK.</h2>
            <h3>GET STARTED WITH ADSISTANT TODAY.</h3>
            <a href="http://dashboard.chariotads.com/index.php?page=index/register" className="ads-get-started-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>SIGN UP NOW</a>
         </div>
       </section>
    </div>
  );
}
