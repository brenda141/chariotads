import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

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
    <line x1="2" y1="16" x2="9" y2="16" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
    <line x1="0" y1="22" x2="8" y2="22" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <line x1="2" y1="28" x2="9" y2="28" stroke="#fb923c" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
    <circle cx="26" cy="22" r="16" stroke="url(#rimGrad)" strokeWidth="2.5"/>
    <line x1="26" y1="6" x2="26" y2="12" stroke="url(#rimGrad)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="26" y1="38" x2="26" y2="32" stroke="url(#rimGrad)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="10" y1="22" x2="16" y2="22" stroke="url(#rimGrad)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="42" y1="22" x2="36" y2="22" stroke="url(#rimGrad)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="14.69" y1="10.69" x2="18.95" y2="14.95" stroke="url(#rimGrad)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="37.31" y1="33.31" x2="33.05" y2="29.05" stroke="url(#rimGrad)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="14.69" y1="33.31" x2="18.95" y2="29.05" stroke="url(#rimGrad)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="37.31" y1="10.69" x2="33.05" y2="14.95" stroke="url(#rimGrad)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="26" cy="22" r="4.5" fill="url(#hubGrad)"/>
    <circle cx="26" cy="22" r="2" fill="#0a1a2e"/>
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleBlogScroll = () => {
    setIsOpen(false);
    navigate('/');
    setTimeout(() => {
      document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const dashboardUrl = "http://dashboard.chariotads.com/index.php?page=index/register";

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <NavLink to="/" className="logo-section">
          <ChariotLogo />
          <span className="logo-text">Chariotads</span>
        </NavLink>

        <div className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>HOME</NavLink>
          <NavLink to="/publisher" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>PUBLISHER</NavLink>
          <div className="nav-dropdown">
            <span className="nav-link">ADVERTISERS <ChevronDown size={14} /></span>
            <div className="dropdown-menu">
              <NavLink to="/advertiser" onClick={() => setIsOpen(false)}>Buy Traffic</NavLink>
              <NavLink to="/adsistant" onClick={() => setIsOpen(false)}>Adsistant®</NavLink>
              <NavLink to="/targeting" onClick={() => setIsOpen(false)}>Targeting</NavLink>
            </div>
          </div>
          <a onClick={handleBlogScroll} className="nav-link" style={{ cursor: 'pointer' }}>NEWS</a>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>CONTACT</NavLink>
          <a href={dashboardUrl} className="login-btn mobile-only">Login</a>
        </div>

        <div className="nav-actions desktop-only">
          <a href={dashboardUrl} className="login-btn">Login</a>
        </div>

        <button className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
           {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
