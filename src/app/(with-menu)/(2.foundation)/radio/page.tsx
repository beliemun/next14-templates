import { PageLayout } from "@/components/organisms";
import { ClientComponents } from "./_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radio",
};

export default function RadioPage() {
  return (
    <PageLayout title="<Radio />">
      <ClientComponents />
    </PageLayout>
  );
}
