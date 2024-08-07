import { Divider, Space, Tag, Text } from "@/components/atoms";
import { URL } from "@/lib/constants";
import Image from "next/image";

export const Kimxy = () => {
  return (
    <div className="max-w-6xl w-full">
      <header>
        <Text type="lg-semibold">
          BURNGRIT
          <Divider type="vertical" />
          <Tag tagColor="slate">개인사업자</Tag>
        </Text>
        <Divider type="vertical" />
        <Text color="description">2022.01 ~ 2023.01</Text>
      </header>
      <div className="flex flex-row mx-4 mt-8 mb-12">
        <Image
          alt="app-icon"
          src={`${URL.CF_IMAGE}/${process.env.CF_ACCOUNT_HASH}/12a88cea-7406-4651-6285-5c1f248e8a00/avatar`}
          width={60}
          height={60}
          className="self-start shrink-0 rounded-lg border"
        />
        <div className="flex flex-col items-start pl-4 gap-2 leading-5">
          <Text type="base-semibold">KIMXY(김씨)</Text>
          <Text>한국을 좋아하는 외국인들을 위한 모바일 SNS, 10만+ 다운로드</Text>
          <Image
            alt="app-icon"
            src={`${URL.CF_IMAGE}/${process.env.CF_ACCOUNT_HASH}/a6d08760-d25f-4015-fd6c-ddc9a7073300/public`}
            width={802}
            height={512}
            className="self-start shrink-0 rounded-lg my-2"
          />
          <div className="mt-2">
            <div className="border border-dashed rounded-lg p-4">
              <Space direction="vertical">
                <Tag tagStyle="soft">주요 업무</Tag>
                <Text>
                  • 1년 3개월 독학 후, 1인 개발(기획, 디자인, 프론트엔드, 백엔드, 배포, 운영)
                </Text>
                <Text>
                  • 디자인(Sketch), 앱(ReactNative, Expo) 관리자(React), 백엔드(Node.js, Prisma),
                  배포(Railway, AWS)
                </Text>
                <Tag tagStyle="soft" className="mt-4">
                  적용 기술
                </Tag>
                <Space direction="horizontal" wrap className="max-w-3xl mt-2">
                  <Tag tagColor="primary">Type Script</Tag>
                  <Tag tagColor="blue">React</Tag>
                  <Tag tagColor="blue">React Native</Tag>
                  <Tag tagColor="blue">Expo</Tag>
                  <Tag tagColor="blue">Apollo Client</Tag>
                  <Tag tagColor="blue">Tailwind</Tag>
                  <Tag tagColor="red">Node.js</Tag>
                  <Tag tagColor="red">Prisma</Tag>
                  <Tag tagColor="red">Apollo Server</Tag>
                  <Tag tagColor="red">GraphQL</Tag>
                </Space>
              </Space>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
