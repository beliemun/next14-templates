import { PageLayout } from "@/components/organisms";
import { Metadata } from "next";
import { ClientComponents } from "./_components";

export const metadata: Metadata = {
  title: "Trasfer",
};

export default function TransferPage() {
  return (
    <PageLayout title="<Trasfer />">
      <ClientComponents />
    </PageLayout>
  );
}
