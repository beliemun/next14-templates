import { Alert } from "@/components/molecules";
import { MenuLayout } from "@/components/organisms";
import getUser from "@/lib/user";
import { ReactNode } from "react";

export default async function WithMenuLayout({ children }: { children: ReactNode }) {
  const user = await getUser();
  return (
    <MenuLayout user={user}>
      {children}
      <Alert />
    </MenuLayout>
  );
}
