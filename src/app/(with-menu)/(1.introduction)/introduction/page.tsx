"use client";

import { Divider, Message } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import getUser from "@/lib/user";
import { useEffect } from "react";

export default function IntroductionPage() {
  const [messageApi, contextHolder] = Message.useMessage();

  useEffect(() => {
    (async () => {
      const user = await getUser();
      if (user) {
        messageApi.info(`${user.username}님 환영합니다! 🤗`);
      }
    })();
  }, []);

  return (
    <PageLayout title="Introduction">
      {contextHolder}
      <Divider orientation="left">Introduction</Divider>
    </PageLayout>
  );
}
