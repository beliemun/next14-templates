import { Divider } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { Metadata } from "next";
import { ClientComponents } from "./_components";

export const metadata: Metadata = {
  title: "Alert",
};

export default function AlertPage() {
  return (
    <PageLayout title="<Alert />">
      <Divider orientation="left">Basic alert</Divider>
      <ClientComponents />
    </PageLayout>
  );
}
