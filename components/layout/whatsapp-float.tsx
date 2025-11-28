"use client";

import Link from "next/link";
import { Icons } from "./sections/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-10 right-10 z-50 hidden lg:block">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              asChild
              size="icon"
              className="rounded-full w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Link
                href="https://wa.me/8801605860143"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <Icons.whatsapp className="w-8 h-8" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Chat on WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
