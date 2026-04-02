import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const ChariotLogo: React.FC = () => (
  <>
    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
      <filter id="remove-white">
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
        height: '75px', 
        width: 'auto', 
        objectFit: 'contain',
        filter: 'url(#remove-white) drop-shadow(0 0 8px rgba(251, 146, 60, 0.4))'
      }} 
    />
  </>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleBlogScroll = () => {
    setIsOpen(false);
    navigate('/');
    setTimeout(() => {
      document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };



  return (
    <nav className="navbar">
      <div className="container nav-content">
        <NavLink to="/" className="logo-section">
          <ChariotLogo />
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
          
          {/* Mobile Only Auth Links */}
          <div className="mobile-only" style={{ display: isOpen ? 'flex' : 'none', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
            <a href="http://dashboard.chariotads.com/index.php?page=index/login" className="login-btn" style={{ background: 'transparent', border: '1px solid var(--elite-orange)' }}>Login</a>
            <a href="http://dashboard.chariotads.com/index.php?page=index/register" className="login-btn">Sign Up</a>
          </div>
        </div>

        {!isMobile && (
          <div className="nav-actions desktop-only">
            <a href="http://dashboard.chariotads.com/index.php?page=index/login" className="login-btn outline-btn">Login</a>
            <a href="http://dashboard.chariotads.com/index.php?page=index/register" className="login-btn">Sign Up</a>
          </div>
        )}

        <button className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
           {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
