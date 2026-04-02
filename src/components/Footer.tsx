import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const ChariotLogo: React.FC = () => (
  <>
    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
      <filter id="remove-white-footer">
        <feColorMatrix type="matrix" values="1 0 0 0 0
                                             0 1 0 0 0
                                             0 0 1 0 0
                                             -1 -1 -1 3 0"/>
      </filter>
    </svg>
    <img 
      src="/chariotads_logo.png" 
      alt="Chariot Ads" 
      style={{ 
        height: '110px', 
        width: 'auto', 
        objectFit: 'contain',
        filter: 'url(#remove-white-footer) drop-shadow(0 0 12px rgba(251, 146, 60, 0.4))',
        marginLeft: '-25px'
      }} 
    />
  </>
);

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleBlogScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const dashboardUrl = "http://dashboard.chariotads.com/index.php?page=index/register";

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-logo-col">
            <div className="logo-section">
              <ChariotLogo />
            </div>
            <p className="copyright-text">© 2006-2026 Chariotads.com<br/>All rights reserved.</p>
          </div>
          
          <div className="footer-col">
            <h4>PUBLISHERS</h4>
            <ul className="footer-links">
              <li><a href={dashboardUrl}>Join Now</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>ADVERTISERS</h4>
            <ul className="footer-links">
              <li><NavLink to="/advertiser">Buy Traffic</NavLink></li>
              <li><NavLink to="/adsistant">Adsistant®</NavLink></li>
              <li><NavLink to="/targeting">Targeting</NavLink></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>SUPPORT</h4>
            <ul className="footer-links">
              <li><a href="/" onClick={handleBlogScroll}>Latest News</a></li>
              <li><NavLink to="/contact">Help & Contact</NavLink></li>
              <li><NavLink to="/terms">Terms & Conditions</NavLink></li>
              <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
              <li><NavLink to="/faq">FAQ</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-socials">
             <a href="https://x.com/charioads36" target="_blank" rel="noopener noreferrer" className="social-link">X</a>
             <a href="https://www.facebook.com/profile.php?id=61588052168432" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
             <a href="https://chariotads.com/" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
             <a href="https://www.linkedin.com/in/chariotads-promo-8a43bb3b4" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          </div>
          <p className="copyright-text">Elite Advertising Network - Performance Driven.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
