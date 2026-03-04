import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SurfaceCardProps {
  children: ReactNode;
  className?: string;
}

export default function SurfaceCard({ children, className }: SurfaceCardProps) {
  return (
    <article
      className={cn(
        "bg-bg-card rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)]",
        className
      )}
    >
      {children}
    </article>
  );
}
