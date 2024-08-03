import { Divider } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { ClientComponents } from "./_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image",
};

export default function ImagePage() {
  return (
    <PageLayout title="<Image />">
      <Divider orientation="left">Basic Image</Divider>
      <ClientComponents />
    </PageLayout>
  );
}
