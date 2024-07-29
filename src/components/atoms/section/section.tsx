import { cn } from "@/styles";
import { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {}

export const Section = ({ className, children, ...rest }: SectionProps) => {
  return (
    <section className={cn(`flex flex-wrap w-full p-8 gap-4`, className)} {...rest}>
      {children}
    </section>
  );
};
