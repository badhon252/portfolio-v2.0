"use client";
import { Github, LinkedinIcon, Mail } from "lucide-react";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

import { Icons } from "./sections/constants";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import ContactMedium from "./contact-mediums";

// import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#projects",
    label: "Works",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

export const Navbar = () => {
  // const [activeSection, setActiveSection] = React.useState("");

  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = routeList.map((route) => route.href.replace("#", ""));
  //     const scrollPosition = window.scrollY + 100;

  //     for (const section of sections) {
  //       const element = document.getElementById(section);
  //       if (element) {
  //         const { offsetTop, offsetHeight } = element;
  //         if (
  //           scrollPosition >= offsetTop &&
  //           scrollPosition < offsetTop + offsetHeight
  //         ) {
  //           setActiveSection(`#${section}`);
  //           break;
  //         }
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll(); // Check initial position
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const isActive = (href: string) => activeSection === href;

  return (
    <header className="sticky top-5 z-40 w-full flex justify-center px-4">
      <div className="w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl flex justify-between items-center p-2 rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 shadow-lg shadow-black/5">
        <Link href="/" className="font-bold text-lg flex items-center">
          <Image
            src="https://portfolio-v1-rho-orcin.vercel.app/_next/image?url=%2Fimages%2Favatar.jpg&w=256&q=75"
            alt="Khalid Hossain"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="pl-2">Khalid Hossain</span>
        </Link>

        {/* <!-- Mobile --> */}
        <div className="flex items-center lg:hidden">
          <Link
            href="https://wa.me/8801605860143"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-[#25D366] transition-colors"
            aria-label="Chat on WhatsApp"
          >
            <Icons.whatsapp className="w-6 h-6" />
          </Link>
        </div>

        {/* <!-- Desktop --> */}
        <div className="hidden lg:block mx-auto">
          <ContactMedium routeList={routeList} />
        </div>

        <div className="hidden lg:flex">
          {/* <ToggleTheme /> */}
          <Button asChild size="sm" variant="ghost" aria-label="Send Email">
            <Link
              aria-label="Send Email"
              href="mailto:dev.khalidhossain@gmail.com"
            >
              <Mail className="size-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="sm"
            variant="ghost"
            aria-label="View on LinkedIn"
          >
            <Link
              aria-label="View on LinkedIn"
              href="https://www.linkedin.com/in/khalidhossainbadhon/"
              target="_blank"
            >
              <LinkedinIcon className="size-5" />
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
            <Link
              aria-label="View on GitHub"
              href="https://github.com/badhon252"
              target="_blank"
            >
              <Github className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
