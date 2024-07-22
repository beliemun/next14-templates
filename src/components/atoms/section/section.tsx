import { cn } from "@/styles";
import { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {}

export const Section = ({ className, children, ...rest }: SectionProps) => {
  return (
    <section className={cn(`w-full p-8`, className)} {...rest}>
      {children}
    </section>
  );
};
