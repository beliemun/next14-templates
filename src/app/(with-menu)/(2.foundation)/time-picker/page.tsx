import { PageLayout } from "@/components/organisms";
import { Metadata } from "next";
import { ClientComponents } from "./_components";

export const metadata: Metadata = {
  title: "Time Picker",
};

export default function TimePickerPage() {
  return (
    <PageLayout title="<TimePicker />">
      <ClientComponents />
    </PageLayout>
  );
}
