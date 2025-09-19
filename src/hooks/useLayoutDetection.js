import { useState, useEffect } from 'react';

/**
 * Smart Layout Detection Hook
 * Inteligentnie wykrywa czy urządzenie ma dość miejsca na desktop layout
 * + Hero Content Protection System (Apple/Netflix style)
 * Based on: Apple, Netflix, Stripe approach
 */
export const useLayoutDetection = () => {
  const [layoutMode, setLayoutMode] = useState('mobile');
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [heroLayout, setHeroLayout] = useState({
    hasSpaceForSeparateLayout: false,
    textOverlapsImage: true,
    needsProtection: true,
    protectionLevel: 'full' // 'none', 'partial', 'full'
  });

  useEffect(() => {
    const detectLayout = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setDimensions({ width, height });

      // Smart detection algorithm
      // Desktop layout jeśli:
      // 1. Szerokość ≥ 768px (minimum dla nav items)
      // 2. Wysokość ≥ 500px (minimum dla comfort)
      // 3. Aspect ratio nie jest zbyt pionowy (telefony)
      const aspectRatio = width / height;
      const hasSpaceForDesktopNav = width >= 768 && height >= 500;
      const isNotTooVertical = aspectRatio > 0.6; // Exclude very tall phones

      // Desktop layout conditions
      const shouldUseDesktop = hasSpaceForDesktopNav && isNotTooVertical;

      // Special cases for known problematic resolutions
      const isKnownTablet = (
        (width === 768 && height === 1024) ||  // iPad Portrait
        (width === 1024 && height === 768) ||  // iPad Landscape
        (width === 1024 && height === 1024) || // iPad Air Square
        (width >= 768 && width <= 1200)        // General tablet range
      );

      // Final decision
      if (isKnownTablet || shouldUseDesktop) {
        setLayoutMode('desktop');
      } else {
        setLayoutMode('mobile');
      }

      // HERO COLLISION DETECTION SYSTEM
      // Apple/Netflix-style content protection
      detectHeroCollision(width, height);
    };

    // Initial detection
    detectLayout();

    // Listen for resize events
    const debouncedDetect = debounce(detectLayout, 150);
    window.addEventListener('resize', debouncedDetect);
    window.addEventListener('orientationchange', debouncedDetect);

    return () => {
      window.removeEventListener('resize', debouncedDetect);
      window.removeEventListener('orientationchange', debouncedDetect);
    };
  }, []);

  // HERO COLLISION DETECTION FUNCTION
  const detectHeroCollision = (width, height) => {
    // Premium collision detection like Apple/Netflix

    // 1. TRUE DESKTOP LAYOUT - No overlap, clean separation
    const hasTrueDesktopSpace = width >= 1200; // Premium desktop threshold (lowered for 1440px)

    // 2. WIDE DESKTOP - Minimal overlap
    const hasWideDesktopSpace = width >= 1000 && width < 1200;

    // 3. TABLET RANGE - Partial overlap
    const isTabletRange = width >= 768 && width < 1000;

    // 4. MOBILE - Full overlap
    const isMobileRange = width < 768;

    let newHeroLayout;

    if (hasTrueDesktopSpace) {
      // Pure desktop - text and image have separate zones
      newHeroLayout = {
        hasSpaceForSeparateLayout: true,
        textOverlapsImage: false,
        needsProtection: false,
        protectionLevel: 'none'
      };
    } else if (hasWideDesktopSpace) {
      // Wide desktop - partial protection needed for readability
      newHeroLayout = {
        hasSpaceForSeparateLayout: true,
        textOverlapsImage: true,
        needsProtection: true,
        protectionLevel: 'partial'
      };
    } else if (isTabletRange) {
      // Tablet - uses desktop layout with strong protection
      newHeroLayout = {
        hasSpaceForSeparateLayout: true,  // Changed: Now uses desktop layout
        textOverlapsImage: true,
        needsProtection: true,
        protectionLevel: 'full'
      };
    } else {
      // Mobile - full protection needed
      newHeroLayout = {
        hasSpaceForSeparateLayout: false,
        textOverlapsImage: true,
        needsProtection: true,
        protectionLevel: 'full'
      };
    }

    setHeroLayout(newHeroLayout);
  };

  return {
    layoutMode,
    isDesktop: layoutMode === 'desktop',
    isMobile: layoutMode === 'mobile',
    dimensions,
    // Navigation helpers
    showFullNavigation: layoutMode === 'desktop',
    showHamburgerMenu: layoutMode === 'mobile',
    // Hero collision detection
    heroLayout,
    hasSpaceForSeparateLayout: heroLayout.hasSpaceForSeparateLayout,
    textOverlapsImage: heroLayout.textOverlapsImage,
    needsProtection: heroLayout.needsProtection,
    protectionLevel: heroLayout.protectionLevel
  };
};

// Simple debounce utility
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}