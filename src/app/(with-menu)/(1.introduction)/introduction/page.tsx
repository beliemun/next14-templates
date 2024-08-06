import { Divider, Section, Timeline } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { Metadata } from "next";
import { Boostree, Buddymon, Introduction, Kf, Kimxy, Linkdens, Skills } from "./_components";

export const metadata: Metadata = {
  title: "Introduction",
};

export default function IntroductionPage() {
  return (
    <PageLayout title={"Introduction"}>
      <Divider orientation="left">소개</Divider>
      <Section className="pt-2">
        <Introduction />
      </Section>
      <Divider orientation="left">기술</Divider>
      <Section className="pt-2">
        <Skills />
      </Section>
      <Divider orientation="left">경력</Divider>
      <Section className="mt-2">
        <Timeline
          items={[
            {
              children: <Boostree />,
            },
            {
              children: <Linkdens />,
            },
            {
              children: <Kimxy />,
            },
            {
              children: <Kf />,
            },
            {
              children: <Buddymon />,
            },
          ]}
        />
      </Section>
    </PageLayout>
  );
}
