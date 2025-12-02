import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { SideDock } from "@/components/layout/sections/SideDock";
import { MobileNav } from "@/components/layout/mobile-nav";
import LenisProvider from "@/lib/provider/LenisProvider";
import { Toaster } from "sonner";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://khalidhossain.me"),
  title: {
    default: "Khalid Hossain - Frontend Engineer, Designer & Explorer",
    template: "%s | Khalid Hossain",
  },
  description:
    "Frontend-focused full-stack developer specializing in Next.js, React, and TypeScript. Building modern web applications with exceptional user experiences.",
  keywords: [
    "Khalid Hossain",
    "Badhon",
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer",
    "UI/UX Designer",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Khalid Hossain Badhon", url: "https://khalidhossain.me" }],
  creator: "Khalid Hossain Badhon",
  publisher: "Khalid Hossain Badhon",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khalidhossain.me",
    siteName: "Khalid Hossain Portfolio",
    title: "Khalid Hossain - Frontend Engineer, Designer & Explorer",
    description:
      "Frontend-focused full-stack developer specializing in Next.js, React, and TypeScript. Building modern web applications with exceptional user experiences.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Khalid Hossain - Frontend Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalid Hossain - Frontend Engineer, Designer & Explorer",
    description:
      "Frontend-focused full-stack developer specializing in Next.js, React, and TypeScript. Building modern web applications with exceptional user experiences.",
    creator: "@badhon252",
    images: ["/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <LenisProvider>{children}</LenisProvider>
          <SideDock />
          <MobileNav />
          <CustomCursor />
          <WhatsAppFloat />
          <SpeedInsights />
          <ScrollProgress className="top-[100000000000000000]" />
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
