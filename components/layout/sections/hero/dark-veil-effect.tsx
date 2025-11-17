import React from "react";
import DarkVeil from "@/components/DarkVeil";

export default function DarkVeilEffect() {
  return (
    <div
      style={{ width: "100%", height: "100vh", position: "absolute", inset: 0 }}
    >
      <DarkVeil />
    </div>
  );
}
