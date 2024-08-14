import { Input } from "@/components/atoms";
import { GithubOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";

export const Contact = () => {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      <Input style={{ width: 180 }} addonBefore={<UserOutlined />} value={"1986년 (만 38세)"} />
      <Input style={{ width: 180 }} addonBefore={<PhoneOutlined />} value={"010 9037 4044"} />
      <Input style={{ width: 220 }} addonBefore={<MailOutlined />} value={"burngrit@icloud.com"} />
      <Input
        style={{ width: 220 }}
        addonBefore={<GithubOutlined />}
        value={"github.com/beliemun"}
      />
    </div>
  );
};
