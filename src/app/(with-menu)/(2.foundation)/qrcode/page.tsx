import { PageLayout } from "@/components/organisms";
import { ClientComponents } from "./_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QRCode",
};

export default function QrcodePage() {
  return (
    <PageLayout title="<QRCode />">
      <ClientComponents />
    </PageLayout>
  );
}
