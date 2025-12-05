"use client";

import React from "react";
import { ProjectScreenshotCarousel } from "@/components/project/ProjectScreenshotCarousel";
import { motion } from "framer-motion";

export function ProjectScreenshotsSection() {
  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-50" />

      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            <span className="text-primary">Project</span> Showcase
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A visual journey through some of my recent work and creative
            explorations.
          </p>
        </motion.div>
      </div>

      <div className="relative w-full">
        {/* Gradient Overlays for smooth fade effect on edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent md:w-32" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent md:w-32" />

        <ProjectScreenshotCarousel />
      </div>
    </section>
  );
}
