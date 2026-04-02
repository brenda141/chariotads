import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, HelpCircle, Send, Globe, Shield } from 'lucide-react';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend or a service like Formspree
    // For now, we'll simulate a successful submission
    setIsSubmitted(true);
  };

  const faqs = [
    { q: "How do I join Chariotads?", a: "To join as a publisher or advertiser, simply click 'Join Now' on our home page or navigate to the respective role pages. Fill out the application, and our elite team will review it within 24 hours." },
    { q: "What are the payment terms?", a: "We offer weekly payouts for publishers with a low minimum threshold ($50). We support Wire, PayPal, and Paxum." },
    { q: "What ad formats do you support?", a: "We support a wide variety of formats including Banners (IAB Standard), Pop Unders, Interstitials, and Native Ads." },
    { q: "Is the traffic safe?", a: "Yes. Our proprietary anti-fraud technology and rigorous testing ensure all traffic is malware-free and high-quality." }
  ];

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <motion.div 
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>How can we help?</h1>
            <p>Our elite support team is available 24/7 to assist with your advertising and publishing needs.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="contact-main">
        <div className="container">
           <div className="contact-grid">
              {/* FAQ Column */}
              <div className="faq-col">
                 <div className="section-header-mini">
                    <HelpCircle color="#fb923c" size={24} />
                    <h3>Frequently Asked Questions</h3>
                 </div>
                 <div className="faq-list">
                    {faqs.map((faq, i) => (
                      <motion.div 
                        key={i} 
                        className="faq-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                         <h4>{faq.q}</h4>
                         <p>{faq.a}</p>
                      </motion.div>
                    ))}
                 </div>
              </div>

              {/* Form Column */}
              <div className="form-col">
                 <motion.div 
                   className="contact-form-card"
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                 >
                     <div className="card-header">
                        <MessageSquare color="white" size={24} />
                        <h3>Send us a message</h3>
                     </div>
                     {isSubmitted ? (
                        <motion.div 
                          className="form-success-message"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                           <Shield color="#fb923c" size={48} />
                           <h3>Message Sent!</h3>
                           <p>Thank you for contacting our elite support team. We will get back to you shortly.</p>
                           <button onClick={() => setIsSubmitted(false)} className="submit-btn" style={{ maxWidth: '250px' }}>SEND ANOTHER</button>
                        </motion.div>
                     ) : (
                        <form className="elite-form" onSubmit={handleSubmit}>
                           <div className="form-row">
                              <input type="text" placeholder="Full Name" required />
                              <input type="email" placeholder="Email Address" required />
                           </div>
                           <input type="text" placeholder="Subject" className="full-width" required />
                           <textarea placeholder="How can we help you?" className="full-width" required></textarea>
                           <button type="submit" className="submit-btn" id="contact-submit">
                              SEND MESSAGE <Send size={18} />
                           </button>
                        </form>
                     )}
                 </motion.div>
              </div>
           </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="contact-info-cards">
        <div className="container">
           <div className="info-cards-grid">
               <motion.div className="info-card" whileHover={{ y: -10 }}>
                  <Mail size={40} color="#fb923c" />
                  <h4>Email Support</h4>
                  <p>support@chariotads.com</p>
               </motion.div>
               <motion.div className="info-card" whileHover={{ y: -10 }}>
                  <Globe size={40} color="#fb923c" />
                  <h4>Global HQ</h4>
                  <p>Elite Business Tower, Dubai</p>
               </motion.div>
               <motion.div className="info-card" whileHover={{ y: -10 }}>
                  <Shield size={40} color="#fb923c" />
                  <h4>Security Team</h4>
                  <p>security@chariotads.com</p>
               </motion.div>
           </div>
        </div>
      </section>

      {/* Final Map/Visual */}
      <section className="contact-footer-cta">
         <div className="container text-center">
            <h2>Experience the Elite difference.</h2>
            <p>Ready to start? Sign up today and get access to our full suite of advertising tools.</p>
            <a href="http://dashboard.chariotads.com/index.php?page=index/register" className="contact-gs-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>GET STARTED NOW</a>
         </div>
      </section>
    </div>
  );
};

export default ContactPage;
