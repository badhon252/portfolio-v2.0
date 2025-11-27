"use client";

import React, { useEffect, useRef } from "react";
import styles from "./custom-cursor.module.css";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    const cursor = cursorRef.current;

    const moveCursor = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        if (cursor) {
          cursor.style.top = `${e.clientY}px`;
          cursor.style.left = `${e.clientX}px`;
        }
      });
    };

    const handleClick = () => {
      if (cursor) {
        cursor.classList.add(styles.expand);
        setTimeout(() => {
          cursor.classList.remove(styles.expand);
        }, 500);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  // Don't render on touch devices to avoid issues
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return <div ref={cursorRef} className={styles.cursor}></div>;
};
