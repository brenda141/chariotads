import type { Metadata } from "next";
import "./globals.css";
// Importing all page-specific CSS files here to ensure layout stays consistent during migration
import "../AdsistantPage.css";
import "../AdvertiserPage.css";
import "../ContactPage.css";
import "../FAQPage.css";
import "../PrivacyPage.css";
import "../PublisherPage.css";
import "../TargetingPage.css";
import "../TermsPage.css";

import { MessageSquare, X } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chariotads - Elite Advertising Network",
  description: "Scale your impact with Chariotads. Our elite ad network offers high-speed performance advertising for publishers and advertisers worldwide.",
  keywords: [
    "buy cheap adult traffic", "buy and sell adult traffic", "advertise my adult website",
    "adult ad networks for publishers", "adult advertising network", "adult ads network",
    "adult ads networks", "adult advertising sites", "adult banner ads",
    "adult mobile ad network", "adult website advertising", "adult website ads",
    "adult internet marketing", "buy adult traffic", "buy porn traffic",
    "cheap adult traffic", "best adult traffic source", "best adult advertising network for publishers",
    "high quality adult traffic sources", "buy targeted adult web traffic", "adult ad network for monetization",
    "adult banner ads network platform", "adult mobile advertising network", "top adult advertising sites list",
    "buy adult traffic for website growth", "adult website ads monetization platform", "best adult ads network for beginners",
    "adult internet marketing services", "advertise adult website online", "buy cheap porn traffic online",
    "adult ad publisher network platform", "digital marketing for adult websites", "best adult traffic source worldwide",
    "adult advertising network for bloggers", "adult ads network for high CPC", "adult website promotion services",
    "adult traffic network for affiliates", "adult ad network with high payouts", "adult advertising platform for business",
    "adult ads network for global traffic"
  ],
  authors: [{ name: "Chariotads", url: "https://chariotads.com" }],
  creator: "Chariotads",
  publisher: "Chariotads",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/assets/images/branded-wheel.png',
    apple: '/assets/images/branded-wheel.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://chariotads.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chariotads.com/",
    title: "Chariotads - Elite Advertising Network",
    description: "Scale your impact with Chariotads. Our elite ad network offers high-speed performance advertising.",
    siteName: "Chariotads",
    images: [
      {
        url: "https://chariotads.com/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Chariotads Ad Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chariotads - Elite Advertising Network",
    description: "Scale your impact with Chariotads. Our elite ad network offers high-speed performance advertising.",
    creator: "@chariotads36",
    images: ["https://chariotads.com/assets/images/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://chariotads.com/#organization",
      "name": "Chariotads",
      "url": "https://chariotads.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chariotads.com/assets/images/logo.png"
      },
      "description": "Chariotads is an elite advertising network that offers high-speed performance advertising for publishers and advertisers worldwide, specializing in web traffic, dating, gaming, and entertainment offers.",
      "sameAs": [
        "https://x.com/charioads36",
        "https://www.facebook.com/profile.php?id=61588052168432",
        "https://www.linkedin.com/in/chariotads-promo-8a43bb3b4"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://chariotads.com/#website",
      "url": "https://chariotads.com/",
      "name": "Chariotads - Elite Advertising Network",
      "publisher": {
        "@id": "https://chariotads.com/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the available pricing models for my ads on Chariotads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The default pricing models on Chariotads are CPC (Cost Per Click) and CPM (Cost Per Mille). You pay when someone clicks your ad or per 1,000 ad impressions."
          }
        },
        {
          "@type": "Question",
          "name": "How do I fund my advertiser account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Advertisers can add funds to their account via Check, Bank transfer, PayPal, and Stripe, with a minimum payment of $5.00."
          }
        },
        {
          "@type": "Question",
          "name": "How do publishers get paid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Publishers can receive their payouts via Check, Bank Wire, and PayPal directly through the Payouts configuration panel."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Open+Sans:wght@400;600&family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&family=DM+Serif+Display:ital@0;1&family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="app">
          <Navbar />
          <main>{children}</main>
          <Footer />

          {/* Floating Chat UI preserved from original App.tsx */}
          <div className="floating-chat">
            <div className="chat-tooltip">Hi. Need any help? <X size={14} className="close-tooltip" /></div>
            <div className="chat-icon-box">
              <MessageSquare size={24} color="white" />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
