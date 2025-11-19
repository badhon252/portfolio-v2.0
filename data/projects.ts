import type { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "The Social Chamber",
    shortDescription:
      "Private Rooms for Unforgettable Experiences Enjoy a cozy, immersive movie experience with friends, family, or your special someone in our themed rooms.",
    description: `Enjoy a cozy, immersive movie experience with friends, family, or your special someone in our themed rooms.
      Your Most Intimate Date Yet,
      Escape the ordinary and reconnect in a private room designed for unforgettable
      moments together.
      You Can Trust is a reliable room booking service offering comfortable, affordable stays with a seamless reservation experience. Book with confidence your comfort is our priority. 

      Enjoy fast and reliable room booking with You Can Trust and secure your perfect stay in just a few clicks!. 

     At You Can Trust, we prioritize safety and quality and offering clean, secure, and well-maintained rooms for a worry-free stay.`,

    image: "/project/boss65/thesoicalchamber.png",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn-ui",
      "Express",
      "MongoDB",
      "Zustand",
      "Restful API",
    ],
    features: [
      "User authentication and authorization",
      "Payment management with Stripe",
      "Multi-step Booking system with calendar integration ",
      "Admin dashboard for managing rooms, bookings, users, payments and Contents",
      "Responsive design for all devices",
      "SEO optimization",
      "Performance optimization",
      "Accessibility compliance",
    ],

    categories: ["nextjs", "react", "saas", "booking"],
    githubUrl: "https://github.com/badhon252/The-Social-Chamber",
    demoUrl: "https://thesocialchamber.com/contact",
  },
  {
    id: "2",
    title: "CQD Cleaning Services ",
    shortDescription:
      "At CQD Cleaning Service, our expert team and advanced tools ensure top-tier cleanliness, health, and safety—delivering spotless results you can trust every time.",
    description: `Since 2012, CQD Cleaning Service has offered trusted, top-quality cleaning . We’re committed to excellence and exceeding every client’s expectations—every time.
At CQD Cleaning Service, we offer affordable, top-tier cleaning solutions without compromising quality. Choose flexible packages tailored to your needs and enjoy efficient service with our 10-mile radius system that reduces cost and saves time. Our fully trained professionals are committed to delivering spotless results with care, precision, and unmatched dedication.`,
    image: "/project/cqd/cqd.png",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn-ui",
      "PHP",
      "Laravel",
      "MySQL",
      "Zustand",
      "Restful API",
    ],
    features: [
      "Lead generation forms",
      "Quote request system",
      "Subscription management",
      "Blog",
      "Service listings",
      "Google Review integration",
      "Admin dashboard for managing content and inquiries, Booking management",
      "Responsive design",
      "SEO optimization",
      "Performance optimization",
      "Accessibility compliance",
    ],
    categories: ["react", "next", "service"],
    githubUrl: "https://github.com/badhon252/cqd-cleaningservice",
    demoUrl: "https://www.cqdcleaningservices.com/",
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
    title: "Going 2 Zero",
    shortDescription:
      "Our mission is to help protect the planet by driving real commitments to net zero",
    description:
      "At Going 2 Zero, our core mission is to certify businesses on their journey to net zero-providing them with a trusted, verifiable mark of their commitment to sustainability. Through our Al-powered platform, we go beyond just measurement by helping companies achieve and maintain certified net zero status. Our three-step approach-emissions tracking, personalized consulting, and carbon offsetting-equips businesses with the tools they need to take real, measurable action against climate change. We make sustainability simple, accessible, and effective. Whether you're a small startup or a large enterprise, our tailored solutions empower you to not only meet compliance standards but also unlock new opportunities for growth and leadership in the green economy!",
    image: "/project/going2zero/going2zero.png",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "Nodemailer",
      "RESTful API",
    ],
    features: [
      "Responsive design",
      "Exclusive Blog on sustainability and other topics",
      "Subscription plans",
      "Comprehansive Form for carbon footprint calculation",
      "Contact form with validation",
      "Admin dashboard for managing content and subscriptions, Blog management, Analytics, User management, Role based access control",
    ],
    categories: ["nextjs", "react", "service"],
    githubUrl: "https://github.com/badhon252/going2zero",
    demoUrl: "https://going2zero.com/",
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
