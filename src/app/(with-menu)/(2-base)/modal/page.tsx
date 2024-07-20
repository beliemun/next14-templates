import { Divider, Section } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { BasicModal, MultiButtonModal } from "./_components";

export default function () {
  return (
    <PageLayout title="<Modal />">
      <Divider orientation="left">Basic Modal</Divider>
      <Section className="flex flex-col gap-4 pt-2">
        <BasicModal />
      </Section>
      <Divider orientation="left">Multi Button Modal</Divider>
      <Section className="flex flex-col gap-4 pt-2">
        <MultiButtonModal />
      </Section>
    </PageLayout>
  );
}
