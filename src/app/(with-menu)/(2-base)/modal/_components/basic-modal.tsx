"use client";

import { Button } from "@/components/atoms";
import { useAlertStore } from "@/stores/useAlertStore";

export const BasicModal = () => {
  const { show } = useAlertStore();

  const handleShow = () => {
    show({
      title: "Basic Modal",
      message:
        "Tempor voluptate quis velit irure deserunt tempor id velit ipsum non eu ad nostrud minim. Consectetur nostrud proident do cupidatat tempor ut esse pariatur.",
    });
  };
  return <Button onClick={handleShow}>Open Modal</Button>;
};
