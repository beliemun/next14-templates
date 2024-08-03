import { PageLayout } from "@/components/organisms";
import { ClientComponents } from "./_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkbox",
};

export default function CheckboxPage() {
  return (
    <PageLayout title="<Checkbox />">
      <ClientComponents />
    </PageLayout>
  );
}
