"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useMousePosition } from "@/components/layout/mouse-position-provider";
import { useMobile } from "@/hooks/use-mobile";
import type { Project } from "@/types/project";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();
  const isMobile = useMobile();

  // Calculate card tilt based on mouse position
  const calculateTilt = () => {
    if (isMobile || !cardRef.current) return { x: 0, y: 0 };

    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const x = (mousePosition.x - centerX) / (width / 2);
    const y = (mousePosition.y - centerY) / (height / 2);

    return { x: y * -5, y: x * 5 }; // Invert for natural tilt
  };

  const tilt = calculateTilt();

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{
          transform: isMobile
            ? "none"
            : `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        className="blueprint-reveal transition-all duration-300"
      >
        <Card className="h-full overflow-hidden border-border hover:border-primary/50 transition-colors duration-300">
          <div className="relative aspect-video overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-10"></div>
            <Image
              width={800}
              height={500}
              src={project.image || `/placeholder.svg?height=300&width=600`}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setIsOpen(true)}
              >
                <ArrowUpRight className="h-4 w-4" />
                <span className="sr-only">View project details</span>
              </Button>
            </div>
            <CardDescription>{project.shortDescription}</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-secondary/10"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" className="gap-1" asChild>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="h-4 w-4" />
                Demo
              </a>
            </Button>
            <Button variant="outline" size="sm" className="gap-1" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-primary">{project.title}</DialogTitle>
            <DialogDescription>{project.shortDescription}</DialogDescription>
          </DialogHeader>

          <div className="relative aspect-video rounded-md overflow-hidden mb-4">
            <Image
              width={600}
              height={300}
              src={project.image || `/placeholder.svg?height=300&width=600`}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2 text-nowrap whitespace-nowrap">
                Description
              </h4>
              <p className="text-muted-foreground">{project.description}</p>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-secondary/10"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Features</h4>
              <ul className="list-disc list-inside text-muted-foreground">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 pt-4">
              <Button asChild>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
