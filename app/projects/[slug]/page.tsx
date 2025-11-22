'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Github } from "lucide-react";
import { projectsData } from "@/data/projects";
import { usePathname } from "next/navigation";

export default function Page() {
    const pathname = usePathname();
    console.log(pathname)
    const slug = pathname.split("/").filter(Boolean).pop()
    
    const project = projectsData.filter(p => p.title.toLowerCase().replace(/\s+/g, "-") === slug)[0]; 

    return (
    <section className="max-w-3xl mx-auto py-12 px-4">

      {/* Replaced DialogHeader */}
      <header className="mb-4">
        <h1 className="text-primary text-3xl font-bold">
          {project.title}
        </h1>
        <p className="text-muted-foreground text-sm">
          {project.shortDescription}
        </p>
      </header>

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
          <h4 className="text-sm font-medium mb-2 text-nowrap">
            Description
          </h4>
          <p className="text-muted-foreground">{project.description}</p>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-secondary/10">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Features</h4>
          <ul className="list-disc list-inside text-muted-foreground">
            {project.features?.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 pt-4">
          <Button asChild>
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>

          <Button variant="outline" size="sm" className="gap-1" asChild>
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
              <Badge
                variant="outline"
                className="cursor-default p-2"
                aria-disabled
              >
                <Github className="h-4 w-4 mr-1" />
                private
              </Badge>
            )}
          </Button>
        </div>
      </div>

    </section>
  );
}
