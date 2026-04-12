'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Target, BarChart3, Briefcase, Clock, Users } from 'lucide-react';

export default function AdvertiserPage() {
  const mainFeatures = [
    { 
      icon: <Lock size={48} />, 
      title: "ANTI-FRAUD COMES STANDARD", 
      desc: "Some networks want to sell you every click and impressions they possibly can. We just want to sell you the Elite ones. Our proprietary anti-fraud systems protects against a wide variety of click and impression fraud." 
    },
    { 
      icon: <Target size={48} />, 
      title: "ADVANCED TARGETING", 
      desc: "Simple yet effective Targeting for maximum profits.",
      targeting: [
        "Device Type", "Browser/OS", "Language", 
        "Country Geo", "IP", "Alexa Ranking", 
        "Connection", "Day Parting/Hourly", "Blacklist and Whitelist",
        "Niche/Channel"
      ]
    }
  ];

  const gridFeatures = [
    { icon: <BarChart3 size={32} />, title: "PERFORMANCE", desc: "You need to know what is working and what is not. With our pixel tracking technology and custom S2S Postback systems to measure your ROI." },
    { icon: <Briefcase size={32} />, title: "ONE ACCOUNT", desc: "Don't use an advertising network that does not allow you to use one account for both your Advertising and Publisher needs. Chariotads makes your life easier." },
    { icon: <Clock size={32} />, title: "INSTANT PLACEMENT", desc: "We are the only elite advertising network that offers instant placement of all Flat-Rate direct buy purchases from our Marketplace. Speed is Important." },
    { icon: <Users size={32} />, title: "REAL PEOPLE", desc: "Dedicated Account Managers to give you help with setup, revenue optimization, and more! Chariotads is the only network that offers 24/7 tech support." }
  ];

  return (
    <div className="advertiser-page">
      {/* Hero / Header Section Overlayed on Home Header if needed, but here as a section */}
      <section className="adv-hero">
        <div className="container">
          <div className="section-title">
            <div className="line"></div>
            <h2>ADVERTISING FEATURES</h2>
            <div className="line"></div>
          </div>

          <div className="main-features-grid">
            {mainFeatures.map((f, i) => (
              <motion.div 
                key={i} 
                className="big-feature-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="feature-icon-top">{f.icon}</div>
                <h3>{f.title}</h3>
                <div className="feat-divider"></div>
                <p>{f.desc}</p>
                {f.targeting && (
                  <div className="targeting-grid">
                    {f.targeting.map((t, idx) => (
                      <div key={idx} className="target-pill">
                        <div className="dot"></div> {t}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="secondary-features-grid">
            {gridFeatures.map((f, i) => (
              <motion.div 
                key={i} 
                className="small-feature-box"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.1) }}
              >
                <div className="small-icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="tech-section">
        <div className="container">
          <div className="tech-header">
            <h3>Chariotads Elite Ad Network</h3>
            <div className="section-title compact">
               <div className="line"></div>
               <h2>ELITE TECHNOLOGY</h2>
               <div className="line"></div>
            </div>
          </div>

          <div className="tech-content-grid">
            <div className="chart-visual-col">
              <motion.div 
                className="tech-chart-box"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="chart-header">
                   <span>Chariotads <br/><strong>EliteTech™ <br/>Activated</strong></span>
                </div>
                <div className="chart-body">
                   {/* Simulated Chart with SVG */}
                   <svg viewBox="0 0 800 300" className="dynamic-chart">
                      <path d="M0,250 L50,230 L100,240 L150,210 L200,225 L250,190 L300,200 L350,100 L400,120 L450,110 L500,130 L550,90 L600,105 L650,85 L700,95 L750,70 L800,75" fill="none" stroke="#22c55e" strokeWidth="3" />
                      <path d="M0,280 L50,270 L100,275 L150,260 L200,265 L250,250 L300,255 L350,180 L400,190 L450,185 L500,200 L550,170 L600,180 L650,165 L700,175 L750,150 L800,155" fill="none" stroke="#fb923c" strokeWidth="3" />
                      <line x1="330" y1="0" x2="330" y2="300" stroke="#fb923c" strokeWidth="2" strokeDasharray="5,5" />
                   </svg>
                </div>
                <div className="chart-footer">
                   <div className="legend-item"><div className="color-box orange"></div> Clicks</div>
                   <div className="legend-item"><div className="color-box green"></div> Installs</div>
                </div>
              </motion.div>
            </div>
            <div className="tech-info-col">
               <div className="tech-info-card">
                  <h5>IT'S REAL & IT WORKS!</h5>
                  <p>Introduced in 2025, EliteTech™ improves the Performance of your campaigns and engagement with your offers automatically.</p>
               </div>
               <div className="tech-info-card">
                  <h5>EARNING POTENTIAL</h5>
                  <p>Our optimization algorithms ensure you get the absolute highest value for your spend. More conversions, less waste.</p>
               </div>
               <div className="tech-info-card">
                  <h5>SMART MEETS ELITE</h5>
                  <p>Automatic Source-Optimization based on CTR after testing impressions or clicks have been reached. Data driven results.</p>
               </div>
            </div>
          </div>

          <div className="advertiser-final-cta">
             <h3>CHARIOTADS IS WHERE YOUR PROFITS MATTER™</h3>
             <h4>SIGNUP TODAY FOR INSTANT ACCESS</h4>
             <a href="http://dashboard.chariotads.com/index.php?page=index/register" className="primary-cta-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>GET STARTED NOW</a>
          </div>

          <div className="seo-text-layer" style={{ paddingBottom: '40px', textAlign: 'center', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', maxWidth: '900px', margin: '60px auto 0', lineHeight: '1.6' }}>
            <p>Looking to <strong>buy cheap adult traffic</strong> or <strong>buy and sell adult traffic</strong>? Chariotads is your ultimate destination to <strong>advertise my adult website</strong>. As a leading <strong>adult advertising network</strong> and <strong>adult ads network</strong>, we provide access to top-tier publishers. Buy targeted adult web traffic, explore adult website ads, and harness our high quality adult traffic sources today. We are recognized as the best adult traffic source worldwide for those who need to buy porn traffic online safely and effectively.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
