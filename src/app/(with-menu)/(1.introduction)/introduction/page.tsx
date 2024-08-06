import { Divider } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { Metadata } from "next";
import { Introduction, Skills } from "./_components";

export const metadata: Metadata = {
  title: "Introduction",
};

export default function IntroductionPage() {
  return (
    <PageLayout title={"Introduction"}>
      <Divider orientation="left">소개</Divider>
      <Introduction />

      <Divider orientation="left">기술</Divider>
      <Skills />
    </PageLayout>
  );
}
