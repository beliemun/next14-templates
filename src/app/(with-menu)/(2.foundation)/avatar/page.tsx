import { Avatar, Card, Divider, Section, Space } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { Metadata } from "next";

const URL = "https://cdn.pixabay.com/photo/2023/09/26/17/32/woman-8277925_1280.jpg";

export const metadata: Metadata = {
  title: "Avatar",
};

export default function AvatarPage() {
  return (
    <PageLayout title="<Avatar />">
      <Divider orientation="left">Basic Avatar</Divider>
      <Section className="pt-2">
        <Card title="Base">
          <Space direction="horizontal" size={16}>
            <Avatar avatarSize="xs" />
            <Avatar avatarSize="sm" />
            <Avatar avatarSize="default" />
            <Avatar avatarSize="large" />
          </Space>
        </Card>
        <Card title="Rounded">
          <Space direction="horizontal" size={16}>
            <Avatar avatarSize="xs" avatarRound="rounded" />
            <Avatar avatarSize="sm" avatarRound="rounded" />
            <Avatar avatarSize="default" avatarRound="rounded" />
            <Avatar avatarSize="large" avatarRound="rounded" />
          </Space>
        </Card>
        <Card title="Image">
          <Space direction="horizontal" size={16}>
            <Avatar avatarSize="xs" avatarUrl={URL} />
            <Avatar avatarSize="sm" avatarUrl={URL} />
            <Avatar avatarSize="default" avatarUrl={URL} />
            <Avatar avatarSize="large" avatarUrl={URL} />
          </Space>
        </Card>
        <Card title="Base & Badge">
          <Space direction="horizontal" size={16}>
            <Avatar avatarSize="xs" avatarUrl={URL} showBadge />
            <Avatar avatarSize="sm" avatarUrl={URL} showBadge />
            <Avatar avatarSize="default" avatarUrl={URL} showBadge />
            <Avatar avatarSize="large" avatarUrl={URL} showBadge />
          </Space>
        </Card>
        <Card title="Rounded & Badge">
          <Space direction="horizontal" size={16}>
            <Avatar avatarSize="xs" avatarUrl={URL} avatarRound="rounded" showBadge />
            <Avatar avatarSize="sm" avatarUrl={URL} avatarRound="rounded" showBadge />
            <Avatar avatarSize="default" avatarUrl={URL} avatarRound="rounded" showBadge />
            <Avatar avatarSize="large" avatarUrl={URL} avatarRound="rounded" showBadge />
          </Space>
        </Card>
        <Card title="Avatar Group">
          <Space direction="horizontal" size={16}>
            <Avatar.Group
              list={[
                <Avatar avatarUrl={URL} avatarSize="xs" key={1} />,
                <Avatar avatarUrl={URL} avatarSize="xs" key={2} />,
                <Avatar avatarUrl={URL} avatarSize="xs" key={3} />,
              ]}
            />
            <Avatar.Group
              list={[
                <Avatar avatarUrl={URL} key={1} />,
                <Avatar avatarUrl={URL} key={2} />,
                <Avatar avatarUrl={URL} key={3} />,
              ]}
            />
            <Avatar.Group
              list={[
                <Avatar avatarUrl={URL} avatarSize="default" key={1} />,
                <Avatar avatarUrl={URL} avatarSize="default" key={2} />,
                <Avatar avatarUrl={URL} avatarSize="default" key={3} />,
              ]}
            />
          </Space>
        </Card>
      </Section>
    </PageLayout>
  );
}
