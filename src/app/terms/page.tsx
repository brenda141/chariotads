'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="terms-hero-content"
          >
            <div className="terms-icon-circle">
               <Shield size={40} color="#fb923c" />
            </div>
            <h1>TERMS <span className="highlight">&</span> CONDITIONS</h1>
            <p>
              Please read our terms and conditions carefully before using our advertising programs and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="terms-nav-section">
        <div className="container">
          <div className="terms-nav-tabs">
            <button className="terms-tab active">ADVERTISER TERMS</button>
            <span className="tab-separator">|</span>
            <button className="terms-tab">PUBLISHER TERMS</button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="terms-content-section">
        <div className="container">
          <motion.div 
            className="terms-card"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="terms-card-header">
               <FileText size={24} color="#fb923c" />
               <h2>ChariotAds Advertising Terms and Conditions</h2>
            </div>
            
            <div className="terms-body">
              <p className="intro-text">
                These ChariotAds Advertising Terms ("Terms") are entered into by "ChariotAds" and the entity executing or accepting these Terms electronically ("Customer"). These Terms govern Customer's participation in ChariotAds's advertising programs and services. In consideration of the foregoing, the parties agree as follows:
              </p>

              <div className="terms-section">
                <h3>1. Authorization and Responsibilities</h3>
                <div className="sub-section">
                  <h4>Customer Authorization:</h4>
                  <p>Customer authorizes ChariotAds and its affiliates to place advertising materials on any content or property provided by ChariotAds or its affiliates, on behalf of itself or a third party ("Partner").</p>
                </div>
                <div className="sub-section">
                  <h4>Customer’s Responsibilities:</h4>
                  <ul>
                    <li><strong>Creative:</strong> Customer is responsible for all creative materials.</li>
                    <li><strong>Ad Trafficking and Targeting:</strong> Customer decides on targeting (e.g., keywords) and ad placement.</li>
                    <li><strong>Destinations:</strong> Customer determines the landing pages and related URLs.</li>
                    <li><strong>Services:</strong> Customer is responsible for the services and products advertised.</li>
                    <li><strong>Automated Tools:</strong> Customer allows ChariotAds to use automated tools to format ads.</li>
                  </ul>
                </div>
              </div>

              <div className="terms-section">
                <h3>2. Prohibited Content</h3>
                <div className="sub-section">
                  <h4>Malware and Malicious Code:</h4>
                  <p>Customer must not provide ads containing malware, spyware, or other malicious content.</p>
                </div>
                <div className="sub-section">
                  <h4>Security Measures:</h4>
                  <p>Customer agrees not to breach or circumvent any security measures implemented by the Program.</p>
                </div>
              </div>

              <div className="terms-section">
                <h3>3. Ad Cancellation</h3>
                <div className="sub-section">
                  <h4>Ad Cancellation Process:</h4>
                  <ul>
                    <li>Either party can cancel ads before the ad auction or placement.</li>
                    <li>Canceled ads will generally stop serving within 8 business hours.</li>
                    <li>Customer must cancel ads via the online account.</li>
                    <li>ChariotAds is not bound by any Customer-provided insertion order (IO).</li>
                  </ul>
                </div>
              </div>

              <div className="terms-section">
                <h3>4. Customer Warranties</h3>
                <div className="sub-section">
                  <h4>Rights to Content:</h4>
                  <p>Customer warrants they hold the necessary rights for Creative, Destinations, and Targets and grants ChariotAds the right to use them for the Programs.</p>
                </div>
                <div className="sub-section">
                  <h4>Accuracy of Information:</h4>
                  <p>Customer ensures all information provided is accurate, complete, and current.</p>
                </div>
                <div className="sub-section">
                  <h4>Third-Party Authorization:</h4>
                  <p>Customer confirms they are authorized to act on behalf of any third parties involved in the advertising.</p>
                </div>
              </div>

              <div className="terms-section">
                <h3>5. Payment Obligations</h3>
                <div className="sub-section">
                  <h4>Payment Terms:</h4>
                  <p>Customer agrees to pay all charges incurred, in immediately available funds or otherwise approved by ChariotAds, within the specified time period.</p>
                </div>
              </div>

              <div className="terms-section">
                <h3>6. Disclaimers</h3>
                <div className="sub-section">
                  <h4>Warranties Disclaimer:</h4>
                  <p>ChariotAds, its affiliates, and Partners disclaim all implied warranties (e.g., non-infringement, quality, merchantability).</p>
                </div>
                <div className="sub-section">
                  <h4>Program “As Is”:</h4>
                  <p>The Programs are provided "AS IS" and at the Customer's own risk. No guarantees are made by ChariotAds regarding the results.</p>
                </div>
              </div>

              <div className="terms-section">
                <h3>7. Limitation of Liability</h3>
                <div className="sub-section">
                  <h4>Liability Limitations:</h4>
                  <p>ChariotAds and its affiliates are not liable for any damages other than direct damages.</p>
                  <p>For any given event, the total liability is limited to the amount paid by the Customer in the 30 days before the event giving rise to the claim.</p>
                </div>
              </div>

              <div className="terms-section">
                <h3>8. Indemnification</h3>
                <div className="sub-section">
                  <h4>Customer’s Indemnity:</h4>
                  <p>Customer agrees to defend, indemnify, and hold harmless ChariotAds, its affiliates, agents, and licensors from any third-party claims related to:</p>
                  <ul>
                    <li>Targeting decisions</li>
                    <li>Creative content</li>
                    <li>Landing pages (Destinations)</li>
                    <li>Breach of these Terms</li>
                  </ul>
                </div>
              </div>

              <div className="terms-section">
                <h3>9. Term and Termination</h3>
                <div className="sub-section">
                  <h4>Modifications:</h4>
                  <p>ChariotAds may modify these Terms at any time. Changes will be effective 7 days after posting.</p>
                </div>
                <div className="sub-section">
                  <h4>Termination:</h4>
                  <ul>
                    <li>Either party may terminate these Terms at any time with notice.</li>
                    <li>ChariotAds may suspend Customer’s participation in the Programs at any time.</li>
                    <li>ChariotAds reserves the right to determine if campaigns will continue after termination.</li>
                  </ul>
                </div>
              </div>

              <div className="terms-section">
                <h3>10. Refund Policy</h3>
                <div className="sub-section">
                  <h4>Refunds:</h4>
                  <p>
                    ChariotAds does not offer refunds once an ad campaign has started, except in cases of technical failure or error caused by ChariotAds. If you believe you are eligible for a refund, please contact us at <a href="mailto:support@chariotads.com">support@chariotads.com</a> for assistance.
                  </p>
                </div>
              </div>

              <div className="terms-section">
                <h3>11. Contact Information</h3>
                <p>For any questions or support inquiries, please reach out to us via email:</p>
                <div className="contact-box">
                  <p><strong>Support Email:</strong> <a href="mailto:support@chariotads.com">support@chariotads.com</a></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="terms-footer-cta">
        <div className="container">
          <div className="cta-box">
             <h2>Ready to grow with an Elite Network?</h2>
             <a href="http://dashboard.chariotads.com/index.php?page=index/register" className="terms-gs-btn">START ADVERTISING TODAY</a>
          </div>
        </div>
      </section>
    </div>
  );
}
