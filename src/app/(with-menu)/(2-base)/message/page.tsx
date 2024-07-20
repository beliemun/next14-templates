"use client";

import { Button, Divider, Message, Section, Space } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";

export default function () {
  const [messageApi, contextHolder] = Message.useMessage();
  const handleInfo = () => messageApi.info("Hello, this is an info message.");
  const handleSuccess = () => messageApi.success("Hello, this is a success message.");
  const handleWarning = () => messageApi.warning("Hello, this is a warning message.");
  const handleError = () => messageApi.error("Hello, this is an error message.");

  const key = "updatable";
  const hadnleLoading = () => {
    messageApi.open({ key, type: "loading", content: "Loading..." });
    setTimeout(() => {
      messageApi.open({ key, type: "success", content: "Loaded!", duration: 2 });
    }, 1000);
  };
  return (
    <PageLayout title="<Message />">
      <Divider orientation="left">Variants</Divider>
      <Section className="flex flex-col gap-4 pt-2">
        <Space direction="horizontal" gap={16}>
          {contextHolder}
          <Button onClick={handleInfo} buttonColor="cyan" buttonStyle="soft">
            Info
          </Button>
          <Button onClick={handleSuccess} buttonColor="green" buttonStyle="soft">
            Success
          </Button>
          <Button onClick={handleWarning} buttonColor="yellow" buttonStyle="soft">
            Warning
          </Button>
          <Button onClick={handleError} buttonColor="red" buttonStyle="soft">
            Error
          </Button>
        </Space>
      </Section>
      <Divider orientation="left">Loading and finshed</Divider>
      <Section className="flex flex-col gap-4 pt-2">
        <Button onClick={hadnleLoading} buttonColor="primary">
          Show Message
        </Button>
      </Section>
    </PageLayout>
  );
}
