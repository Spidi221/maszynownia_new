import { useState, useEffect } from 'react';
import { parseFrontmatter } from '../utils/parseFrontmatter';

/**
 * Custom hook to load and parse news articles from content/news/*.md
 * Uses Vite's import.meta.glob for dynamic markdown imports
 */
const useNewsData = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);

        // Import all markdown files from content/news/
        // { eager: false, as: 'raw' } loads files as raw text
        const newsFiles = import.meta.glob('/content/news/*.md', {
          eager: false,
          query: '?raw',
          import: 'default'
        });

        // Parse each markdown file
        const newsPromises = Object.entries(newsFiles).map(async ([path, importFn]) => {
          const rawContent = await importFn();

          // Parse frontmatter with custom parser (no Buffer dependency)
          const { data, content } = parseFrontmatter(rawContent);

          // Extract filename for ID
          const filename = path.split('/').pop().replace('.md', '');

          return {
            id: filename,
            title: data.title || 'Untitled',
            date: data.date || new Date().toISOString(),
            author: data.author || 'Maszynownia',
            category: data.category || 'Aktualności',
            excerpt: data.excerpt || '',
            image: data.image || '/images/placeholder-news.jpg',
            status: data.status || 'draft',
            content: content,
            path: path
          };
        });

        const allNews = await Promise.all(newsPromises);

        // Filter only published articles
        const publishedNews = allNews.filter(article => article.status === 'published');

        // Sort by date (newest first)
        const sortedNews = publishedNews.sort((a, b) =>
          new Date(b.date) - new Date(a.date)
        );

        setNews(sortedNews);
        setError(null);
      } catch (err) {
        console.error('Error loading news:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  return { news, loading, error };
};

export default useNewsData;
