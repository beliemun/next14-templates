"use client";

import {
  Card,
  ColorPicker,
  DatePicker,
  Divider,
  Section,
  Space,
  Text,
  TimePicker,
} from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { colors } from "@/styles";
import dayjs from "dayjs";

export default function () {
  return (
    <PageLayout title="<ColorPicker />, <TimePicker />, <DatePicker />">
      <Divider orientation="left">Color Picker</Divider>
      <Section className="flex flex-col flex-wrap gap-4 pt-2">
        <Space direction="horizontal" size={16}>
          <ColorPicker defaultValue={colors.primary[500]} />
          <Text>base color picker</Text>
        </Space>
        <Space direction="horizontal" size={16}>
          <ColorPicker allowClear />
          <Text>with clear button</Text>
        </Space>
        <Space direction="horizontal" size={16}>
          <ColorPicker defaultValue={colors.red[500]} defaultFormat="hex" showText />
          <Text>with hex</Text>
        </Space>
        <Space direction="horizontal" size={16}>
          <ColorPicker defaultValue={colors.orange[500]} defaultFormat="hsb" showText />
          <Text>with hsb</Text>
        </Space>
        <Space direction="horizontal" size={16}>
          <ColorPicker defaultValue={colors.yellow[500]} defaultFormat="rgb" showText />
          <Text>with rgb</Text>
        </Space>
      </Section>
      <Divider orientation="left">Time Picker</Divider>
      <Section className="flex flex-row flex-wrap gap-4 pt-2">
        <Card title="Size">
          <Space direction="vertical" size={16}>
            <TimePicker
              size="small"
              format={"HH:mm a"}
              minuteStep={15}
              defaultValue={dayjs("08:15 am", "HH:mm a")}
            />
            <TimePicker
              size="middle"
              format={"HH:mm a"}
              minuteStep={15}
              defaultValue={dayjs("08:15 am", "HH:mm a")}
            />
            <TimePicker
              size="large"
              format={"HH:mm a"}
              minuteStep={15}
              defaultValue={dayjs("08:15 am", "HH:mm a")}
            />
          </Space>
        </Card>
        <Card title="Variants">
          <Space direction="vertical" size={16}>
            <TimePicker size="middle" format={"HH:mm a"} minuteStep={15} variant="outlined" />
            <TimePicker size="middle" format={"HH:mm a"} minuteStep={15} variant="filled" />
            <TimePicker size="middle" format={"HH:mm a"} minuteStep={15} variant="borderless" />
          </Space>
        </Card>
        <Card title="Range">
          <Space direction="vertical" size={16}>
            <TimePicker.RangePicker format={"HH:mm a"} minuteStep={15} />
            <TimePicker.RangePicker format={"HH:mm a"} minuteStep={15} status="warning" />
            <TimePicker.RangePicker format={"HH:mm a"} minuteStep={15} status="error" />
            <TimePicker.RangePicker format={"HH:mm a"} minuteStep={15} disabled />
          </Space>
        </Card>
      </Section>
      <Divider orientation="left">Date Picker</Divider>
      <Section className="flex flex-row flex-wrap gap-4 pt-2">
        <Card title="Size">
          <Space direction="vertical" size={16}>
            <DatePicker size="small" placeholder="small" />
            <DatePicker size="middle" placeholder="middle" />
            <DatePicker size="large" placeholder="large" />
          </Space>
        </Card>
        <Card title="Select">
          <Space direction="vertical" size={16}>
            <DatePicker placeholder="일 선택" />
            <DatePicker placeholder="주 선택" picker="week" />
            <DatePicker placeholder="달 선택" picker="month" />
            <DatePicker placeholder="연도 선택" picker="year" />
          </Space>
        </Card>
        <Card title="Range">
          <Space direction="vertical" size={16}>
            <DatePicker.RangePicker />
            <DatePicker.RangePicker status={"warning"} />
            <DatePicker.RangePicker status={"error"} />
            <DatePicker.RangePicker disabled />
          </Space>
        </Card>
      </Section>
    </PageLayout>
  );
}
