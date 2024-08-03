"use client";

import { Button, Divider, Section } from "@/components/atoms";
import { useState } from "react";
import { ModalComponent } from "./modal-component";
import { PageModalComponent } from "./page-modal-component";
import { LoadingModalComponent } from "./loading-modal-component";

export const ClientComponents = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenPageModal, setIsOpenPageModal] = useState(false);
  const [isOpenLoadingModal, setIsOpenLoadingModal] = useState(false);

  const handleOpenMoal = () => setIsOpenModal(true);
  const handleOpenPageModal = () => setIsOpenPageModal(true);
  const handleOpenLoadingModal = () => setIsOpenLoadingModal(true);

  return (
    <>
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
    </>
  );
};
