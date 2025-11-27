import { Spinner } from "@/components/ui/shadcn-io/spinner";
import React from "react";

export default function Loading() {
  return <div className="max-w-3xl mx-auto py-12 px-4 flex items-center justify-center h-screen">
    <Spinner className="w-12 h-12 text-primary" />
  </div>;
}
