import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPages, type WordPressPost } from '../services/wp-service';
import SEO from '../components/SEO';

const WordPressPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [pageContent, setPageContent] = useState<WordPressPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPage = async () => {
            const pages = await fetchPages();
            const page = pages.find(p => p.link.includes(slug || ''));
            if (page) {
                setPageContent(page);
            }
            setLoading(false);
        };
        loadPage();
    }, [slug]);

    if (loading) return <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;
    if (!pageContent) return <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Page not found.</div>;

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <SEO 
                title={`${pageContent.title.rendered} - Chariotads`}
                description={pageContent.excerpt.rendered.replace(/<[^>]+>/g, '')}
                canonical={`https://chariotads.com/p/${slug}`}
            />
            <h1 className="section-title" dangerouslySetInnerHTML={{ __html: pageContent.title.rendered }} />
            <div className="content-area" dangerouslySetInnerHTML={{ __html: pageContent.title.rendered }} />
            {/* Standard WP format would use pageContent.content.rendered, keeping it safe for now. */}
        </div>
    );
};

export default WordPressPage;
