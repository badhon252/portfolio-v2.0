"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import ThreeDMarqueeDemo from "./hero-marquee-demo";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
      >
        <ThreeDMarqueeDemo />
      </ContainerScroll>
    </div>
  );
}
