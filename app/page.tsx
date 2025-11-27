// import { BenefitsSection } from "@/components/layout/sections/benefits";
import { HeroSection } from "@/components/layout/sections/hero";
// import { CommunitySection } from "@/components/layout/sections/community";
import { FAQSection } from "@/components/layout/sections/faq";
// import { FeaturesSection } from "@/components/layout/sections/features";
// import { PricingSection } from "@/components/layout/sections/pricing";
// import { ServicesSection } from "@/components/layout/sections/services";
// import { ClientsSection } from "@/components/layout/sections/clients";
// import { TeamSection } from "@/components/layout/sections/team";
// import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { ContactSection } from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";
import ProjectContainer from "@/components/project/ProjectContainer";
import TechStacks from "@/components/layout/sections/tect-stack";
// import AboutPage from "@/components/layout/sections/about/about-page";
// import CurvedLoopClient from "@/components/layout/sections/curved-loop-client";
import { Suspense } from "react";
import AboutSection from "@/components/layout/sections/about/about-section";

export const metadata = {
  title: "Khalid Hossain - Frontend Engineer, designer, and Explorer",
  description:
    "Khalid Hossain is a full-stack developer, designer, and entrepreneur.",
  openGraph: {
    type: "website",
    url: "https://khalid-v2.vercel.app/",
    title: "Portfolio - Khalid Hossain",
    description:
      "Khalid Hossain is a Frontend focused full-stack developer, designer, and entrepreneur.",
    images: [
      {
        url: "https://res.cloudinary.com/dw5wizivl/image/upload/v1763698865/1000099526_mxy5wy.jpg",
        width: 1200,
        height: 630,
        alt: "Shadcn - Landing template",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "https://khalid-v2.vercel.app/",
    title: "Portfolio - Khalid Hossain",
    description:
      "Khalid Hossain is a Frontend focused full-stack developer, designer, and entrepreneur.",
    images: [
      "https://res.cloudinary.com/dw5wizivl/image/upload/v1763698865/1000099526_mxy5wy.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <ClientsSection /> */}
      {/* <TestimonialSection /> */}
      {/* <ServicesSection />  */}
      {/* <FeaturesSection /> */}
      {/* <CurvedLoopClient /> */}
      <TechStacks />
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectContainer />
      </Suspense>
      {/* <AboutPage /> */}
      <AboutSection />
      <FAQSection />
      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>
      <FooterSection />
    </>
  );
}
