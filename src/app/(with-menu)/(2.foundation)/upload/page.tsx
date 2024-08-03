import { PageLayout } from "@/components/organisms";
import { Metadata } from "next";
import { ClientComponents } from "./_components";

export const metadata: Metadata = {
  title: "Upload",
};

export default function UploadPage() {
  return (
    <PageLayout title="<Upload />">
      <ClientComponents />
    </PageLayout>
  );
}
