"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Rocket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function AboutSection() {
  const stats = [
    { icon: Code2, label: "Projects", value: "50+" },
    { icon: Users, label: "Clients", value: "30+" },
    { icon: Rocket, label: "Experience", value: "3+ Years" },
  ];

  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Gradient Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl" />

            {/* Image Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
              <Image
                src="/khalid Hossain Badhon.png"
                alt="Khalid Hossain - Frontend Engineer"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
                priority
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-background/95 backdrop-blur-sm border-2 border-primary/30 rounded-xl p-4 shadow-xl"
            >
              <Badge variant="outline" className="text-sm">
                <span className="mr-2">🚀</span>
                Available for Work
              </Badge>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <Badge variant="outline" className="text-sm">
              About Me
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-500 to-primary bg-clip-text">
                Khalid Hossain
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              A passionate <strong>Frontend Engineer</strong> from Barishal,
              Bangladesh, specializing in building high-performance, scalable
              web applications with React, Next.js, and TypeScript. I transform
              ideas into elegant digital experiences that make a real impact.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              As a future solopreneur, I&apos;m driven by innovation and a
              commitment to creating products that solve real-world problems.
              Whether it&apos;s crafting pixel-perfect interfaces or
              architecting robust solutions, I bring creativity and technical
              excellence to every project.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 py-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="text-center space-y-2 p-4 rounded-lg border border-border/50 bg-card/50 hover:border-primary/50 transition-colors"
              >
                <stat.icon className="w-6 h-6 mx-auto text-primary" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/about">
              <Button size="lg" className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Learn More About Me
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
