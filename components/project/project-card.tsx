"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
import { useMobile } from "@/hooks/use-mobile";
import type { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;

    // Optimization: Cache rect if possible or use a more performant way,
    // but for now, just ensuring we don't do this calculation if not needed.
    // The main lag source is likely the blur in AboutSection.
    const rect = cardRef.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className="blueprint-reveal h-full will-change-transform"
      >
        <Card className="h-full overflow-hidden border-border hover:border-primary/50 transition-colors duration-300 flex flex-col group">
          <div
            className="relative aspect-video overflow-hidden"
            style={{ transform: "translateZ(50px)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-10"></div>
            <Image
              width={800}
              height={500}
              src={project.image || `/placeholder.svg?height=300&width=600`}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                asChild
              >
                <Link
                  href={`/projects/${project.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="sr-only">Go to project details</span>
                </Link>
              </Button>
            </div>
            <CardDescription className="line-clamp-2">
              {project.shortDescription}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-grow">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-secondary/10 hover:bg-secondary/20 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="secondary" className="bg-secondary/10">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>
          </CardContent>

          <CardFooter className="flex justify-between mt-auto">
            <Button
              variant="outline"
              size="sm"
              className="gap-1 hover:bg-primary hover:text-primary-foreground transition-colors"
              asChild
            >
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="h-4 w-4" />
                Demo
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-1 hover:bg-primary hover:text-primary-foreground transition-colors"
              asChild
            >
              {project.githubUrl ? (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  Code
                </Link>
              ) : (
                <span className="cursor-not-allowed opacity-50">
                  <Github className="h-4 w-4 mr-1" />
                  Private
                </span>
              )}
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl"></DialogContent>
      </Dialog>
    </>
  );
}
