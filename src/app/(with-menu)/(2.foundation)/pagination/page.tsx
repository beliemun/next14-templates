import { Divider, Section } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";

export default function () {
  return (
    <PageLayout title="<Pagination />">
      <Divider orientation="left">Basic Pagination</Divider>
      <Section className="flex flex-col flex-wrap gap-4 pt-2"></Section>
    </PageLayout>
  );
}
