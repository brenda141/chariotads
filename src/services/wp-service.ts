// WordPress Service for Chariotads
// To enable dynamic news updates, set your WordPress URL below.
const WP_BASE_URL = 'https://chariotads.com/wp-json/wp/v2';

export interface WordPressPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
    'wp:term'?: Array<Array<{ name: string }>>;
  };
}

export const fetchLatestPosts = async (limit = 3): Promise<WordPressPost[]> => {
  try {
    const response = await fetch(`${WP_BASE_URL}/posts?per_page=${limit}&_embed`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.ok ? response.json() : [];
  } catch (error) {
    console.warn('WordPress fetch failed, using mock data:', error);
    return [];
  }
};

export const fetchPages = async (): Promise<WordPressPost[]> => {
  try {
    const response = await fetch(`${WP_BASE_URL}/pages?_embed`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.ok ? response.json() : [];
  } catch (error) {
    return [];
  }
};
