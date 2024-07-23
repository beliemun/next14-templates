"use client";

import { Modal } from "@/components/molecules";
import { ModalProps } from "@/components/molecules/modal/types";
import { BasicTransfer } from "../../transfer/_components";
import { useEffect, useState } from "react";

export const BasicModal = ({ ...rest }: ModalProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, []);

  return (
    <Modal
      title="Basic Modal"
      message="Tempor voluptate quis velit irure deserunt tempor id velit ipsum non eu ad nostrud minim. Consectetur nostrud proident do cupidatat tempor ut esse pariatur."
      actions={[
        {
          lable: "Okay",
          style: "solid",
        },
        {
          lable: "Close",
          style: "outline",
        },
      ]}
      size={720}
      loading={isLoading}
      {...rest}
    >
      <BasicTransfer />
    </Modal>
  );
};
