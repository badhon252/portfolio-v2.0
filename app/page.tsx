// import { BenefitsSection } from "@/components/layout/sections/benefits";
import { HeroSection } from "@/components/layout/sections/hero";
// import { CommunitySection } from "@/components/layout/sections/community";
import { FAQSection } from "@/components/layout/sections/faq";
// import { FeaturesSection } from "@/components/layout/sections/features";
// import { PricingSection } from "@/components/layout/sections/pricing";
// import { ServicesSection } from "@/components/layout/sections/services";
import { ClientsSection } from "@/components/layout/sections/clients";
// import { TeamSection } from "@/components/layout/sections/team";
// import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { ContactSection } from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";
import ProjectContainer from "@/components/project/ProjectContainer";
import TechStacks from "@/components/layout/sections/tect-stack";
import AboutPage from "@/components/layout/sections/about/About";

export const metadata = {
  title: "Khalid Hossain - Frontend Engineer, designer, and Explorer",
  description:
    "Khalid Hossain is a full-stack developer, designer, and entrepreneur.",
  // openGraph: {
  //   type: "website",
  //   url: "https://github.com/nobruf/shadcn-landing-page.git",
  //   title: "Shadcn - Landing template",
  //   description: "Free Shadcn landing page for developers",
  //   images: [
  //     {
  //       url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Shadcn - Landing template",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "https://github.com/nobruf/shadcn-landing-page.git",
  //   title: "Shadcn - Landing template",
  //   description: "Free Shadcn landing page for developers",
  //   images: [
  //     "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
  //   ],
  // },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      {/* <TestimonialSection /> */}
      {/* <ServicesSection />  */}
      <TechStacks />
      <ProjectContainer />
      <AboutPage />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
