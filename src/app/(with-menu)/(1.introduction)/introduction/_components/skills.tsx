import { Card, Section, Space, Tag, Text } from "@/components/atoms";

export const Skills = () => {
  return (
    <Section className="grid grid-cols-3 pt-2">
      <Card
        title={
          <Text type="base-semibold" color="primary">
            Languages
          </Text>
        }
      >
        <Space wrap>
          <Tag tagColor="primary">Type Script</Tag>
          <Tag tagColor="primary">Java Script(ES6)</Tag>
          <Tag tagColor="primary">Python</Tag>
          <Tag tagColor="primary">C#</Tag>
          <Tag tagColor="primary">HTML</Tag>
        </Space>
      </Card>
      <Card
        title={
          <Text type="base-semibold" color="blue">
            Frontend & Styling
          </Text>
        }
      >
        <Space wrap>
          <Tag tagColor="blue">Next.js</Tag>
          <Tag tagColor="blue">React</Tag>
          <Tag tagColor="blue">React Native</Tag>
          <Tag tagColor="blue">Expo</Tag>
          <Tag tagColor="blue">Apollo Client</Tag>
          <Tag tagColor="blue">Tailwind</Tag>
          <Tag tagColor="blue">Styled Component</Tag>
          <Tag tagColor="blue">Ant Design</Tag>
          <Tag tagColor="blue">Framer Motion</Tag>
        </Space>
      </Card>
      <Card
        title={
          <Text type="base-semibold" color="red">
            Backend & Deploy
          </Text>
        }
      >
        <Space wrap>
          <Tag tagColor="red">Nest.js</Tag>
          <Tag tagColor="red">Node.js</Tag>
          <Tag tagColor="red">Prisma</Tag>
          <Tag tagColor="red">Type ORM</Tag>
          <Tag tagColor="red">Apollo Server</Tag>
          <Tag tagColor="red">AWS</Tag>
          <Tag tagColor="red">Railway</Tag>
          <Tag tagColor="red">GraphQL</Tag>
        </Space>
      </Card>
    </Section>
  );
};
