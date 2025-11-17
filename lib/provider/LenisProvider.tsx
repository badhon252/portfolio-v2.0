"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface Props {
  children: ReactNode;
}

export default function LenisProvider({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      touchMultiplier: 1.5,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
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
