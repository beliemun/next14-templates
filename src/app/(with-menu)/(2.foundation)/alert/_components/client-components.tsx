"use client";

import { Button, Divider, Section } from "@/components/atoms";
import { AlertAction, AlertProps, useAlertStore } from "@/stores/useAlertStore";

export const ClientComponents = () => {
  const { show, onDismiss } = useAlertStore();

  const handleShow = ({ ...rest }: Omit<AlertProps, "visible">) => {
    show({
      message:
        "Tempor voluptate quis velit irure deserunt tempor id velit ipsum non eu ad nostrud minim. Consectetur nostrud proident do cupidatat tempor ut esse pariatur.",
      ...rest,
    });
  };

  const mutipleButtonsActions: AlertAction[] = [
    {
      lable: "Okay",
      style: "solid",
      color: "red",
      onClick: onDismiss,
    },
    {
      lable: "Edit",
      style: "soft",
      color: "red",
      onClick: onDismiss,
    },
    {
      lable: "Close",
      style: "outline",
      color: "red",
      onClick: onDismiss,
    },
  ];

  const flexButtonsActions: AlertAction[] = [
    {
      lable: "Okay",
      style: "solid",
      color: "blue",
      onClick: onDismiss,
    },
    {
      lable: "Close",
      style: "outline",
      color: "blue",
      onClick: onDismiss,
    },
  ];

  return (
    <>
      <Section className="pt-2">
        <Button onClick={() => handleShow({ title: "Basic alert" })}>Show Basic Alert</Button>
      </Section>
      <Divider orientation="left">Multiple Buttons</Divider>
      <Section className="pt-2">
        <Button
          onClick={() =>
            handleShow({
              title: "Multiple Buttons",
              footerDirection: "left",
              actions: mutipleButtonsActions,
            })
          }
          buttonColor="red"
        >
          Left Multiple Buttons
        </Button>
        <Button
          onClick={() =>
            handleShow({
              title: "Multiple Buttons",
              footerDirection: "right",
              actions: mutipleButtonsActions,
            })
          }
          buttonColor="red"
        >
          Right Multiple Buttons
        </Button>
      </Section>
      <Divider orientation="left">Flex Buttons</Divider>
      <Section className="pt-2">
        <Button
          onClick={() =>
            handleShow({
              title: "Flex Buttons",
              footerDirection: "left",
              actions: flexButtonsActions,
              footerFitable: true,
            })
          }
          buttonColor="blue"
        >
          Left Flex Buttons
        </Button>
        <Button
          onClick={() =>
            handleShow({
              title: "Flex Buttons",
              footerDirection: "right",
              actions: flexButtonsActions,
              footerFitable: true,
            })
          }
          buttonColor="blue"
        >
          Right Flex Buttons
        </Button>
      </Section>
    </>
  );
};
