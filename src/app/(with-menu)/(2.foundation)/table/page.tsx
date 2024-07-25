import { Divider, Section, Table } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { columns, dataSource } from "./data";

export default function TablePage() {
  return (
    <PageLayout title="<Table />">
      <Divider orientation="left">Basic Table</Divider>
      <Section className="flex flex-col flex-wrap gap-4 pt-2">
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ position: ["bottomCenter"] }}
        />
      </Section>
    </PageLayout>
  );
}
