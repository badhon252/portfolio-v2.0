import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  alignment?: "center" | "left" | "right";
  className?: string;
}

export const SectionHeader = ({
  title,
  description,
  alignment = "center",
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "mb-12",
        {
          "text-center": alignment === "center",
          "text-left": alignment === "left",
          "text-right": alignment === "right",
        },
        className
      )}
    >
      <h2
        className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-8xl font-black leading-none text-transparent dark:from-white dark:to-slate-900/10 will-change-transform"
        style={{ transform: "translateZ(0)", contain: "layout style paint" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn("text-lg text-muted-foreground mt-4", {
            "mx-auto": alignment === "center",
            "max-w-2xl": alignment === "center",
          })}
        >
          {description}
        </p>
      )}
    </div>
  );
};
