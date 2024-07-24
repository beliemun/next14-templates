import { Divider, Tag } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";
import { colorList } from "@/styles";
import { SyncOutlined } from "@ant-design/icons";

export default function () {
  return (
    <PageLayout title="<Tag />">
      {colorList.map((color, index) => (
        <div key={index}>
          <Divider orientation="left">{color.toUpperCase()}</Divider>
          <div className="px-8 space-x-2 pb-6">
            <Tag tagColor={color} tagStyle="outline">
              outline sm
            </Tag>
            <Tag tagColor={color} tagStyle="outline" tagSize="sm" icon={<SyncOutlined spin />}>
              outline sm with icon
            </Tag>
            <Tag tagColor={color} tagStyle="soft">
              soft sm
            </Tag>
            <Tag tagColor={color} tagStyle="solid">
              solid sm
            </Tag>
            <Tag tagColor={color} tagStyle="outline" tagSize="default">
              outline default
            </Tag>
            <Tag tagColor={color} tagStyle="outline" tagSize="default" icon={<SyncOutlined spin />}>
              outline default with icon
            </Tag>
            <Tag tagColor={color} tagStyle="soft" tagSize="default">
              soft default
            </Tag>
            <Tag tagColor={color} tagStyle="solid" tagSize="default">
              solid default
            </Tag>
          </div>
        </div>
      ))}
    </PageLayout>
  );
}
