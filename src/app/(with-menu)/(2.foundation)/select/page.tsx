import { PageLayout } from "@/components/organisms";
import { Metadata } from "next";
import { ClientComponents } from "./_components";

export const metadata: Metadata = {
  title: "Select",
};

export default function SelectPage() {
  return (
    <PageLayout title="<Select />">
      <ClientComponents />
    </PageLayout>
  );
}
