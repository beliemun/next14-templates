import { Input, Section, Select } from "@/components/atoms";
import { Form, FormItem } from "@/components/molecules";
import { PageLayout } from "@/components/organisms";

type SignInFeildType = {
  email?: string;
  password?: string;
  remember?: string;
};

export default function FormPage() {
  return (
    <PageLayout title="<Form />">
      <Section className="flex flex-col flex-wrap gap-4">
        <Form title="Here is form title" description="Here is a form description">
          <FormItem label="Label" tooltipTitle="Please write down here" required>
            <Input placeholder="placeholder" />
          </FormItem>
          <FormItem label="Label" tooltipTitle="Please write down here" required>
            <Input placeholder="placeholder" addonBefore="https://" addonAfter=".com" />
          </FormItem>
          <FormItem label="Label" tooltipTitle="Please write down here" required>
            <Select style={{ backgroundColor: "red" }} />
          </FormItem>
        </Form>
      </Section>
    </PageLayout>
  );
}
