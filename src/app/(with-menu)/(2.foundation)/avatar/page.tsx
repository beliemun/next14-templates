import { Avatar, Card, Divider, Section, Space } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";

const URL = "https://cdn.pixabay.com/photo/2023/09/26/17/32/woman-8277925_1280.jpg";

export default function () {
  return (
    <PageLayout title="<Avatar />">
      <Divider orientation="left">Basic Avatar</Divider>
      <Section className="flex flex-row flex-wrap gap-4 pt-2">
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
                <Avatar avatarUrl={URL} avatarSize="xs" />,
                <Avatar avatarUrl={URL} avatarSize="xs" />,
                <Avatar avatarUrl={URL} avatarSize="xs" />,
              ]}
            />
            <Avatar.Group
              list={[
                <Avatar avatarUrl={URL} />,
                <Avatar avatarUrl={URL} />,
                <Avatar avatarUrl={URL} />,
              ]}
            />
            <Avatar.Group
              list={[
                <Avatar avatarUrl={URL} avatarSize="default" />,
                <Avatar avatarUrl={URL} avatarSize="default" />,
                <Avatar avatarUrl={URL} avatarSize="default" />,
              ]}
            />
          </Space>
        </Card>
      </Section>
    </PageLayout>
  );
}
