"use client";

import { Divider } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { useDarkModeStore } from "@/stores/useDarkModeStore";

export default function IntroductionPage() {
  return (
    <PageLayout title="Introduction">
      <Divider orientation="left">Introduction</Divider>
    </PageLayout>
  );
}
