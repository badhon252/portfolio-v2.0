"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

interface Props {
  children: ReactNode;
}

export default function LenisProvider({ children }: Props) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Optimized Lenis configuration for 60fps performance
    const lenis = new Lenis({
      duration: 0.6, // Faster, more responsive
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1, // Higher value = smoother interpolation
      smoothWheel: true,
      wheelMultiplier: 1.0, // Better mouse wheel control
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
      // Default to window scrolling - no wrapper needed
    });

    lenisRef.current = lenis;

    let rafId: number | null = null;
    let isVisible = !document.hidden;
    let lastTime = 0;
    const targetFPS = 60;
    const frameTime = 1000 / targetFPS;

    // Optimized RAF loop with frame throttling
    function raf(time: number) {
      if (!lenisRef.current) return;

      const deltaTime = time - lastTime;

      // Only update if enough time has passed (throttle to 60fps)
      if (deltaTime >= frameTime - 1) {
        lenisRef.current.raf(time);
        lastTime = time - (deltaTime % frameTime);
      }

      rafId = requestAnimationFrame(raf);
    }

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (!isVisible && rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      } else if (isVisible && rafId === null) {
        lastTime = performance.now();
        rafId = requestAnimationFrame(raf);
      }
    };

    // Start RAF loop
    if (isVisible) {
      lastTime = performance.now();
      rafId = requestAnimationFrame(raf);
    }

    // Use passive event listener for better scroll performance
    document.addEventListener("visibilitychange", handleVisibilityChange, {
      passive: true,
    } as AddEventListenerOptions);

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
