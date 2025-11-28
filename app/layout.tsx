import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { SideDock } from "@/components/layout/sections/SideDock";
import LenisProvider from "@/lib/provider/LenisProvider";
import { Toaster } from "sonner";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Khalid Hossain Badhon",
  description: "Portfolio - Khalid Hossain Badhon",
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
          <CustomCursor />
          <SpeedInsights />
          <ScrollProgress className="top-[100000000000000000]" />
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
