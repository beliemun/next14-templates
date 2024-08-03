import { PageLayout } from "@/components/organisms";
import { Metadata } from "next";
import { ClientComponents } from "./_components";

export const metadata: Metadata = {
  title: "Date Picker",
};

export default function DatePickerPage() {
  return (
    <PageLayout title="<DatePicker />">
      <ClientComponents />
    </PageLayout>
  );
}
