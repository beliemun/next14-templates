import { Alert } from "@/components/molecules";
import { MenuLayout } from "@/components/organisms";
import { ReactNode } from "react";

export default async function WithMenuLayout({ children }: { children: ReactNode }) {
  return (
    <MenuLayout>
      {children}
      <Alert />
    </MenuLayout>
  );
}
