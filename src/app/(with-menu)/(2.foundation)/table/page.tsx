import { Divider, Section } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import {
  BasicTableComponent,
  FilterTableComponent,
  RowSelectionTableComponent,
} from "./_components";
export default function TablePage() {
  return (
    <PageLayout title="<Table />">
      <Divider orientation="left">Basic Table</Divider>
      <Section className="pt-2">
        <BasicTableComponent />
      </Section>
      <Divider orientation="left">Row Selection Table</Divider>
      <Section className="flex-col pt-2">
        <RowSelectionTableComponent />
      </Section>
      <Divider orientation="left">Filtered Table</Divider>
      <Section className="pt-2">
        <FilterTableComponent />
      </Section>
    </PageLayout>
  );
}
