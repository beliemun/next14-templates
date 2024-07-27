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
import { Form, FormItem, Test } from "@/components/molecules";
import { PageLayout } from "@/components/organisms";

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
  return (
    <PageLayout title="<Form />">
      <Section className="flex flex-col flex-wrap gap-4">
        {/* <Form title="Here is form title" description="Here is a form description">
          <FormItem
            label="Label Name"
            tooltipTitle="Please write down here"
            extra="Here is extra description"
            required
          >
            <Input placeholder="placeholder" />
          </FormItem>
          <FormItem
            label="Label Name"
            tooltipTitle="Please write down here"
            extra="Here is extra description"
            required
          >
            <Input placeholder="placeholder" addonBefore="https://" addonAfter=".com" />
          </FormItem>
          <FormItem
            label="Label Name"
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
            label="Label Name"
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
            label="Label Name"
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
            label="Label Name"
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
            label="Label Name"
            tooltipTitle="Please write down here"
            extra="Here is extra description"
            required
          >
            <Input.TextArea style={{ minHeight: 100 }} placeholder="placeholder" />
          </FormItem>
        </Form> */}
        <Test />
      </Section>
    </PageLayout>
  );
}
