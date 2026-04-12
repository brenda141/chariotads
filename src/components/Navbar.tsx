'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
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
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleBlogScroll = () => {
    setIsOpen(false);
    router.push('/');
    setTimeout(() => {
      document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };



  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link href="/" className="logo-section">
          <ChariotLogo />
        </Link>

        <div className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>HOME</Link>
          <Link href="/publisher" className={`nav-link ${pathname === '/publisher' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>PUBLISHER</Link>
          <div className="nav-dropdown">
            <span className="nav-link">ADVERTISERS <ChevronDown size={14} /></span>
            <div className="dropdown-menu">
              <Link href="/advertiser" onClick={() => setIsOpen(false)}>Buy Traffic</Link>
              <Link href="/adsistant" onClick={() => setIsOpen(false)}>Adsistant®</Link>
              <Link href="/targeting" onClick={() => setIsOpen(false)}>Targeting</Link>
            </div>
          </div>
          <a onClick={handleBlogScroll} className="nav-link" style={{ cursor: 'pointer' }}>NEWS</a>
          <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>CONTACT</Link>
          
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
