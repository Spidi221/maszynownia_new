import { useState, useEffect } from 'react';

/**
 * Hook for responsive image loading - optimized for Lighthouse Performance
 * Returns mobile-optimized images on small screens, full quality on desktop
 *
 * @param {string} basePath - Base image path (e.g., '/images/pikniki.webp')
 * @returns {string} - Optimized image path based on screen size
 */
export const useResponsiveImage = (basePath) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on mobile/tablet (< 1024px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    checkMobile();

    // Listen for resize events (debounced)
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Return mobile version for screens < 1024px, desktop version for larger screens
  if (isMobile && basePath) {
    // Convert '/images/photo.webp' to '/images/photo-mobile.webp'
    return basePath.replace('.webp', '-mobile.webp');
  }

  return basePath; // Return original high-quality image for desktop
};

export default useResponsiveImage;