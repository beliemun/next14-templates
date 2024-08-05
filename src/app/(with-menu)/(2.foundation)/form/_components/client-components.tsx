"use client";

import { Button, Checkbox, Input, Radio, Select } from "@/components/atoms";
import { Form, FormItem } from "@/components/molecules";
import { FormEvent } from "react";
import { radioOptions, selectOptions } from "./data";
import { AlertProps, useAlertStore } from "@/stores/useAlertStore";

export const ClientComponents = () => {
  const { show } = useAlertStore();

  const handleShow = () => {
    show({
      title: "Form example",
      message: "Here is form message",
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Form
      onSubmit={handleSubmit}
      title="Here is form title"
      description="Here is a form description"
      gap={30}
    >
      <FormItem
        label="Name"
        tooltipTitle="Here is tooltip title"
        extra="Here is extra description"
        required
      >
        <Input placeholder="placeholder" />
      </FormItem>
      <FormItem
        label="Name"
        tooltipTitle="Here is tooltip title"
        extra="Here is extra description"
        required
      >
        <Input placeholder="placeholder" addonBefore="https://" addonAfter=".com" />
      </FormItem>
      <FormItem
        label="Name"
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
        label="Name"
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
        label="Name"
        tooltipTitle="Here is tooltip title"
        extra="Here is extra description"
        required
      >
        <Radio.Group
          className="w-full space-x-5"
          defaultValue={selectOptions[0].value}
          options={radioOptions}
        />
      </FormItem>
      <FormItem
        label="Name"
        tooltipTitle="Here is tooltip title"
        extra="Here is extra description"
        required
      >
        <Checkbox.Group
          className="w-full space-x-5"
          defaultValue={[selectOptions[0].value]}
          options={radioOptions}
        />
      </FormItem>
      <FormItem
        label="Name"
        tooltipTitle="Here is tooltip title"
        extra="Here is extra description"
        required
      >
        <Input.TextArea style={{ minHeight: 100 }} placeholder="placeholder" />
      </FormItem>
      <div className="flex flex-row-reverse max-w-[640px] gap-4">
        <Button onClick={handleShow}>Submit</Button>
        <Button buttonStyle="outline">Cancle</Button>
      </div>
    </Form>
  );
};
