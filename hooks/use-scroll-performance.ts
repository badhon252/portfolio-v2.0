import { useEffect, useRef, useCallback } from 'react';

/**
 * Hook to optimize scroll performance by throttling scroll events
 * and detecting fast scrolling to reduce animation updates
 */
export function useScrollPerformance(threshold = 16) {
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollYRef = useRef(0);
  const isScrollingFastRef = useRef(false);

  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;
    let scrollStartTime = Date.now();

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);
      const timeSinceLastScroll = Date.now() - scrollStartTime;

      // Detect fast scrolling (delta > 50px in less than 50ms)
      isScrollingFastRef.isScrollingFastRef = scrollDelta > 50 && timeSinceLastScroll < 50;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          lastScrollYRef.current = currentScrollY;
          lastScrollY = currentScrollY;
          scrollStartTime = Date.now();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return {
    lastScrollY: lastScrollYRef.current,
    isScrollingFast: isScrollingFastRef.current,
  };
}

/**
 * Hook to pause animations during fast scrolling
 */
export function usePauseAnimationOnScroll() {
  const { isScrollingFast } = useScrollPerformance();
  
  return {
    shouldReduceMotion: isScrollingFast,
    transitionDuration: isScrollingFast ? 0 : 0.3,
  };
}
