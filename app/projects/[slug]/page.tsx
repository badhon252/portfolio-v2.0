'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Github } from "lucide-react";
import { projectsData } from "@/data/projects";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  const slug = pathname.split("/").filter(Boolean).pop();

  const project = projectsData.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    return (
      <section className="max-w-3xl mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold text-red-500">Project not found</h1>
        <p className="text-muted-foreground mt-2">
          The project you are looking for does not exist.
        </p>
      </section>
    );
  }

  const {
    title,
    shortDescription,
    description,
    image,
    technologies,
    features,
    demoUrl,
    githubUrl,
  } = project;

  return (
    <>
      <Head>
        <title>{title} | My Portfolio</title>
        <meta name="description" content={shortDescription} />
      </Head>

      <section className="max-w-3xl mx-auto py-12 px-4 space-y-8 animate-fadeIn">
        {/* Header */}
        <header className="mb-4">
          <h1 className="text-primary text-3xl font-bold">{title}</h1>
          <p className="text-muted-foreground text-sm">{shortDescription}</p>
        </header>

        {/* Image */}
        <div className="relative aspect-video rounded-md overflow-hidden mb-4">
          <Image
            width={600}
            height={300}
            src={image || "/placeholder.svg?height=300&width=600"}
            alt={`${title} screenshot`}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Description */}
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-2">Description</h4>
            <p className="text-muted-foreground">{description}</p>
          </div>

          {/* Technologies */}
          {technologies?.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-secondary/10 hover:bg-secondary/20 transition"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {features?.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2">Features</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                {features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild>
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live demo of ${title}`}
              >
                <Globe className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>

            {githubUrl ? (
              <Button variant="outline" size="sm" className="gap-1" asChild>
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View code for ${title} on GitHub`}
                >
                  <Github className="h-4 w-4" />
                  Code
                </Link>
              </Button>
            ) : (
              <Badge
                variant="outline"
                className="cursor-default p-2 flex items-center gap-1"
                aria-disabled
              >
                <Github className="h-4 w-4" />
                Private
              </Badge>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
