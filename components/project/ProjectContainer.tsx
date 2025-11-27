"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/project/project-card";
import ProjectFilter from "@/components/project/project-filter";
import PageTransition from "@/components/layout/page-transition";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { SectionHeader } from "../layout/section-header";

export type ProjectCategory =
  | "all"
  | "saas"
  | "ai"
  | "booking"
  | "service"
  | "ecommerce"
  | "lead";

export default function ProjectContainer() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const pathname = usePathname();

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) =>
          project.categories.includes(activeFilter)
        );

  return (
    <PageTransition>
      <div id="works" className="container mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            title="My Projects"
            description="A showcase of my work, from web applications to design systems and experiments."
            alignment="center"
          />
        </motion.div>

        <ProjectFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
        {pathname !== "/projects" && (
          <div className="py-4">
            <Link
              href="/projects"
              className="text-gray-400 hover:text-primary underline"
            >
              View All Projects{" "}
              <ArrowRightIcon className="inline-block ml-1 h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
