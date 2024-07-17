import { Card, Divider, Section, Text, Title } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";

export default function TitlePage() {
  return (
    <PageLayout title="<TItle />">
      <Divider orientation="left">Title</Divider>
      <Section className="flex flex-row flex-wrap gap-4 pt-2">
        <Card title={"h1"} type="inner">
          <div className="flex flex-col">
            <Title type="h1-normal">h1-normal</Title>
            <Title type="h1-regular">h1-regular</Title>
            <Title type="h1-semibold">h1-semibold</Title>
            <Title type="h1-bold">h1-bold</Title>
          </div>
        </Card>
        <Card title={"h2"} type="inner">
          <div className="flex flex-col">
            <Title type="h2-normal">h2-normal</Title>
            <Title type="h2-regular">h2-regular</Title>
            <Title type="h2-semibold">h2-semibold</Title>
            <Title type="h2-bold">h2-bold</Title>
          </div>
        </Card>
        <Card title={"h3"} type="inner">
          <div className="flex flex-col">
            <Title type="h3-normal">h3-normal</Title>
            <Title type="h3-regular">h3-regular</Title>
            <Title type="h3-semibold">h3-semibold</Title>
            <Title type="h3-bold">h3-bold</Title>
          </div>
        </Card>
        <Card title={"h4"} type="inner">
          <div className="flex flex-col">
            <Title type="h4-normal">h4-normal</Title>
            <Title type="h4-regular">h4-regular</Title>
            <Title type="h4-semibold">h4-semibold</Title>
            <Title type="h4-bold">h4-bold</Title>
          </div>
        </Card>
        <Card title={"h5"} type="inner">
          <div className="flex flex-col">
            <Title type="h5-normal">h5-normal</Title>
            <Title type="h5-regular">h5-regular</Title>
            <Title type="h5-semibold">h5-semibold</Title>
            <Title type="h5-bold">h5-bold</Title>
          </div>
        </Card>
        <Card title={"h6"} type="inner">
          <div className="flex flex-col">
            <Title type="h6-normal">h6-normal</Title>
            <Title type="h6-regular">h6-regular</Title>
            <Title type="h6-semibold">h6-semibold</Title>
            <Title type="h6-bold">h6-bold</Title>
          </div>
        </Card>
      </Section>
    </PageLayout>
  );
}
