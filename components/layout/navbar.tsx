"use client";
import { Github, Menu, LinkedinIcon } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const [isOpen, setIsOpen] = React.useState(false);
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
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Menu
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer lg:hidden"
              />
            </SheetTrigger>

            <SheetContent
              side="left"
              className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
            >
              <div>
                <SheetHeader className="mb-4 ml-4">
                  <SheetTitle className="flex items-center">
                    <Link href="/" className="flex items-center">
                      <Image
                        src="https://portfolio-v1-rho-orcin.vercel.app/_next/image?url=%2Fimages%2Favatar.jpg&w=256&q=75"
                        alt="Khalid Hossain"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <span className="pl-2">Khalid Hossain</span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-2">
                  {routeList.map(({ href, label }) => (
                    <Button
                      key={href}
                      onClick={() => setIsOpen(false)}
                      asChild
                      variant="ghost"
                      className={`justify-start text-base`}
                    >
                      <Link href={href}>{label}</Link>
                    </Button>
                  ))}
                </div>
              </div>

              {/* <SheetFooter className="flex-col sm:flex-col justify-start items-start">
                <Separator className="mb-2" />
                <ToggleTheme />
              </SheetFooter> */}
            </SheetContent>
          </Sheet>
        </div>

        {/* <!-- Desktop --> */}
        <NavigationMenu className="hidden lg:block mx-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              {routeList.map(({ href, label }) => (
                <NavigationMenuLink key={href} asChild>
                  <Link
                    href={href}
                    className={`text-base px-4 py-2 rounded-lg transition-all duration-200`}
                  >
                    {label}
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex">
          {/* <ToggleTheme /> */}
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
