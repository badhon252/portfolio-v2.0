import type { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Modern SaaS Platform",
    shortDescription:
      "A full-featured SaaS application with authentication and payments",
    description:
      "A complete SaaS platform built with Next.js, featuring user authentication, subscription payments with Stripe, and a beautiful dashboard interface. The application includes role-based access control, real-time updates, and a responsive design.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"],
    features: [
      "User authentication and authorization",
      "Subscription management with Stripe",
      "Real-time dashboard with analytics",
      "Role-based access control",
      "Responsive design for all devices",
    ],
    categories: ["nextjs", "react", "saas"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
  },
  {
    id: "2",
    title: "AI Content Generator",
    shortDescription:
      "An AI-powered application for generating marketing content",
    description:
      "This application uses OpenAI's GPT models to help marketers generate high-quality content for various platforms. Users can specify the tone, length, and purpose of the content, and the AI will generate tailored text that matches their requirements.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: ["React", "Node.js", "OpenAI API", "Express", "MongoDB"],
    features: [
      "AI-powered content generation",
      "Customizable content parameters",
      "Content history and favorites",
      "Export to various formats",
      "Team collaboration features",
    ],
    categories: ["react", "ai"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
  },
  {
    id: "3",
    title: "E-commerce Dashboard",
    shortDescription:
      "A comprehensive dashboard for e-commerce store management",
    description:
      "A powerful dashboard for e-commerce store owners to manage their products, orders, customers, and analytics. Built with Next.js and integrated with various payment providers and shipping services.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Chart.js",
    ],
    features: [
      "Product management",
      "Order processing and tracking",
      "Customer management",
      "Sales analytics and reporting",
      "Inventory management",
    ],
    categories: ["nextjs", "react", "ui"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
  },
  {
    id: "4",
    title: "Portfolio Website Template",
    shortDescription: "A customizable portfolio template for developers",
    description:
      "A modern, responsive portfolio template designed for developers to showcase their work. Built with Next.js and Tailwind CSS, it features smooth animations, dark mode support, and easy customization options.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    features: [
      "Responsive design",
      "Dark mode support",
      "Project showcase with filtering",
      "Blog integration",
      "Contact form with validation",
    ],
    categories: ["nextjs", "react", "ui"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
  },
  {
    id: "5",
    title: "Real-time Chat Application",
    shortDescription: "A modern chat application with real-time messaging",
    description:
      "A real-time chat application built with Next.js and Socket.io. Features include user authentication, private messaging, group chats, read receipts, and file sharing capabilities.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: [
      "Next.js",
      "Socket.io",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
    ],
    features: [
      "Real-time messaging",
      "User authentication",
      "Private and group chats",
      "Read receipts",
      "File sharing",
      "Online status indicators",
    ],
    categories: ["nextjs", "react", "saas"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
  },
  {
    id: "6",
    title: "AI Image Generator",
    shortDescription: "An application for generating images using AI",
    description:
      "This application uses AI models to generate images based on text prompts. Users can customize various parameters to control the style, content, and quality of the generated images.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: [
      "React",
      "Node.js",
      "Stable Diffusion",
      "Express",
      "MongoDB",
    ],
    features: [
      "Text-to-image generation",
      "Style customization",
      "Image history and favorites",
      "High-resolution exports",
      "Batch processing",
    ],
    categories: ["react", "ai"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
  },
];
