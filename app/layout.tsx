import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { SideDock } from "@/components/layout/sections/SideDock";
import LenisProvider from "@/lib/provider/LenisProvider";
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
        <LenisProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SideDock />

            <ScrollProgress className="top-[0]" />
            <Navbar />

            {children}
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
