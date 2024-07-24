import { Divider, Section } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";

export default function () {
  return (
    <PageLayout title="<Skeleton />">
      <Divider orientation="left">Basic Skeleton</Divider>
      <Section className="flex flex-col flex-wrap gap-4 pt-2"></Section>
    </PageLayout>
  );
}
