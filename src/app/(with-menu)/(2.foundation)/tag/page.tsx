import { Divider, Space, Tag } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { colorList } from "@/lib/colors";
import { SyncOutlined } from "@ant-design/icons";

export default function TagPage() {
  return (
    <PageLayout title="<Tag />">
      {colorList.map((color, index) => (
        <div key={index}>
          <Divider orientation="left">{color.toUpperCase()}</Divider>
          <Space direction="vertical" gap={8} className="px-8 pb-4">
            <Space direction="horizontal" gap={8}>
              <Tag tagColor={color} tagStyle="outline" tagSize="sm">
                outline sm
              </Tag>
              <Tag tagColor={color} tagStyle="outline" tagSize="sm" icon={<SyncOutlined spin />}>
                outline sm with icon
              </Tag>
              <Tag tagColor={color} tagStyle="soft" tagSize="sm">
                soft sm
              </Tag>
              <Tag tagColor={color} tagStyle="solid" tagSize="sm">
                solid sm
              </Tag>
            </Space>
            <Space direction="horizontal" gap={4}>
              <Tag tagColor={color} tagStyle="outline" tagSize="default">
                outline default
              </Tag>
              <Tag
                tagColor={color}
                tagStyle="outline"
                tagSize="default"
                icon={<SyncOutlined spin />}
              >
                outline default with icon
              </Tag>
              <Tag tagColor={color} tagStyle="soft" tagSize="default">
                soft default
              </Tag>
              <Tag tagColor={color} tagStyle="solid" tagSize="default">
                solid default
              </Tag>
            </Space>
          </Space>
        </div>
      ))}
    </PageLayout>
  );
}
