"use client";

import type * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageSlideshowProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[];
  alts?: string[];
  interval?: number;
  aspectRatio?: string;
  className?: string;
  imageClassName?: string;
}

export function ImageSlideshow({
  images,
  alts,
  interval = 5000,
  aspectRatio = "16:12",
  className,
  imageClassName,
  ...props
}: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [aspectRatioStyle, setAspectRatioStyle] = useState<React.CSSProperties>(
    {}
  );

  useEffect(() => {
    if (aspectRatio) {
      const [width, height] = aspectRatio.split(":").map(Number);
      setAspectRatioStyle({
        aspectRatio: `${width}/${height}`,
      });
    }
  }, [aspectRatio]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 500); // Transition duration
    }, interval);

    return () => clearTimeout(timer);
  }, [currentIndex, images.length, interval]);

  if (!images.length) return null;

  return (
    <div
      className={cn("relative overflow-hidden rounded-lg", className)}
      style={aspectRatioStyle}
      {...props}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out",
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0",
            isTransitioning && index === currentIndex ? "opacity-0" : "",
            isTransitioning && index === (currentIndex + 1) % images.length
              ? "opacity-100 z-20"
              : "",
            imageClassName
          )}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={alts?.[index] || `Slide ${index + 1}`}
            
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
