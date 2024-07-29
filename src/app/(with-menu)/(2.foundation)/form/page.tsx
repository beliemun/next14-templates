"use client";

import {
  Button,
  Checkbox,
  Input,
  Radio,
  RadioOption,
  Section,
  Select,
  SelectOption,
} from "@/components/atoms";
import { Form, FormItem } from "@/components/molecules";
import { PageLayout } from "@/components/organisms";
import { FormEvent, FormEventHandler } from "react";

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

export default function FormPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <PageLayout title="<Form />">
      <Section>
        <Form
          onSubmit={handleSubmit}
          title="Here is form title"
          description="Here is a form description"
          gap={30}
        >
          <FormItem
            label="Name"
            tooltipTitle="Please write down here"
            extra="Here is extra description"
            required
          >
            <Input placeholder="placeholder" />
          </FormItem>
          <FormItem
            label="Name"
            tooltipTitle="Please write down here"
            extra="Here is extra description"
            required
          >
            <Input placeholder="placeholder" addonBefore="https://" addonAfter=".com" />
          </FormItem>
          <FormItem
            label="Name"
            tooltipTitle="Please write down here"
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
            tooltipTitle="Please write down here"
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
            tooltipTitle="Please write down here"
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
            tooltipTitle="Please write down here"
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
            tooltipTitle="Please write down here"
            extra="Here is extra description"
            required
          >
            <Input.TextArea style={{ minHeight: 100 }} placeholder="placeholder" />
          </FormItem>
          <div className="flex flex-row-reverse max-w-[640px] gap-4">
            <Button>Submit</Button>
            <Button buttonStyle="outline">Cancle</Button>
          </div>
        </Form>
      </Section>
    </PageLayout>
  );
}
