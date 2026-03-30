import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const ChariotLogo: React.FC = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="rimGrad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fb923c"/>
        <stop offset="100%" stopColor="#f59e0b"/>
      </linearGradient>
      <linearGradient id="hubGrad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fbbf24"/>
        <stop offset="100%" stopColor="#ea580c"/>
      </linearGradient>
    </defs>
    <circle cx="26" cy="22" r="16" stroke="url(#rimGrad)" strokeWidth="2.5"/>
    <circle cx="26" cy="22" r="4.5" fill="url(#hubGrad)"/>
    <circle cx="26" cy="22" r="2" fill="#0a1a2e"/>
  </svg>
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
              <span className="logo-text">Chariotads</span>
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
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-socials">
             <a href="https://chariotads.com/" className="social-icon">X</a>
             <a href="https://chariotads.com/" className="social-icon">Facebook</a>
             <a href="https://chariotads.com/" className="social-icon">Instagram</a>
             <a href="https://chariotads.com/" className="social-icon">LinkedIn</a>
          </div>
          <p className="copyright-text">Elite Advertising Network - Performance Driven.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
