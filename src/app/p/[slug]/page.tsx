import React from 'react';
import { fetchPages, type WordPressPost } from '@/services/wp-service';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const pages = await fetchPages();
  const page = pages.find((p: WordPressPost) => p.link.includes(slug));

  if (!page) {
    return {
      title: 'Page Not Found - Chariotads',
    };
  }

  return {
    title: `${page.title.rendered} - Chariotads`,
    description: page.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 160),
    alternates: {
      canonical: `https://chariotads.com/p/${slug}`,
    },
  };
}

export default async function WordPressPage({ params }: Props) {
  const { slug } = await params;
  const pages = await fetchPages();
  const page = pages.find((p: WordPressPost) => p.link.includes(slug));

  if (!page) {
    return (
      <div className="container" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '120px' }}>
        <h1>Page not found.</h1>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <h1 className="section-title" dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
      <div className="content-area" dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
      {/* If WordPress content exists in the API, we would use it here. 
          The original code used pageContent.title.rendered for both title and content, 
          which might be a placeholder or specific to their setup. */}
    </div>
  );
}
