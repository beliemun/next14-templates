import { MenuLayout } from "@/components/layouts";
import { ReactNode } from "react";

export default function WithMenuLayout({ children }: { children: ReactNode }) {
  return <MenuLayout>{children}</MenuLayout>;
}
