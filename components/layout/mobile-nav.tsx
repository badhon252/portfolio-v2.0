"use client";

import {
  Home,
  Layers,
  User,
  Mail,
  FolderOpen,
  LinkedinIcon,
  Github,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import Image from "next/image";
import { Separator } from "../ui/separator";

interface RouteProps {
  href: string;
  label: string;
}

const sectionRoutes: RouteProps[] = [
  {
    href: "/#projects",
    label: "Works",
  },
  {
    href: "/#about",
    label: "About",
  },
  {
    href: "/#faq",
    label: "FAQ",
  },
  {
    href: "/#contact",
    label: "Contact",
  },
];

export function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md lg:hidden">
      <div className="flex items-center justify-around p-2 rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 shadow-lg shadow-black/5">
        <Link
          href="/"
          className={cn(
            "flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-200",
            pathname === "/"
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:text-primary hover:bg-white/5"
          )}
        >
          <Home className="size-5" />
          <span className="text-[10px] font-medium mt-1">Home</span>
        </Link>

        <Link
          href="/projects"
          className={cn(
            "flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-200",
            pathname === "/projects"
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:text-primary hover:bg-white/5"
          )}
        >
          <FolderOpen className="size-5" />
          <span className="text-[10px] font-medium mt-1">Projects</span>
        </Link>

        <Link
          href="/#about"
          className={cn(
            "flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-200",
            pathname === "/#about"
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:text-primary hover:bg-white/5"
          )}
        >
          <User className="size-5" />
          <span className="text-[10px] font-medium mt-1">About</span>
        </Link>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              className={cn(
                "flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-200 text-muted-foreground hover:text-primary hover:bg-white/5"
              )}
            >
              <Layers className="size-5" />
              <span className="text-[10px] font-medium mt-1">Menu</span>
            </button>
          </SheetTrigger>
          <SheetContent
            side="bottom"
            className="rounded-t-2xl bg-card border-secondary"
          >
            <SheetHeader className="mb-4 text-left">
              <SheetTitle className="flex items-center gap-2">
                <Image
                  src="https://portfolio-v1-rho-orcin.vercel.app/_next/image?url=%2Fimages%2Favatar.jpg&w=256&q=75"
                  alt="Khalid Hossain"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span>Navigation</span>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-2 pb-6">
              {sectionRoutes.map(({ href, label }) => (
                <Button
                  key={href}
                  onClick={() => setIsOpen(false)}
                  asChild
                  variant="ghost"
                  className="justify-start text-base h-12"
                >
                  <Link href={href}>{label}</Link>
                </Button>
              ))}
            </div>
            <Separator />
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
              <Button
                asChild
                size="sm"
                variant="ghost"
                aria-label="View on GitHub"
              >
                <Link
                  aria-label="View on GitHub"
                  href="https://github.com/badhon252"
                  target="_blank"
                >
                  <Github className="size-5" />
                </Link>
              </Button>
            </div>
            <Separator />
            <div className="flex mt-4">
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
              <Button
                asChild
                size="sm"
                variant="ghost"
                aria-label="View on GitHub"
              >
                <Link
                  aria-label="View on GitHub"
                  href="https://github.com/badhon252"
                  target="_blank"
                >
                  <Github className="size-5" />
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
