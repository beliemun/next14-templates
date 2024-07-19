import { Divider, Section } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";

export default function () {
  return (
    <PageLayout title="<Message />">
      <Divider orientation="left">Title</Divider>
      <Section className="flex flex-col gap-4 pt-2"></Section>
    </PageLayout>
  );
}
