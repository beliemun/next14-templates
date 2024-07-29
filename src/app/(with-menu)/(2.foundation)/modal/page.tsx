"use client";

import { Button, Divider, Section } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { useState } from "react";
import { LoadingModalComponent, ModalComponent, PageModalComponent } from "./_components";

export default function ModalPage() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenPageModal, setIsOpenPageModal] = useState(false);
  const [isOpenLoadingModal, setIsOpenLoadingModal] = useState(false);

  const handleOpenMoal = () => setIsOpenModal(true);
  const handleOpenPageModal = () => setIsOpenPageModal(true);
  const handleOpenLoadingModal = () => setIsOpenLoadingModal(true);

  return (
    <PageLayout title="<Modal />">
      <Divider orientation="left">Basic Modal</Divider>
      <Section className="pt-2">
        <Button onClick={handleOpenMoal}>Open Basic Modal</Button>
      </Section>
      <Divider orientation="left">Page Modal</Divider>
      <Section className="pt-2">
        <Button onClick={handleOpenPageModal}>Open Page Modal</Button>
      </Section>
      <Divider orientation="left">Loading Modal</Divider>
      <Section className="pt-2">
        <Button onClick={handleOpenLoadingModal}>Open Loading Modal</Button>
      </Section>
      {isOpenModal ? <ModalComponent onClose={() => setIsOpenModal(false)} /> : null}
      {isOpenPageModal ? <PageModalComponent onClose={() => setIsOpenPageModal(false)} /> : null}
      {isOpenLoadingModal ? (
        <LoadingModalComponent onClose={() => setIsOpenLoadingModal(false)} />
      ) : null}
    </PageLayout>
  );
}
