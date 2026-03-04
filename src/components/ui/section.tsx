import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return <section className={cn("max-w-[1200px] mx-auto px-6", className)}>{children}</section>;
}
