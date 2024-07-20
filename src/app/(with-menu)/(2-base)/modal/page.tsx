"use client";

import { Button, Divider, Section } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { useAlertStore } from "@/stores/useAlertStore";

export default function () {
  const { show, onDismiss } = useAlertStore();

  const handleShowAlert = () => {
    show({
      title: "Alert Modal",
      message:
        "Tempor voluptate quis velit irure deserunt tempor id velit ipsum non eu ad nostrud minim. Consectetur nostrud proident do cupidatat tempor ut esse pariatur.",
      actions: [
        {
          lable: "확인",
          style: "solid",
          onClick: onDismiss,
        },
        {
          lable: "닫기",
          style: "outline",
          onClick: onDismiss,
        },
      ],
    });
  };

  return (
    <PageLayout title="<Modal />">
      <Divider orientation="left">Alert Modal</Divider>
      <Section className="flex flex-col gap-4 pt-2">
        <Button onClick={handleShowAlert}>Open Modal</Button>
      </Section>
    </PageLayout>
  );
}
