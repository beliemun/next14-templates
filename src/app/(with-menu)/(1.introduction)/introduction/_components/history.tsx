import { Section, Timeline } from "@/components/atoms";
import { ClockCircleOutlined } from "@ant-design/icons";

export const History = () => {
  return (
    <Section className="mt-2">
      <Timeline
        items={[
          {
            children: "Create a services site 2015-09-01",
          },
          {
            children: "Solve initial network problems 2015-09-01",
          },
          {
            dot: <ClockCircleOutlined className="timeline-clock-icon" />,
            color: "red",
            children: "Technical testing 2015-09-01",
          },
          {
            children: "Network problems being solved 2015-09-01",
          },
        ]}
      />
    </Section>
  );
};
