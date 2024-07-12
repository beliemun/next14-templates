import { cn } from "@/styles";
import { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children?: ReactNode;
}

export const Section = ({ className, children, ...rest }: SectionProps) => {
  return (
    <section className={cn(className, `w-full p-8`)} {...rest}>
      {children}
    </section>
  );
};
