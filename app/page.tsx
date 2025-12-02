// import { BenefitsSection } from "@/components/layout/sections/benefits";
import { HeroSection } from "@/components/layout/sections/hero";
// import { CommunitySection } from "@/components/layout/sections/community";
import { FAQSection } from "@/components/layout/sections/faq";
// import { FeaturesSection } from "@/components/layout/sections/features";
// import { PricingSection } from "@/components/layout/sections/pricing";
// import { ServicesSection } from "@/components/layout/sections/services";
// import { ClientsSection } from "@/components/layout/sections/clients";
// import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { ContactSection } from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";
import ProjectContainer from "@/components/project/ProjectContainer";
import TechStacks from "@/components/layout/sections/tect-stack";
// import AboutPage from "@/components/layout/sections/about/about-page";
// import CurvedLoopClient from "@/components/layout/sections/curved-loop-client";
import { Suspense } from "react";
import AboutSection from "@/components/layout/sections/about/about-section";

export const metadata = {
  title: "Home",
  description:
    "Khalid Hossain Badhon is a frontend-focused full-stack developer, designer, and entrepreneur specializing in building exceptional web experiences with Next.js, React, and TypeScript.",
  openGraph: {
    type: "website",
    url: "https://khalidhossain.me/",
    title: "Khalid Hossain Badhon - Frontend Engineer, Designer & Explorer",
    description:
      "Frontend-focused full-stack developer specializing in Next.js, React, and TypeScript. Building modern web applications with exceptional user experiences.",
    images: [
      {
        url: "https://res.cloudinary.com/dw5wizivl/image/upload/v1763698865/1000099526_mxy5wy.jpg",
        width: 1200,
        height: 630,
        alt: "Khalid Hossain Badhon - Frontend Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@badhon252",
    title: "Khalid Hossain Badhon - Frontend Engineer, Designer & Explorer",
    description:
      "Frontend-focused full-stack developer specializing in Next.js, React, and TypeScript. Building modern web applications with exceptional user experiences.",
    images: [
      "https://res.cloudinary.com/dw5wizivl/image/upload/v1763698865/1000099526_mxy5wy.jpg",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Khalid Hossain Badhon",
  url: "https://khalidhossain.me",
  image:
    "https://res.cloudinary.com/dw5wizivl/image/upload/v1763698865/1000099526_mxy5wy.jpg",
  sameAs: [
    "https://github.com/badhon252",
    "https://twitter.com/badhon252",
    "https://www.linkedin.com/in/badhon252",
  ],
  jobTitle: "Frontend Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  description:
    "Frontend-focused full-stack developer specializing in Next.js, React, and TypeScript. Building modern web applications with exceptional user experiences.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barishal",
    addressCountry: "BD",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Web Development",
    "UI/UX Design",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      {/* <ClientsSection /> */}
      {/* <ServicesSection />  */}
      {/* <FeaturesSection /> */}
      {/* <CurvedLoopClient /> */}
      <AboutSection />
      <TechStacks />
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectContainer />
      </Suspense>
      <TestimonialSection />
      {/* <AboutPage /> */}
      <FAQSection />
      <ContactSection />
      {/* <Suspense fallback={<div>Loading...</div>}>
      </Suspense> */}
      <FooterSection />
    </>
  );
}
