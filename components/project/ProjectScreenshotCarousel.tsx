"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { projectsData } from "@/data/projects";

// Import Swiper styles
import "swiper/css";

export function ProjectScreenshotCarousel() {
  return (
    <div className="w-full py-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={false}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full [&_.swiper-wrapper]:!ease-linear"
      >
        {projectsData.map((project) => (
          <SwiperSlide key={project.id} className="!h-auto">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-white/20">
              <Image
                src={project.image || "/placeholder.png"}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-bold">{project.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
