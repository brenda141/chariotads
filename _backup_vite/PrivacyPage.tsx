import React from 'react';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck } from 'lucide-react';
import './PrivacyPage.css';

const PrivacyPage: React.FC = () => {
  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="privacy-hero-content"
          >
            <div className="privacy-icon-circle">
               <Lock size={40} color="#fb923c" />
            </div>
            <h1>PRIVACY <span className="highlight">POLICY</span></h1>
            <p>
              Your privacy is our priority. Learn how Chariotads protects your data and respects your rights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="privacy-content-section">
        <div className="container">
          <motion.div 
            className="privacy-card"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="privacy-card-header">
               <ShieldCheck size={24} color="#fb923c" />
               <h2>Privacy Policy for ChariotAds</h2>
            </div>
            
            <div className="privacy-body">
              <p className="intro-text">
                At ChariotAds, accessible from <a href="https://chariotads.com">https://chariotads.com</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy explains the types of information we collect, how we use it, and your rights regarding your data.
              </p>

              <div className="contact-callout">
                If you have additional questions, you can contact us at: <a href="mailto:support@chariotads.com">support@chariotads.com</a>.
              </div>

              <div className="privacy-section">
                <h3>1. General Data Protection Regulation (GDPR)</h3>
                <p>We are the Data Controller of your information. Our legal basis for collecting and using personal information depends on the context:</p>
                <ul>
                  <li>To perform a contract with you</li>
                  <li>With your consent</li>
                  <li>For our legitimate interests</li>
                  <li>To comply with legal obligations</li>
                </ul>
                <p>We retain your personal information only as long as necessary for these purposes, including complying with laws, resolving disputes, and enforcing our policies.</p>
              </div>

              <div className="privacy-section">
                <h3>2. Your Data Protection Rights (EEA Residents)</h3>
                <p>If you live in the European Economic Area (EEA), you have the following rights:</p>
                <div className="rights-grid">
                  <div className="right-item">Access, update, or delete your personal information</div>
                  <div className="right-item">Rectification of inaccurate data</div>
                  <div className="right-item">Object to processing</div>
                  <div className="right-item">Restriction of processing</div>
                  <div className="right-item">Data portability</div>
                  <div className="right-item">Withdraw consent</div>
                </div>
                <p>To exercise these rights, contact us at <a href="mailto:support@chariotads.com">support@chariotads.com</a>.</p>
              </div>

              <div className="privacy-section">
                <h3>3. Log Files</h3>
                <p>Like most websites, ChariotAds uses log files to collect standard information, including:</p>
                <ul>
                  <li>IP addresses</li>
                  <li>Browser type</li>
                  <li>Internet Service Provider (ISP)</li>
                  <li>Date/time stamps</li>
                  <li>Referring/exit pages</li>
                  <li>Click counts</li>
                </ul>
                <p>This information helps us analyze trends, manage the site, and improve user experience. Log data is not linked to personally identifiable information.</p>
              </div>

              <div className="privacy-section">
                <h3>4. Cookies and Web Beacons</h3>
                <p>We use cookies to:</p>
                <ul>
                  <li>Store visitor preferences</li>
                  <li>Improve user experience</li>
                  <li>Track page usage</li>
                </ul>
                <p>Cookies may come from ChariotAds or trusted third parties. Disabling cookies may reduce site functionality.</p>
              </div>

              <div className="privacy-section">
                <h3>5. Google DoubleClick DART Cookie</h3>
                <p>
                  Google, as a third-party vendor, uses DART cookies to serve ads based on your browsing. You can opt out of DART cookies here: 
                  <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer"> Google Ads & Content Network Privacy Policy</a>.
                </p>
              </div>

              <div className="privacy-section">
                <h3>6. Advertising Partners</h3>
                <p>Some advertising partners may use cookies and web beacons. These third-party cookies:</p>
                <ul>
                  <li>Measure ad performance</li>
                  <li>Personalize advertising content</li>
                  <li>Track affiliate referrals</li>
                </ul>
                <p>We do not control these cookies. Consult the respective partner’s Privacy Policies for more information.</p>
              </div>

              <div className="privacy-section">
                <h3>7. Third-Party Privacy Policies</h3>
                <p>This Privacy Policy does not apply to other websites or advertisers. For detailed information, please check each third party’s Privacy Policy.</p>
              </div>

              <div className="privacy-section">
                <h3>8. Children’s Privacy</h3>
                <p>Protecting children online is important. ChariotAds does not knowingly collect personal data from children under 13.</p>
                <p>If you believe your child has provided personal information, contact us at <a href="mailto:support@chariotads.com">support@chariotads.com</a>. We will promptly remove such data.</p>
              </div>

              <div className="privacy-section">
                <h3>9. Online Privacy Only</h3>
                <p>This policy applies only to online activities on <a href="https://chariotads.com">https://chariotads.com</a>. It does not cover offline information or other channels.</p>
              </div>

              <div className="privacy-section consent-section">
                <h3>10. Consent</h3>
                <p>By using our website <a href="https://chariotads.com">https://chariotads.com</a>, you consent to this Privacy Policy and agree to its terms.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="privacy-footer-cta">
        <div className="container">
          <div className="cta-box">
             <h2>Secure your advertising future.</h2>
             <a href="http://dashboard.chariotads.com/index.php?page=index/register" className="privacy-gs-btn">JOIN CHARIOTADS NOW</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
