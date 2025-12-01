"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface Props {
  children: ReactNode;
}

export default function LenisProvider({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.75, // Snappier, more responsive (was 1.1)
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smoother easing
      lerp: 0.08, // Interpolation control for smoothness
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId: number | null = null;
    let isVisible = !document.hidden;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (!isVisible && rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      } else if (isVisible && rafId === null) {
        rafId = requestAnimationFrame(raf);
      }
    };

    if (isVisible) {
      rafId = requestAnimationFrame(raf);
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
