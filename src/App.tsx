import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MessageSquare, X } from 'lucide-react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEO from './components/SEO';

// Pages
import Home from './pages/Home';
import PublisherPage from './PublisherPage';
import AdvertiserPage from './AdvertiserPage';
import AdsistantPage from './AdsistantPage';
import TargetingPage from './TargetingPage';
import ContactPage from './ContactPage';
import WordPressPage from './pages/WordPressPage';

// Styles
import './PublisherPage.css';
import './AdvertiserPage.css';
import './AdsistantPage.css';
import './TargetingPage.css';
import './ContactPage.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
              <SEO 
                title="Chariotads - Elite Advertising Network" 
                description="Scale your impact with Chariotads. Our elite ad network offers high-speed performance advertising for publishers and advertisers worldwide."
                canonical="https://chariotads.com/"
              />
              <Home />
            </>
          } />

          {/* Publisher Route */}
          <Route path="/publisher" element={
            <>
              <SEO 
                title="Monetize Your Traffic - Chariotads Publisher Solutions" 
                description="Join the elite network of publishers and start earning more from your ad inventory today. High CPMs and weekly payouts."
                canonical="https://chariotads.com/publisher"
              />
              <PublisherPage />
            </>
          } />

          {/* Advertiser Route */}
          <Route path="/advertiser" element={
            <>
              <SEO 
                title="Buy High-Quality Traffic - Chariotads Advertiser Solutions" 
                description="Reach millions of users with our robust targeting and elite ad formats. Scale your campaigns with precision."
                canonical="https://chariotads.com/advertiser"
              />
              <AdvertiserPage />
            </>
          } />

          {/* Adsistant Route */}
          <Route path="/adsistant" element={
            <>
              <SEO 
                title="Adsistant® - Automated Optimization - Chariotads" 
                description="Use our proprietary Elite Tech to auto-optimize your campaigns while you sleep. Maximum ROI with minimum effort."
                canonical="https://chariotads.com/adsistant"
              />
              <AdsistantPage />
            </>
          } />

          {/* Targeting Route */}
          <Route path="/targeting" element={
            <>
              <SEO 
                title="Precision Ad Targeting - Chariotads Elite Network" 
                description="Target your audience by GEO, device, carrier, and more. Our advanced targeting ensures your ads reach the right people."
                canonical="https://chariotads.com/targeting"
              />
              <TargetingPage />
            </>
          } />

          {/* Contact Route */}
          <Route path="/contact" element={
            <>
              <SEO 
                title="Contact Us - Chariotads Support" 
                description="Have questions? Get in touch with our elite support team for help with your advertising or publishing needs."
                canonical="https://chariotads.com/contact"
              />
              <ContactPage />
            </>
          } />

          {/* Dynamic WordPress Routes */}
          <Route path="/p/:slug" element={<WordPressPage />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />

        {/* Floating Chat UI */}
        <div className="floating-chat">
          <div className="chat-tooltip">Hi. Need any help? <X size={14} className="close-tooltip" /></div>
          <div className="chat-icon-box">
            <MessageSquare size={24} color="white" />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
