import { PageLayout } from "@/components/organisms";
import { ClientComponents } from "./_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modal",
};

export default function ModalPage() {
  return (
    <PageLayout title="<Modal />">
      <ClientComponents />
    </PageLayout>
  );
}
