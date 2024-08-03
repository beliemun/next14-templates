import { PageLayout } from "@/components/organisms";
import { Metadata } from "next";
import { ClientComponents } from "./_components";

export const metadata: Metadata = {
  title: "Switch",
};

export default function SwitchPage() {
  return (
    <PageLayout title="<Switch />">
      <ClientComponents />
    </PageLayout>
  );
}
