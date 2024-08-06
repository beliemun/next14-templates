import { Divider } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { Metadata } from "next";
import { Introduction } from "./_components";

export const metadata: Metadata = {
  title: "Introduction",
};

export default function IntroductionPage() {
  return (
    <PageLayout title={"Introduction"}>
      <Divider orientation="left">소개</Divider>
      <Introduction />
    </PageLayout>
  );
}
