"use client";

import { Button, Divider, Section } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { useState } from "react";
import { LoadingModalComponent, ModalComponent } from "./_components";

export default function () {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenLoadingModal, setIsOpenLoadingModal] = useState(false);

  const handleShowMoal = () => setIsOpenModal(true);
  const handleShowLoadingModal = () => setIsOpenLoadingModal(true);

  return (
    <PageLayout title="<Modal />">
      <Divider orientation="left">Basic Modal</Divider>
      <Section className="flex flex-col gap-4 pt-2">
        <Button onClick={handleShowMoal}>Show</Button>
      </Section>
      <Divider orientation="left">Page Modal</Divider>
      <Section className="flex flex-col gap-4 pt-2">
        <Button onClick={handleShowMoal}>Show</Button>
      </Section>
      <Divider orientation="left">Loading Modal</Divider>
      <Section className="flex flex-col gap-4 pt-2">
        <Button onClick={handleShowLoadingModal}>Show</Button>
      </Section>
      {isOpenModal ? <ModalComponent onClose={() => setIsOpenModal(false)} /> : null}
      {isOpenLoadingModal ? (
        <LoadingModalComponent onClose={() => setIsOpenLoadingModal(false)} />
      ) : null}
    </PageLayout>
  );
}
