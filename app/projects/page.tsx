import ProjectContainer from "@/components/project/ProjectContainer";
import React from "react";

export const metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web development projects including e-commerce platforms, SaaS applications, and service websites built with Next.js, React, and TypeScript.",
};

export default function page() {
  return <ProjectContainer />;
}
