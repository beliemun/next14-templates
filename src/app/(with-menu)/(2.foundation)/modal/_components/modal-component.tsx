"use client";

import { Modal } from "@/components/molecules";
import { ModalProps } from "@/components/molecules/modal/types";
import { BasicTransfer } from "../../transfer/_components";
import { useEffect, useState } from "react";

export const ModalComponent = ({ ...rest }: ModalProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
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
      loading={loading}
      {...rest}
    >
      <BasicTransfer />
    </Modal>
  );
};
