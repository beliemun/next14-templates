import { Divider } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { ClientComponents } from "./_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Message",
};

export default function MessagePage() {
  return (
    <PageLayout title="<Message />">
      <Divider orientation="left">Variants</Divider>
      <ClientComponents />
    </PageLayout>
  );
}
