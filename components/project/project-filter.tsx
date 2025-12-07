"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { ProjectCategory } from "./ProjectContainer";

interface ProjectFilterProps {
  activeFilter: ProjectCategory;
  setActiveFilter: (filter: ProjectCategory) => void;
}

const filters: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "ai", label: "AI" },
  { value: "service", label: "Service" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "saas", label: "SaaS" },
  { value: "booking", label: "Booking System" },
  { value: "lead", label: "Lead Generation" },
];

export default function ProjectFilter({
  activeFilter,
  setActiveFilter,
}: ProjectFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap gap-2 justify-center"
    >
      {filters.map((filter, index) => (
        <Button
          key={filter.value}
          variant={activeFilter === filter.value ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveFilter(filter.value)}
          className="transition-all duration-300"
        >
          {filter.label}
        </Button>
      ))}
    </motion.div>
  );
}
