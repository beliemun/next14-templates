import { Divider, Section, Timeline } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { Metadata } from "next";
import {
  Boostree,
  Buddymon,
  Contact,
  DownloadButton,
  Introduction,
  KeyAchievements,
  Kf,
  Kimxy,
  Linkdens,
  Skills,
} from "./_components";

export const metadata: Metadata = {
  title: "Introduction",
};

export default function IntroductionPage() {
  return (
    <PageLayout title={"Introduction"}>
      <Divider orientation="left">간략 소개</Divider>
      <Section className="pt-2">
        <Introduction />
      </Section>
      <Divider orientation="left">연락처</Divider>
      <Section className="pt-2">
        <Contact />
      </Section>
      <Divider orientation="left">기술 스택</Divider>
      <Section className="pt-2">
        <Skills />
      </Section>
      <Divider orientation="left">핵심 직무 및 역량</Divider>
      <Section className="pt-2">
        <KeyAchievements />
      </Section>
      <Divider orientation="left">세부 경력 사항</Divider>
      <Section className="mt-2">
        <Timeline
          items={[
            { children: <Boostree /> },
            { children: <Linkdens /> },
            { children: <Kimxy /> },
            { children: <Kf /> },
            { children: <Buddymon /> },
          ]}
        />
      </Section>
      <DownloadButton />
    </PageLayout>
  );
}
