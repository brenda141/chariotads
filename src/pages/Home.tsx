import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, BarChart, Monitor, Target, Check
} from 'lucide-react';
import { fetchLatestPosts, type WordPressPost } from '../services/wp-service';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="particles-container">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", opacity: 0 }}
            animate={{ y: [null, "-20%", "120%"], opacity: [0, 0.4, 0] }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, delay: Math.random() * 10 }}
          />
        ))}
      </div>
      <div className="container hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="tagline">The Elite Ad Network</span>
          <h1>DRIVE IMPACT,<br/>SCALE FASTER.</h1>
          <p>Extreme high-speed performance advertising. We built a global network that redefines conversion at scale.</p>
          <div className="cta-group">
            <Link to="/advertiser" className="primary-btn">Start a Campaign</Link>
            <a href="https://chariotads.com/" className="secondary-link">Learn More</a>
          </div>
        </motion.div>
        <motion.div 
          className="hero-image-container"
        >
          <div className="image-frame-wrapper">
             <motion.div className="floating-glow" animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 4, repeat: Infinity }} />
            <div className="image-circle">
              <img src="/assets/images/hero_model_ai.png" alt="Elite Adult Network Model" className="hero-model" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{ icon: React.ReactNode, title: string, desc: string, color: string, delay: number }> = ({ icon, title, desc, color, delay }) => {
  return (
    <motion.div 
      className="feature-item-row"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="feature-icon-box" style={{ '--icon-color': color } as React.CSSProperties}>
        {icon}
      </div>
      <div className="feature-text-box">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <img src="/assets/images/elite_mascot_conversion.png" alt="Conversion" className="mascot-icon-img" />,
      title: "Convert your offers",
      desc: "Our traffic converts! Gaming, dating, and entertainment offers of all kinds.",
      color: "rgba(34, 197, 94, 0.5)",
      delay: 0.1
    },
    {
      icon: <img src="/assets/images/elite_mascot_interface.png" alt="Interface" className="mascot-icon-img" />,
      title: "Modern Interface",
      desc: "Our sleek interface saves time and puts you in full control of your monetization.",
      color: "rgba(59, 130, 246, 0.5)",
      delay: 0.2
    },
    {
      icon: <img src="/assets/images/elite_mascot_global.png" alt="Global" className="mascot-icon-img" />,
      title: "Global Coverage",
      desc: "Currently running across over 1 billion impressions daily worldwide.",
      color: "rgba(16, 185, 129, 0.5)",
      delay: 0.3
    },
    {
      icon: <img src="/assets/images/elite_mascot_exclusive.png" alt="Exclusive" className="mascot-icon-img" />,
      title: "Exclusive Placements",
      desc: "Publishers trust Chariotads. Access spots you cannot find anywhere else!",
      color: "rgba(249, 115, 22, 0.5)",
      delay: 0.4
    },
    {
      icon: <img src="/assets/images/elite_mascot_award.png" alt="Award" className="mascot-icon-img" />,
      title: "Award-Winning Service",
      desc: "Winner of over 30 industry awards. Quality is our highest priority.",
      color: "rgba(234, 179, 8, 0.5)",
      delay: 0.5
    },
    {
      icon: <img src="/assets/images/elite_mascot_security.png" alt="Security" className="mascot-icon-img" />,
      title: "No Malware",
      desc: "Safe with us. We prosecute malware distributors to the full extent of the law.",
      color: "rgba(59, 130, 246, 0.5)",
      delay: 0.6
    },
    {
      icon: <img src="/assets/images/elite_mascot_robust.png" alt="Robust" className="mascot-icon-img" />,
      title: "Robust Architecture",
      desc: "Distributed across 5 Datacenters and 3 CDNs for extreme speed and resiliency.",
      color: "rgba(6, 182, 212, 0.5)",
      delay: 0.7
    },
    {
      icon: <img src="/assets/images/chariotads_elite_assistant_mascot.png" alt="Adsistant" className="mascot-icon-img" />,
      title: "Adsistant®",
      desc: "Use our proprietary Elite Tech to auto-optimize while you sleep (party, yoga.. whatever!)",
      color: "transparent",
      delay: 0.8
    },
    {
      icon: <img src="/assets/images/elite_mascot_payment.png" alt="Payment" className="mascot-icon-img" />,
      title: "Pay Your Way",
      desc: "Supports CPC and CPM billing (with CPA/CPL available for select partners).",
      color: "rgba(74, 222, 128, 0.5)",
      delay: 0.9
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="features-grid-v2">
          {features.map((f, i) => (
            <FeatureItem key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AdTypes: React.FC = () => {
  const [activeFormat, setActiveFormat] = useState('Banners');
  
  const adFormats = [
    {
      id: 'Banners',
      title: 'BANNERS',
      desc: 'Banners optimized for Mobile, Desktop, Tablet, or Smart TV / Console traffic with our advanced targeting, to ensure you get exactly the type of traffic you want for your needs.',
      img: '/assets/images/banner_mockup_dash.png'
    },
    {
      id: 'Pop-Unders',
      title: 'POP UNDERS',
      desc: 'PopUnders allow your promotion to be loaded behind the active window and then available to be seen when the visitor closes the window. Voila! Instant attention.',
      img: '/assets/images/popunder_mockup_dash.png'
    },
    {
      id: 'Interstitial',
      title: 'INTERSTITIALS',
      desc: 'Full-page overlays that demand attention. High visibility and peak conversion for premium mobile dating and exclusive entertainment offers.',
      img: '/assets/images/interstitial_mockup_dash.png'
    },
    {
      id: 'Native ads',
      title: 'NATIVE ADS',
      desc: 'Subtle, organic placements that blend into content feeds. Highly effective for increasing engagement on premium galleries without disrupting user experience.',
      img: '/assets/images/native_mockup_dash.png'
    }
  ];

  return (
    <section className="ad-types-elite" id="ad-formats">
      <div className="elite-background-mosaics">
         <div className="elite-mosaic left">
            <div className="mosaic-letter letter-j">J</div>
            <motion.img initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} src="/assets/images/model5.webp" alt="Model 5" className="m-img pos-1" />
            <motion.img initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} src="/assets/images/model1.webp" alt="Model 1" className="m-img pos-2" />
            <motion.img initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} src="/assets/images/model4.webp" alt="Model 4" className="m-img pos-3" />
         </div>
         <div className="elite-mosaic right">
            <div className="mosaic-letter letter-y">Y</div>
            <motion.img initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} src="/assets/images/model8.webp" alt="Model 8" className="m-img pos-4" />
            <div className="mosaic-group pos-5">
              <motion.img initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} src="/assets/images/model7.webp" alt="Model 7" className="m-img-sm" />
              <motion.img initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} src="/assets/images/model1.webp" alt="Model 1 Ref" className="m-img-sm" />
            </div>
            <motion.img initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} src="/assets/images/model6.webp" alt="Model 6" className="m-img pos-6" />
         </div>
      </div>
      <div className="container relative z-10">
        <div className="elite-header text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Ad Types</motion.h2>
          <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>Buy and sell advertising across our network.</motion.h3>
          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>Its easy to get started today with our modern interface and many advertising types.</motion.p>
        </div>
        <motion.div 
          className="elite-main-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="elite-card-content">
            <div className="elite-left-col">
              <motion.div key={activeFormat} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="mockup-container-dashboard">
                <div className="mockup-browser-header">
                   <div className="browser-dots"><span></span><span></span><span></span></div>
                   <div className="browser-url">chariotads.com/stats/{activeFormat.toLowerCase()}</div>
                </div>
                <div className="mockup-dashboard-ui">
                   <div className="mockup-sidebar"><div className="sidebar-item"></div><div className="sidebar-item"></div><div className="sidebar-item active"></div></div>
                   <div className="mockup-canvas">
                      <div className="mockup-top-meta"><div className="meta-pill">LIVE</div><div className="meta-user">CH-9942</div></div>
                      <div className="mockup-dashboard-content">
                         <div className="dash-heading"><h4>{activeFormat} PERFORMANCE</h4><div className="h-line"></div></div>
                         <div className="dash-row top">
                            <div className="dash-stat"><div className="stat-label">IMPR</div><div className="stat-value"><strong>{activeFormat === 'Banners' ? '1.2M' : '842K'}</strong></div></div>
                            <div className="dash-stat"><div className="stat-label">ROI</div><div className="stat-value"><strong>+{activeFormat === 'Banners' ? '18%' : '24%'}</strong></div></div>
                         </div>
                         <div className="dash-chart-area">
                            <div className="chart-bars">
                               {[60, 40, 80, 50, 95, 70, 85].map((h, i) => (
                                 <motion.div key={i} className="chart-bar" style={{ height: h + '%' }} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.05 * i }} />
                               ))}
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            </div>
            <div className="elite-right-col">
              <div className="ad-format-sidebar">
                {adFormats.map(f => (
                  <div key={f.id} className={`format-sidebar-item ${activeFormat === f.id ? 'active' : ''}`} onClick={() => setActiveFormat(f.id)}>
                    <h4>{f.title}</h4>
                    {activeFormat === f.id && <p>{f.desc}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="elite-bottom-nav">
             {adFormats.map((f, idx) => (
               <React.Fragment key={f.id}>
                 <span className={`nav-item ${activeFormat === f.id ? 'active' : ''}`} onClick={() => setActiveFormat(f.id)}>{f.id}</span>
                 {idx < adFormats.length - 1 && <span className="nav-separator">/</span>}
               </React.Fragment>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const InterfaceSection: React.FC = () => {
  return (
    <section className="interface-section">
      <div className="container interface-container">
        <motion.div className="interface-visuals" initial={{ opacity: 0, scale: 0.9, x: -50 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
          <div className="device-composition">
            <motion.img src="/assets/images/chariotads_elite_dashboard_devices.png" alt="Elite Dashboard" className="devices-img" animate={{ y: [0, -10, 0], rotateZ: [-1, 1, -1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
            <motion.div className="floating-ui-card card-1" animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }}><BarChart size={24} color="#fb923c" /><span>Real-time CPM: $4.20</span></motion.div>
            <motion.div className="floating-ui-card card-2" animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}><Zap size={24} color="#fb923c" /><span>Direct Sale Active</span></motion.div>
          </div>
        </motion.div>
        <motion.div className="interface-text" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }}>
          <span className="ux-version">UX VERSION 5.0: ELITE EVOLUTION</span>
          <h2 className="interface-title">CHANGE IS<br/>POWER.</h2>
          <ul className="interface-bullets">
            <li><div className="bullet-dot"></div><span>ZERO LATENCY ANALYTICS</span></li>
            <li><div className="bullet-dot"></div><span>HYPER-FLUID USER INTERFACE</span></li>
          </ul>
          <a href="http://dashboard.chariotads.com/index.php?page=index/register" className="primary-btn interface-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>Explore the Dashboard</a>
        </motion.div>
      </div>
    </section>
  );
};

const PublisherAdvertiser: React.FC = () => {
  const dashboardUrl = "http://dashboard.chariotads.com/index.php?page=index/register";
  return (
    <section className="join-section">
      <div className="join-bg-wrapper">
        <img loading="lazy" src="/assets/images/chariotads_elite_dashboard_devices.png" alt="Dashboard background" className="join-bg-img" />
        <div className="join-overlay"></div>
      </div>
      <div className="container relative z-10">
        <div className="join-grid">
          <motion.div className="join-card publisher-card" onClick={() => window.location.href='/publisher'} style={{ cursor: 'pointer' }} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="card-pattern"></div>
            <div className="join-card-header">
              <div className="join-icon-box"><Monitor size={48} color="white" /></div>
              <div className="join-header-text"><h2>PUBLISHERS</h2><p>Want to monetize your website?</p></div>
            </div>
            <div className="join-divider"></div>
            <ul className="join-list">
              <li><Check size={18} /> Exclusive Advertisers</li>
              <li><Check size={18} /> Weekly Payouts</li>
              <li><Check size={18} /> Many Popular Ad Types</li>
              <li><Check size={18} /> Start earning immediately</li>
              <li><Check size={18} /> Earn more from your ad inventory</li>
            </ul>
          </motion.div>
          <motion.div className="join-card advertiser-card" onClick={() => window.location.href='/advertiser'} style={{ cursor: 'pointer' }} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="card-pattern"></div>
            <div className="join-card-header">
              <div className="join-icon-box"><Target size={48} color="white" /></div>
              <div className="join-header-text"><h2>ADVERTISERS</h2><p>Want to boost traffic and sales?</p></div>
            </div>
            <div className="join-divider"></div>
            <ul className="join-list">
              <li><Check size={18} /> Robust Targeting Options</li>
              <li><Check size={18} /> Dedicated Account Managers</li>
              <li><Check size={18} /> Proprietary Anti-Fraud Detection</li>
              <li><Check size={18} /> Third-party Anti-Fraud Auditing</li>
              <li><Check size={18} /> Automate your media buying</li>
            </ul>
          </motion.div>
        </div>
        <div className="join-cta-btn-wrapper">
          <a href={dashboardUrl} className="get-started-btn">Get Started</a>
        </div>
      </div>
    </section>
  );
};

const ChariotadsBigLogo: React.FC = () => (
  <>
    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
      <filter id="remove-white-big">
        <feColorMatrix type="matrix" values="1 0 0 0 0
                                             0 1 0 0 0
                                             0 0 1 0 0
                                             -1 -1 -1 3 0"/>
      </filter>
    </svg>
    <img 
      src="/chariotads_logo.png" 
      alt="Chariot Ads" 
      className="lifestyle-logo-img" 
      style={{ 
        maxWidth: '700px', 
        width: '100%', 
        height: 'auto', 
        filter: 'url(#remove-white-big) drop-shadow(0 0 40px rgba(251, 146, 60, 0.3))' 
      }} 
    />
  </>
);

const LifestyleSection: React.FC = () => {
  return (
    <section className="lifestyle-section">
      <div className="lifestyle-overlay"></div>
      <div className="lifestyle-content">
        <motion.div className="lifestyle-badge" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>BECOME A PART OF THE</motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}><ChariotadsBigLogo /></motion.div>
        <motion.div className="lifestyle-script" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>Lifestyle!</motion.div>
      </div>
    </section>
  );
};

const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  // loading is currently used for potential future loading states

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchLatestPosts(3);
      if (data && data.length > 0) {
        setPosts(data);
      } else {
        // Fallback to static if WP fails
        setPosts([
          { id: 1, title: { rendered: 'GEO Spotlight: Japan' }, link: '#', excerpt: { rendered: '' }, date: '' },
          { id: 2, title: { rendered: 'Chariotads Partners With 69Cash' }, link: '#', excerpt: { rendered: '' }, date: '' },
          { id: 3, title: { rendered: 'Auto-Optimization Technology' }, link: '#', excerpt: { rendered: '' }, date: '' }
        ] as any);
      }
      // setLoading(false);
    };
    loadPosts();
  }, []);

  return (
    <section className="blog-section" id="blog">
      <div className="blog-banner">
        <motion.div className="banner-person" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}><img loading="lazy" src="/assets/images/excited_person_hero.png" alt="Breaking News" /></motion.div>
        <motion.div className="breaking-news-box" initial={{ opacity: 0, x: 50, rotate: 0 }} whileInView={{ opacity: 1, x: 0, rotate: -5 }} viewport={{ once: true }} transition={{ duration: 0.8 }}><h2>BREAKING<br/><span className="news-text">NEWS</span></h2></motion.div>
      </div>
      <div className="container">
        <motion.div className="featured-card-wrapper" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="blog-featured-card">
            <div className="featured-image-box"><img src="/assets/images/miniature_keyboard.png" alt="Featured" /></div>
            <div className="featured-info-box">
              <span className="featured-category-tag">FEATURED</span>
              <h3>Why Your Ads Are Not Showing and How to Fix It Quickly</h3>
              <p>For publishers, few things are more frustrating than adding ad code to a website and seeing nothing appear... <a href="#" className="read-more">More</a></p>
            </div>
          </div>
        </motion.div>
        <div className="section-title-mini"><h4>LATEST NEWS</h4><div className="line"></div></div>
        <div className="blog-posts-grid">
          {posts.map((post, i) => (
            <motion.div key={post.id} className="blog-item-modern" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}>
              <div className="blog-icon-wrapper"><img src="/assets/images/orange_shapes.png" alt="Icon" className="blog-item-icon" /></div>
              <div className="blog-info-wrapper">
                <h4>{post.title.rendered}</h4>
                <a href={post.link} className="read-more-link-text">READ MORE</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection: React.FC = () => {
  const dashboardUrl = "http://dashboard.chariotads.com/index.php?page=index/register";
  return (
    <section className="cta-banner-section">
      <div className="container cta-banner-content">
        <div className="cta-text-side">
          <motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>Ready to See What Chariotads & The Elite Advertising Network Can Do for You?</motion.h2>
          <motion.p initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>Monetize Your Inventory and Reach Millions of Users.</motion.p>
        </div>
        <div className="cta-button-side">
          <motion.a href={dashboardUrl} className="join-now-btn" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, delay: 0.4 }} style={{ display: 'inline-block', textDecoration: 'none' }}>Join Now</motion.a>
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Features />
            <InterfaceSection />
            <AdTypes />
            <PublisherAdvertiser />
            <LifestyleSection />
            <BlogSection />
            <CTASection />
        </>
    );
}

export default Home;
