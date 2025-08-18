import React from "react";
import { Archivo_Black } from "next/font/google";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Badge } from "@/components/ui/badge";
const archivoBlack = Archivo_Black({ weight: "400", subsets: ["latin"] });

export default function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 space-y-8">
      <Badge variant="outline" className="text-sm py-2">
        <span className="mr-2 bg-primary !text-black rounded-xl">
          <Badge>Role</Badge>
        </span>
        <span> Frontend Developer </span>
      </Badge>

      <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-black">
        <h1 className={archivoBlack.className}>
          Crafting Code, <br />
          <span className="text-transparent px-2 bg-gradient-to-r from-[blue] to-primary bg-clip-text">
            Creating Impact
          </span>
        </h1>
      </div>
    </BackgroundLines>
  );
}
