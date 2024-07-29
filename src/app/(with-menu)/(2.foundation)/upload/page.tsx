"use client";

import { Button, Divider, Dragger, Section, Space, Text, Upload } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { colors } from "@/styles";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { message, UploadFile } from "antd";
import { UploadChangeParam } from "antd/lib/upload";
import { DragEvent } from "react";

export default function UploadPage() {
  const handleChange = (info: UploadChangeParam<UploadFile<any>>) => {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    console.log("Dropped files", e.dataTransfer.files);
  };
  return (
    <PageLayout title="<Upload />">
      <Divider orientation="left">Basic Upload</Divider>
      <Section className="pt-2">
        <Upload
          button={
            <Button buttonColor={"primary"} buttonStyle="outline" className="border-dashed">
              <PlusOutlined style={{ marginRight: 8 }} />
              Upload
            </Button>
          }
        />
      </Section>
      <Divider orientation="left">Drag Upload</Divider>
      <Section className="pt-2">
        <Dragger
          multiple={true}
          onChange={handleChange}
          onDrop={handleDrop}
          className="w-full max-w-xl hover:opacity-50 transition-all duration-200 ease-in-out"
        >
          <Space direction="vertical" gap={16}>
            <UploadOutlined style={{ fontSize: 40, color: colors.primary[500] }} />
            <Text type="lg-semibold">Click or drag file to this area to upload</Text>
            <Space direction="vertical" gap={0}>
              <Text type="sm-regular">Support for a single or bulk upload.</Text>
              <Text type="sm-regular">
                Strictly prohibited from uploading company data or other banned files.
              </Text>
            </Space>
          </Space>
        </Dragger>
      </Section>
    </PageLayout>
  );
}
