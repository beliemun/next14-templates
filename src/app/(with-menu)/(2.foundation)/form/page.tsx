import { Divider, Section } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";

export default function FormPage() {
  return (
    <PageLayout title="<Form />">
      <Divider orientation="left">Basic Form</Divider>
      <Section className="flex flex-col flex-wrap gap-4 pt-2"></Section>
    </PageLayout>
  );
}
