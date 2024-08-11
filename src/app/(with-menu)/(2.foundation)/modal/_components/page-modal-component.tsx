"use client";

import { Checkbox, Input, Radio, RadioOption, Select, SelectOption } from "@/components/atoms";
import { Form, FormItem, PageModal } from "@/components/molecules";
import { PageModalProps } from "@/components/molecules/page-modal/types";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const radioOptions: RadioOption[] = [
  {
    label: "Option1",
    value: "Option1",
  },
  {
    label: "Option2",
    value: "Option2",
  },
  {
    label: "Option3",
    value: "Option3",
  },
];

const selectOptions: SelectOption[] = [
  {
    label: "Option1",
    value: "Option1",
  },
  {
    label: "Option2",
    value: "Option2",
  },
  {
    label: "Option3",
    value: "Option3",
  },
];

export const PageModalComponent = (props: PageModalProps) => {
  const [loading, setLoading] = useState(true);
  const [isSmallMode, setIsSmallMode] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  useEffect(() => {
    const updateCollapsedWidth = () => {
      window.innerWidth < 600 ? setIsSmallMode(true) : setIsSmallMode(false);
    };
    window.addEventListener("resize", updateCollapsedWidth);
    updateCollapsedWidth();

    return () => window.removeEventListener("resize", updateCollapsedWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageModal
      title="Here is title"
      description="Here is description of the page modal"
      actions={[
        {
          lable: "Main Button",
          style: "solid",
        },
        {
          lable: "Sub Buttom",
          style: "outline",
        },
      ]}
      loading={loading}
      loadingMessage="Here is loading message"
      {...props}
    >
      <Form title="Here is form title" description="Here is a form description" gap={30}>
        <FormItem
          direction={isSmallMode ? "vertical" : "horizontal"}
          label="Label"
          tooltipTitle="Here is tooltip title"
          extra="Here is extra description"
          required
        >
          <Input placeholder="placeholder" />
        </FormItem>
        <FormItem
          direction={isSmallMode ? "vertical" : "horizontal"}
          label="Label"
          tooltipTitle="Here is tooltip title"
          extra="Here is extra description"
          required
        >
          <Input placeholder="placeholder" addonBefore="https://" addonAfter=".com" />
        </FormItem>
        <FormItem
          direction={isSmallMode ? "vertical" : "horizontal"}
          label="Label"
          tooltipTitle="Here is tooltip title"
          extra="Here is extra description"
          required
        >
          <Select
            style={{ width: "100%" }}
            options={selectOptions}
            defaultValue={selectOptions[0].value}
          />
        </FormItem>
        <FormItem
          direction={isSmallMode ? "vertical" : "horizontal"}
          label="Label"
          tooltipTitle="Here is tooltip title"
          extra="Here is extra description"
          required
        >
          <Select
            style={{ width: "100%" }}
            options={selectOptions}
            defaultValue={selectOptions}
            mode="multiple"
          />
        </FormItem>
        <FormItem
          direction={isSmallMode ? "vertical" : "horizontal"}
          label="Label"
          tooltipTitle="Here is tooltip title"
          extra="Here is extra description"
          required
        >
          <Radio.Group
            className={cn("flex flex-col xs:flex-row gap-2")}
            defaultValue={selectOptions[0].value}
            options={radioOptions}
          />
        </FormItem>
        <FormItem
          direction={isSmallMode ? "vertical" : "horizontal"}
          label="Label"
          tooltipTitle="Here is tooltip title"
          extra="Here is extra description"
          required
        >
          <Checkbox.Group
            className={cn("flex flex-col xs:flex-row gap-2")}
            defaultValue={[selectOptions[0].value]}
            options={radioOptions}
          />
        </FormItem>
        <FormItem
          direction={isSmallMode ? "vertical" : "horizontal"}
          label="Label"
          tooltipTitle="Here is tooltip title"
          extra="Here is extra description"
          required
        >
          <Input.TextArea style={{ minHeight: 100 }} placeholder="placeholder" />
        </FormItem>
      </Form>
    </PageModal>
  );
};
