"use client";
import dynamic from "next/dynamic";
import { Archivo_Black } from "next/font/google";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const DarkVeilEffect = dynamic(() => import("./hero/dark-veil-effect"), {
  ssr: false,
});

// import { ImageSlideshow } from "@/components/ui/ImageSlideshow";
const archivoBlack = Archivo_Black({ weight: "400", subsets: ["latin"] });

export const HeroSection = () => {
  const images = [
    "/vegan_collective-hero.png",
    // "/vegan_collective-dashboard.png",
    "/pacific-rim-dashboard.png",
  ];
  return (
    <section
      id=""
      className=" relative min-h-screen flex items-center justify-center overflow-hidden -mt-[58px]"
    >
      <div className="absolute inset-0 md:block hidden">
        <DarkVeilEffect />
      </div>
      <div className="relative grid place-items-center  gap-8 mx-auto py-12 md:py-32  backdrop-blur-sm">
        <div className="text-center space-y-8">
          {/* <BackgroundLines className="flex items-center justify-center w-full flex-col px-4"> */}
          <Badge variant="outline" className="text-sm py-2 backdrop-blur-3xl">
            <span className="mr-2 bg-primary !text-black rounded-xl">
              <Badge>Role</Badge>
            </span>
            <span> Frontend Developer </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-3xl md:text-6xl font-black">
            <h1 className={archivoBlack.className}>
              Crafting Code, <br />
              <span className="text-transparent px-2 bg-gradient-to-r from-[#00df00] to-primary bg-clip-text stroke-cyan-100 stroke-1">
                Creating Impact
              </span>
            </h1>
          </div>
          {/* </BackgroundLines> */}
          {/* <BackgroundLinesDemo /> */}

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`A Front-End Engineer crafting high-performance, scalable web applications with React, Next.js, and TypeScript. I'm passionate about building products that make a difference.`}
          </p>

          <div className="flex flex-row gap-4 items-center justify-center">
            <InteractiveHoverButton className="py-2 text-lg">
              <Link href={"/projects"}>My Works</Link>
            </InteractiveHoverButton>
            <Link
              href="/Khalid Hossain - Frontend CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 text-lg">
                  Resume
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>

        <div className="relative group mt-14 w-full md:block hidden">
          {/* <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/20 rounded-full blur-3xl"></div> */}

          {/* Automatic Image Slideshow */}
          {/* <div className="w-full md:w-[1200px] mx-auto relative rounded-lg border border-t-2 border-secondary border-t-primary/20">
            <ImageSlideshow
              images={images}
              alts={["Light theme showcase", "Dark theme showcase"]}
              interval={5000} // Change image every 5 seconds
              className="w-full h-[500px] md:h-[600px] rounded-lg"
            />
            <ThreeDMarqueeDemo />
          </div> */}

          {/* <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div> */}
        </div>
      </div>
    </section>
  );
};
