import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Chariotads - Digital Advertising Insights & Trends",
  description:
    "Stay ahead with the latest insights on AI-powered advertising, privacy-first marketing, and digital ad industry trends from the Chariotads team.",
  alternates: {
    canonical: "https://chariotads.com/blog",
  },
  openGraph: {
    title: "Blog | Chariotads - Digital Advertising Insights & Trends",
    description:
      "Stay ahead with the latest insights on AI-powered advertising, privacy-first marketing, and digital ad industry trends.",
    url: "https://chariotads.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="blog-listing-hero">
        <h1>Chariotads Blog</h1>
        <p>
          Industry insights, advertising strategies, and the latest trends in
          digital marketing — curated by our team.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid">
        {/* Card 1 */}
        <Link
          href="/blog/ai-powered-advertising-2026"
          className="blog-card"
          id="blog-card-ai"
        >
          <div className="blog-card-banner banner-ai">
            <div className="banner-pattern" />
            <span className="banner-icon">🤖</span>
            <span className="blog-card-tag">AI &amp; Machine Learning</span>
          </div>
          <div className="blog-card-content">
            <h2>
              The Rise of AI-Powered Advertising: How Machine Learning is
              Transforming Digital Marketing in 2026
            </h2>
            <p>
              Explore how artificial intelligence and machine learning are
              revolutionizing ad targeting, creative optimization, and ROI
              prediction across the digital advertising landscape.
            </p>
            <div className="blog-card-meta">
              <span>📅 April 12, 2026</span>
              <span>⏱ 6 min read</span>
              <span>✍️ Chariotads Team</span>
            </div>
          </div>
        </Link>

        {/* Card 2 */}
        <Link
          href="/blog/privacy-first-advertising-2026"
          className="blog-card"
          id="blog-card-privacy"
        >
          <div className="blog-card-banner banner-privacy">
            <div className="banner-pattern" />
            <span className="banner-icon">🛡️</span>
            <span className="blog-card-tag">Privacy &amp; Compliance</span>
          </div>
          <div className="blog-card-content">
            <h2>
              Privacy-First Advertising: Navigating the Cookieless Future of
              Digital Ads in 2026
            </h2>
            <p>
              Discover how the shift to cookieless targeting, first-party data
              strategies, and contextual advertising is reshaping the ad
              industry for publishers and advertisers alike.
            </p>
            <div className="blog-card-meta">
              <span>📅 April 10, 2026</span>
              <span>⏱ 6 min read</span>
              <span>✍️ Chariotads Team</span>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}
