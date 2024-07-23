"use client";

import { Button, Divider, Section } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { useState } from "react";
import { BasicModal } from "./_components";

export default function () {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleShowMoal = () => {
    setIsOpenModal(true);
  };
  return (
    <PageLayout title="<Modal />">
      <Divider orientation="left">Basic Modal</Divider>
      <Section className="flex flex-col gap-4 pt-2">
        <Button onClick={handleShowMoal}>Show Modal</Button>
      </Section>
      <Divider orientation="left">Page Modal</Divider>
      <Section className="flex flex-col gap-4 pt-2">
        <Button onClick={handleShowMoal}>Show Page Modal</Button>
      </Section>
      <BasicModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
    </PageLayout>
  );
}
