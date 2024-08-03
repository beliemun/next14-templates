import { Divider, Section } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { BasicDrawer, InnerDrawer } from "./_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drawer",
};

export default function DrawerPage() {
  return (
    <PageLayout title="<Drawer />">
      <Divider orientation="left">Basic Drawer</Divider>
      <Section className="pt-2">
        <BasicDrawer />
      </Section>
      <Divider orientation="left">Inner Drawer</Divider>
      <Section className="pt-2">
        <InnerDrawer />
      </Section>
    </PageLayout>
  );
}
