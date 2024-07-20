"use client";

import { Button } from "@/components/atoms";
import { useAlertStore } from "@/stores/useAlertStore";
import { colorList, colors } from "@/styles";

export const MultiButtonModal = () => {
  const { show, onDismiss } = useAlertStore();

  const handleShow = (direction: "left" | "right") => {
    show({
      title: "Multi Button Modal",
      message:
        "Tempor voluptate quis velit irure deserunt tempor id velit ipsum non eu ad nostrud minim. Consectetur nostrud proident do cupidatat tempor ut esse pariatur.",
      actions: [
        {
          lable: "확인",
          style: "solid",
          color: "gray",
          onClick: onDismiss,
        },
        {
          lable: "수정",
          style: "soft",
          color: "gray",
          onClick: onDismiss,
        },
        {
          lable: "닫기",
          style: "outline",
          color: "gray",
          onClick: onDismiss,
        },
      ],
      footerDirection: direction,
    });
  };

  return (
    <div className="flex flex-row gap-4">
      <Button onClick={() => handleShow("left")} buttonColor="gray">
        Left Buttons
      </Button>
      <Button onClick={() => handleShow("right")} buttonColor="gray">
        Right Buttons
      </Button>
    </div>
  );
};
