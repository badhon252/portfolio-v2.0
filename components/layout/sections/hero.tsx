"use client";
import { Archivo_Black } from "next/font/google";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Badge } from "@/components/ui/badge";
import { ImageSlideshow } from "@/components/ui/ImageSlideshow";
import { TextRevealContainer } from "./text-reveal";
import { TextReveal } from "@/components/magicui/text-reveal";
const archivoBlack = Archivo_Black({ weight: "400", subsets: ["latin"] });

export const HeroSection = () => {
  const images = [
    "/vegan_collective-hero.png",
    // "/vegan_collective-dashboard.png",
    "/pacific-rim-dashboard.png",
  ];
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 bg-primary !text-black rounded-xl">
              <Badge>Role</Badge>
            </span>
            <span> Frontend Developer </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-black">
            <h1 className={archivoBlack.className}>
              Crafting Code, <br />
              <span className="text-transparent px-2 bg-gradient-to-r from-[blue] to-primary bg-clip-text">
                Creating Impact
              </span>
            </h1>
          </div>

          {/* <TextReveal className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            A Front-End Engineer crafting high-performance, scalable web
            applications with React, Next.js, and TypeScript. I&apos;m
            passionate about building products that make a difference.
          </TextReveal> */}

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`A Front-End Engineer crafting high-performance, scalable web applications with React, Next.js, and TypeScript. I'm passionate about building products that make a difference.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4 flex items-center justify-center">
            <InteractiveHoverButton className="py-2 text-lg">
              My Works
            </InteractiveHoverButton>
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Resume
              </span>
            </ShimmerButton>
            {/* <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                Resume
              </Link>
            </Button> */}
          </div>
        </div>

        <div className="relative group mt-14 w-full">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>

          {/* Automatic Image Slideshow */}
          <div className="w-full md:w-[1200px] mx-auto relative rounded-lg border border-t-2 border-secondary border-t-primary/30">
            <ImageSlideshow
              images={images}
              alts={["Light theme showcase", "Dark theme showcase"]}
              interval={5000} // Change image every 5 seconds
              className="w-full h-[500px] md:h-[600px] rounded-lg"
            />
          </div>

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
