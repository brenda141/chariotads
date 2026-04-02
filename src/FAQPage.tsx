import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import './FAQPage.css';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span className="question-text">
          <span className="q-icon">?</span> {question}
        </span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="faq-answer-wrapper"
          >
            <div className="faq-answer">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'advertiser' | 'publisher'>('advertiser');

  const advertiserFAQs = [
    {
      question: "How do I create a new ad?",
      answer: (
        <div className="faq-answer-content">
          <ol>
            <li>Go to the <strong>Manage Ads</strong> page.</li>
            <li>Click the <strong>"Create Ad"</strong> button at the top-right.</li>
            <li>Follow the steps to define your ad's:
              <ul>
                <li><strong>Details</strong> (Title, Description, Images)</li>
                <li><strong>Pricing</strong></li>
                <li><strong>Targeting</strong></li>
                <li><strong>Budget</strong></li>
              </ul>
            </li>
          </ol>
        </div>
      )
    },
    {
      question: "What are the available pricing models for my ads?",
      answer: (
        <div className="faq-answer-content">
          <p><strong>A: The default pricing models are:</strong></p>
          <p><strong>CPC (Cost Per Click)</strong> – You pay when someone clicks your ad.</p>
          <p><strong>CPM (Cost Per Mille)</strong> – You pay per 1,000 ad impressions.</p>
          <p>You can select your preferred model on the <strong>Ad Info</strong> tab when creating or editing your ad.</p>
        </div>
      )
    },
    {
      question: "What is the \"System suggested CPM rate\" and why is it higher than my selected rate?",
      answer: (
        <div className="faq-answer-content">
          <p>The suggested rate (e.g., $25.01) is the estimated bid needed to make your ad <strong>competitive</strong> and more likely to be displayed. If your chosen rate is too low, your ad may not receive frequent impressions.</p>
        </div>
      )
    },
    {
      question: "Can I run different formats of ads?",
      answer: (
        <div className="faq-answer-content">
          <p>Yes. On the <strong>Ad Info</strong> tab, you select the <strong>Ad Format</strong>. Available options typically include <strong>Text Ad, Banner Ad, Text + Image Ad, and Directlink Ad.</strong></p>
        </div>
      )
    },
    {
      question: "How do I fund my advertiser account, and what are the supported payment methods?",
      answer: (
        <div className="faq-answer-content">
          <p>You can add funds to your account via the <strong>Payments</strong> section. Supported methods include <strong>Check, Bank transfer, PayPal, and Stripe</strong>, with a <strong>minimum payment of $5.00</strong>. Your transaction history is visible on the <strong>Payment History</strong> page.</p>
        </div>
      )
    }
  ];

  const publisherFAQs = [
    {
      question: "How do I add my website to the ad network?",
      answer: (
        <div className="faq-answer-content">
          <p>You must first register your website. Go to <strong>Sites & Adcodes</strong> in the menu, select <strong>Manage Sites</strong>, and click the <strong>"Add Site"</strong> button. You will need to provide your Site Name (URL), Site Title, Category, Keywords, and other details. The site will typically undergo a review process before it becomes <strong>Active</strong>.</p>
        </div>
      )
    },
    {
      question: "How do I start displaying ads on my approved sites?",
      answer: (
        <div className="faq-answer-content">
          <p>Once your site is <strong>Active</strong>, you need to create an <strong>Adcode</strong> (or ad unit). Navigate to <strong>Manage Adcodes</strong> and click <strong>"Create"</strong>. After configuring the Adcode Type, Format, and Pricing preference, you will receive a code snippet to place on your website.</p>
        </div>
      )
    },
    {
      question: "How can I track my performance and earnings?",
      answer: (
        <div className="faq-answer-content">
          <p>You can track your performance through the dedicated reporting sections:</p>
          <ul>
            <li><strong>Publisher Reports</strong>: Provides an Overall summary of Impressions, Clicks, CTR, and your <strong>Profit ($)</strong>. You can break down this data by Time Based and Geo (Geographical) reports.</li>
            <li><strong>Site Reports</strong> and <strong>Adcode Reports</strong>: Provide granular data for individual websites and specific ad units.</li>
          </ul>
        </div>
      )
    },
    {
      question: "How do I set up my payment method and request a withdrawal?",
      answer: (
        <div className="faq-answer-content">
          <p>All payment settings are managed under the <strong>Payouts</strong> section:</p>
          <p>To set up or change your method, go to <strong>Configure</strong>. Available methods include <strong>Check, Bank</strong>, and <strong>PayPal</strong>. To get paid, go to <strong>Request</strong> to initiate a withdrawal, and you can track past payments under <strong>Withdrawal History</strong>.</p>
        </div>
      )
    },
    {
      question: "What are the available ad types and formats I can offer on my site?",
      answer: (
        <div className="faq-answer-content">
          <p>When creating an Adcode, you have flexibility in how ads are displayed:</p>
          <ul>
            <li><strong>Ad Display</strong>: <strong>Predefined</strong> (standard) or <strong>Native</strong> (integrated).</li>
            <li><strong>Adcode Type</strong>: <strong>Text Only, Banner Only, Text + Image Only</strong>, or a combination.</li>
            <li><strong>Adcode Format</strong>: <strong>Normal Adcode</strong> or <strong>In-Page Push Ads</strong>.</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="faq-page">
      {/* Hero */}
      <section className="faq-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="faq-hero-content"
          >
            <div className="faq-icon-circle">
               <HelpCircle size={40} color="#fb923c" />
            </div>
            <h1>FREQUENTLY ASKED <span className="highlight">QUESTIONS</span></h1>
            <p>Everything you need to know about scaling your impact with Chariotads.</p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="faq-tabs-section">
        <div className="container">
          <div className="faq-tabs-container">
            <button 
              className={`faq-tab ${activeTab === 'advertiser' ? 'active' : ''}`}
              onClick={() => setActiveTab('advertiser')}
            >
              ADVERTISER'S FAQS
            </button>
            <button 
              className={`faq-tab ${activeTab === 'publisher' ? 'active' : ''}`}
              onClick={() => setActiveTab('publisher')}
            >
              PUBLISHER'S FAQS
            </button>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="faq-accordion-section">
        <div className="container">
          <div className="faq-list">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: activeTab === 'advertiser' ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: activeTab === 'advertiser' ? 20 : -20 }}
                transition={{ duration: 0.4 }}
              >
                {(activeTab === 'advertiser' ? advertiserFAQs : publisherFAQs).map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Still Have Questions? */}
      <section className="faq-footer-cta">
        <div className="container">
          <div className="cta-box">
             <h2>Still have questions?</h2>
             <p>Our elite support team is ready to help you with any inquiries.</p>
             <div className="cta-btns">
                <a href="mailto:support@cockchante.com" className="faq-primary-btn">EMAIL SUPPORT</a>
                <a href="/contact" className="faq-secondary-btn">CONTACT PAGE</a>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
