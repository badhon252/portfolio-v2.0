"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

type MousePosition = {
  x: number;
  y: number;
};

const MousePositionContext = createContext<MousePosition>({ x: 0, y: 0 });

export function MousePositionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // Define the handler inside useEffect to avoid dependency issues
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Add the event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures this only runs once on mount

  return (
    <MousePositionContext.Provider value={mousePosition}>
      {children}
    </MousePositionContext.Provider>
  );
}

export function useMousePosition() {
  return useContext(MousePositionContext);
}
