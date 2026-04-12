'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, ShoppingBag, TrendingUp, Maximize, Zap, ShieldCheck, Target, Heart } from 'lucide-react';

export default function PublisherPage() {
  const bannerFeatures = [
    { icon: <Monitor size={32} />, title: "OPTIMIZED BANNERS", desc: "Banners optimized for Mobile, Desktop, Tablet, or Smart TV / Console traffic with our advanced targeting, to ensure you get exactly the type of traffic you want." },
    { icon: <ShoppingBag size={32} />, title: "EXCLUSIVE MARKETPLACE", desc: "Our exclusive marketplace provides both network campaigns or flat rate \"Direct Buy\" purchases, for the ultimate choice." },
    { icon: <TrendingUp size={32} />, title: "MAXIMIZE REVENUE", desc: "Our network offers a dual solution of CPC and CPM ads paying a combination of per click and per impression at the highest possible revenue for you." },
    { icon: <Maximize size={32} />, title: "MULTIPLE SIZES", desc: "We offer a wide variety of IAB Standard banner sizes as well as some non-standard unique sizes for your Publishing needs." }
  ];

  const popFeatures = [
    { icon: <Zap size={32} />, title: "MAXIMUM EXPOSURE", desc: "PopUnders allow your promotion to be loaded behind the active window and then available to be seen when the visitor closes the window. Voila! Instant attention." },
    { icon: <ShieldCheck size={32} />, title: "QUALITY TESTED", desc: "We ensure quality and \"clean\" (malware and scam-free) pop advertisements through rigorous testing and constant monitoring for quality assurance." },
    { icon: <Target size={32} />, title: "TARGETED MARKETING", desc: "Target different traffic types such as Mobile, Desktop, or Tablet using many targeting options to deliver just the most profitable traffic to your offers." },
    { icon: <Heart size={32} />, title: "CUSTOMER CARE", desc: "We care about your visitors as much as you do and our ethical standards of what is allowed in our network far exceeds all competing networks." }
  ];

  return (
    <div className="publisher-page">
      {/* Hero Section */}
      <section className="pub-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pub-hero-content"
          >
            <div className="pub-icon-circle">
               <div className="inner-orb"></div>
            </div>
            <h1>PUBLISH WITH <span className="highlight">CHARIOTADS</span></h1>
            <p>
              Do you want the advertising on your website to be elite? What about malware-free, adware-free, and scam-free? 
              You've come to the right place, because Chariotads cares about your website and traffic as much as you do. 
              If something goes wrong, we will do everything we can to make it right.
            </p>
            <div className="pub-hero-btns">
              <a href="http://dashboard.chariotads.com/index.php?page=index/register" className="pub-primary-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>BECOME A PUBLISHER</a>
              <a href="http://dashboard.chariotads.com/index.php?page=index/register" className="pub-secondary-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>BECOME AN ADVERTISER</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Banner Ads Section */}
      <section className="section-type">
        <div className="container">
          <div className="section-title">
            <div className="line"></div>
            <h2>BANNER ADS</h2>
            <div className="line"></div>
          </div>

          <div className="section-grid">
            <div className="visual-col">
              <motion.div 
                className="mockup-stack"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="mockup desktop-mockup">
                   <div className="mockup-header"></div>
                   <div className="mockup-body">
                      <div className="mockup-banner-top"></div>
                      <div className="mockup-content-grid">
                         <div className="mockup-side"></div>
                         <div className="mockup-main"></div>
                      </div>
                   </div>
                </div>
                <div className="mockup tablet-mockup"></div>
              </motion.div>
            </div>
            <div className="features-col">
              {bannerFeatures.map((f, i) => (
                <motion.div 
                  key={i} 
                  className="feature-card-horizontal"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className="feature-icon">{f.icon}</div>
                  <div className="feature-info">
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="sizes-area">
             <div className="size-list">
                <h4>BANNER SIZES</h4>
                <ul>
                  <li>300x250 - Medium Rectangle</li>
                  <li>728x90 - Leaderboard</li>
                  <li>160x600 - Skyscraper</li>
                  <li>300x100 - Native Advertising</li>
                  <li>120x240 - Vertical Banner</li>
                  <li>125x125 - Square Button, with title</li>
                  <li>150x150 - Square Button, with title</li>
                  <li>250x250 - Square</li>
                  <li>468x60 - Full Banner</li>
                </ul>
             </div>
             <div className="size-list">
                <h4>MOBILE</h4>
                <ul>
                  <li>300x100</li>
                  <li>300x250</li>
                  <li>300x50</li>
                </ul>
                <div className="spacer"></div>
                <h4>SPECIAL FORMATS</h4>
                <ul>
                  <li>300x250 - Layer/Float Ads</li>
                  <li>300x250 - Video Ads</li>
                  <li>300x300 - Native Ads</li>
                </ul>
             </div>
             <div className="get-started-cta">
                <a href="http://dashboard.chariotads.com/index.php?page=index/register" className="gs-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>GET STARTED NOW</a>
             </div>
          </div>
        </div>
      </section>

      {/* Pop Unders Section */}
      <section className="section-type pops">
        <div className="container">
          <div className="section-title">
            <div className="line"></div>
            <h2>POP UNDERS</h2>
            <div className="line"></div>
          </div>

          <div className="section-grid inverse">
            <div className="features-col">
              {popFeatures.map((f, i) => (
                <motion.div 
                  key={i} 
                  className="feature-card-horizontal"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className="feature-icon">{f.icon}</div>
                  <div className="feature-info">
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="visual-col">
               <motion.div 
                className="mockup-stack"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="mockup desktop-mockup orange">
                   <div className="mockup-header"></div>
                   <div className="mockup-body center-fill">
                      <div className="mockup-logo-place"></div>
                   </div>
                </div>
                <div className="mockup tablet-mockup orange pos-low"></div>
              </motion.div>
            </div>
          </div>

          <div className="bottom-cta-area">
             <h3>START MAKING MONEY WITH <br/><span className="highlight">CHARIOTADS TODAY!</span></h3>
             <a href="http://dashboard.chariotads.com/index.php?page=index/register" className="gs-btn-large" style={{ textDecoration: 'none', display: 'inline-block' }}>GET STARTED NOW</a>
          </div>

          <div className="seo-text-layer" style={{ paddingBottom: '40px', textAlign: 'center', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', maxWidth: '900px', margin: '60px auto 0', lineHeight: '1.6' }}>
            <p>Join the <strong>best adult advertising network for publishers</strong>. If you are exploring <strong>adult ad networks for publishers</strong> or seeking an <strong>adult ad network with high payouts</strong>, our <strong>adult website ads monetization platform</strong> is for you. We provide a top-tier <strong>adult ad publisher network platform</strong> to help you earn from <strong>adult banner ads</strong> and traffic. Start monetizing effectively with our adult advertising network for bloggers and webmasters.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
