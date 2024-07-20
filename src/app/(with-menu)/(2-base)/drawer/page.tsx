import { Divider, Section } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { BaseDrawer, InnerDrawer } from "./_components";

export default function () {
  return (
    <PageLayout title="<Drawer />">
      <Divider orientation="left">Base Drawer</Divider>
      <Section className="flex flex-col gap-4 pt-2">
        <BaseDrawer />
      </Section>
      <Divider orientation="left">Inner Drawer</Divider>
      <Section className="flex flex-col gap-4 pt-2">
        <InnerDrawer />
      </Section>
    </PageLayout>
  );
}
