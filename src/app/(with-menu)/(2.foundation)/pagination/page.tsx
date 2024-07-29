import { Divider, Pagination, Section } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";

export default function PaginationPage() {
  return (
    <PageLayout title="<Pagination />">
      <Divider orientation="left">Basic Pagination</Divider>
      <Section className="pt-2">
        <Pagination defaultCurrent={1} total={50} />
      </Section>
      <Divider orientation="left">More Pages</Divider>
      <Section className="pt-2">
        <Pagination defaultCurrent={6} total={500} />
      </Section>
      <Divider orientation="left">QuickJumper</Divider>
      <Section className="pt-2">
        <Pagination defaultCurrent={6} total={500} showQuickJumper />
      </Section>
      <Divider orientation="left">Disabled</Divider>
      <Section className="pt-2">
        <Pagination defaultCurrent={6} total={500} disabled />
      </Section>
    </PageLayout>
  );
}
