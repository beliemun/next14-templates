import { Section, Text, Title } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { Card, Divider, Flex } from "antd";

export default function Typography() {
  return (
    <Flex className="w-full min-h-screen" justify="center" align="center">
      <PageLayout title="Typography">
        <Divider orientation="left">Text</Divider>
        <Section className="flex flex-row flex-wrap gap-4">
          <Card title={"sm"} className="w-52" draggable type="inner">
            <div className="flex flex-col">
              <Text type="sm-light">sm-light</Text>
              <Text type="sm-normal">sm-normal</Text>
              <Text type="sm-regular">sm-regular</Text>
              <Text type="sm-semibold">sm-semibold</Text>
              <Text type="sm-bold">sm-bold</Text>
            </div>
          </Card>
          <Card title={"base"} className="w-52" draggable type="inner">
            <div className="flex flex-col text-left">
              <Text type="base-light">base-light</Text>
              <Text type="base-normal">base-normal</Text>
              <Text type="base-regular">base-regular</Text>
              <Text type="base-semibold">base-semibold</Text>
              <Text type="base-bold">base-bold</Text>
            </div>
          </Card>
          <Card title={"lg"} className="w-52" draggable type="inner">
            <div className="flex flex-col text-left">
              <Text type="lg-light">lg-light</Text>
              <Text type="lg-normal">lg-normal</Text>
              <Text type="lg-regular">lg-regular</Text>
              <Text type="lg-semibold">lg-semibold</Text>
              <Text type="lg-bold">lg-bold</Text>
            </div>
          </Card>
          <Card title={"xl"} className="w-52" draggable type="inner">
            <div className="flex flex-col text-left">
              <Text type="xl-light">xl-light</Text>
              <Text type="xl-normal">xl-normal</Text>
              <Text type="xl-regular">xl-regular</Text>
              <Text type="xl-semibold">xl-semibold</Text>
              <Text type="xl-bold">xl-bold</Text>
            </div>
          </Card>
        </Section>
        <Divider orientation="left">Title</Divider>
        <Section className="flex flex-row flex-wrap gap-4 text-xl">
          <Card title={"h1"} draggable type="inner">
            <div className="flex flex-col">
              <Title type="h1-normal">h1-normal</Title>
              <Title type="h1-regular">h1-regular</Title>
              <Title type="h1-semibold">h1-semibold</Title>
              <Title type="h1-bold">h1-bold</Title>
            </div>
          </Card>
          <Card title={"h2"} draggable type="inner">
            <div className="flex flex-col">
              <Title type="h2-normal">h2-normal</Title>
              <Title type="h2-regular">h2-regular</Title>
              <Title type="h2-semibold">h2-semibold</Title>
              <Title type="h2-bold">h2-bold</Title>
            </div>
          </Card>
          <Card title={"h3"} draggable type="inner">
            <div className="flex flex-col">
              <Title type="h3-normal">h3-normal</Title>
              <Title type="h3-regular">h3-regular</Title>
              <Title type="h3-semibold">h3-semibold</Title>
              <Title type="h3-bold">h3-bold</Title>
            </div>
          </Card>
          <Card title={"h4"} draggable type="inner">
            <div className="flex flex-col">
              <Title type="h4-normal">h4-normal</Title>
              <Title type="h4-regular">h4-regular</Title>
              <Title type="h4-semibold">h4-semibold</Title>
              <Title type="h4-bold">h4-bold</Title>
            </div>
          </Card>
          <Card title={"h5"} draggable type="inner">
            <div className="flex flex-col">
              <Title type="h5-normal">h5-normal</Title>
              <Title type="h5-regular">h5-regular</Title>
              <Title type="h5-semibold">h5-semibold</Title>
              <Title type="h5-bold">h5-bold</Title>
            </div>
          </Card>
          <Card title={"h6"} draggable type="inner">
            <div className="flex flex-col">
              <Title type="h6-normal">h6-normal</Title>
              <Title type="h6-regular">h6-regular</Title>
              <Title type="h6-semibold">h6-semibold</Title>
              <Title type="h6-bold">h6-bold</Title>
            </div>
          </Card>
        </Section>
      </PageLayout>
    </Flex>
  );
}
