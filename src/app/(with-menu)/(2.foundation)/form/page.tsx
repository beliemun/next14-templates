import { Section } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { ClientComponents } from "./_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Form",
};

export default function FormPage() {
  return (
    <PageLayout title="<Form />">
      <Section>
        <ClientComponents />
      </Section>
    </PageLayout>
  );
}
