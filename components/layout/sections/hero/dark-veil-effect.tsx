import React from "react";
import DarkVeil from "@/components/DarkVeil";

export default function DarkVeilEffect() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        // rotate: "180deg",
      }}
    >
      <DarkVeil />
    </div>
  );
}
