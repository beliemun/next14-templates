"use client";

import { Button, Divider, Section, Space } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { HomeOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

export default function IntroductionPage() {
  return (
    <PageLayout title="Introduction">
      <Divider orientation="left">Introduction</Divider>
      <Section className="row-center gap-10">
        <Button buttonSize="xs">Button</Button>
        <Button buttonSize="sm">Button</Button>
        <Button buttonSize="default">Button</Button>
        <Button buttonSize="xs">
          <HomeOutlined />
        </Button>
        <Button buttonSize="sm">
          <HomeOutlined />
        </Button>
        <Button buttonSize="default">
          <HomeOutlined />
        </Button>
      </Section>
    </PageLayout>
  );
}
