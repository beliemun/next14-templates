import { Divider } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
};

export default function SkillsPage() {
  return (
    <PageLayout title="Skills">
      <Divider orientation="left">Skills</Divider>
    </PageLayout>
  );
}
