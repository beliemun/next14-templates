import { Divider } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Introduction",
};

export default function IntroductionPage() {
  return (
    <PageLayout title="Introduction">
      <Divider orientation="left">Introduction</Divider>
    </PageLayout>
  );
}
