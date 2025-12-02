import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Khalid Hossain - Frontend Engineer Portfolio",
    short_name: "Khalid Hossain",
    description:
      "Frontend-focused full-stack developer specializing in Next.js, React, and TypeScript. Building modern web applications with exceptional user experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
