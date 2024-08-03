import { Divider } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "History",
};

export default function HistoryPage() {
  return (
    <PageLayout title="History">
      <Divider orientation="left">history</Divider>
    </PageLayout>
  );
}
