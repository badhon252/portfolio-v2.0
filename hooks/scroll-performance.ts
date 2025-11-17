import { useEffect, useRef } from 'react';

/**
 * Hook to optimize scroll performance by detecting fast scrolling
 */
export function useScrollPerformance() {
  const lastScrollYRef = useRef(0);
  const isScrollingFastRef = useRef(false);
  const lastScrollTimeRef = useRef(0);
  const scrollDeltaRef = useRef(0);

  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;
    let lastScrollTime = Date.now();

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);
      const timeSinceLastScroll = currentTime - lastScrollTime;

      // Detect fast scrolling (delta > 50px in less than 50ms)
      isScrollingFastRef.current = scrollDelta > 50 && timeSinceLastScroll < 50;
      scrollDeltaRef.current = scrollDelta;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          lastScrollYRef.current = currentScrollY;
          lastScrollY = currentScrollY;
          lastScrollTime = currentTime;
          lastScrollTimeRef.current = currentTime;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return {
    lastScrollY: lastScrollYRef.current,
    isScrollingFast: isScrollingFastRef.current,
    scrollDelta: scrollDeltaRef.current,
  };
}

/**
 * Hook to pause animations during fast scrolling for better FPS
 */
export function usePauseAnimationOnScroll() {
  const { isScrollingFast } = useScrollPerformance();
  
  return {
    shouldReduceMotion: isScrollingFast,
    transitionDuration: isScrollingFast ? 0 : 0.3,
  };
}
