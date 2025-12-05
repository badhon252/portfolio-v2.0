"use client";

import Link from "next/link";
import React from "react";

import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { DATA, Icons, IconProps } from "./constants";

export function SideDock() {
  return (
    <section
      className="hidden lg:block fixed bottom-32 -left-10 z-50"
      data-lenis-prevent
    >
      <div className="flex items-center justify-center rotate-90">
        {Object.entries(DATA.contact.social).map(([name, social]) => (
          <Link
            key={name}
            href={social.url}
            aria-label={social.name}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "size-12 rounded-full"
            )}
          >
            <social.icon className="size-4 -rotate-90" />
          </Link>
        ))}
      </div>
    </section>
  );
}
