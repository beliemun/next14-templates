import { Divider, Space, Tag, Text } from "@/components/atoms";
import { URL } from "@/lib/constants";
import Image from "next/image";

export const Linkdens = () => {
  return (
    <div className="max-w-6xl w-full">
      <header className="flex flex-col xs:flex-row items-start xs:items-center flex-wrap">
        <Text type="lg-semibold">(주)아이오바이오</Text>
        <Divider type="vertical" className="opacity-0 xs:opacity-100" />
        <Tag tagColor="slate">프론트엔드 개발팀 팀장</Tag>
        <Divider type="vertical" className="opacity-0 xs:opacity-100" />
        <Text color="description">2023.02~2024.01(1년)</Text>
      </header>
      <div className="hidden xs:flex flex-row mx-4 mt-8 mb-12">
        <Image
          alt="app-icon"
          src={`${URL.CF_IMAGE}/${process.env.CF_ACCOUNT_HASH}/de494b15-f5bb-450f-c067-cedd3905ee00/avatar`}
          width={60}
          height={60}
          className="self-start shrink-0 rounded-lg border"
        />
        <div className="flex flex-col items-start pl-4 gap-2 leading-5">
          <Text type="base-semibold">LINKDENS</Text>
          <Text>정량광형광기를 연동한 이미지 시스템을 제공하는 치과 병원용 PMS</Text>
          <div className="mt-2">
            <div className="border border-dashed rounded-lg p-4">
              <Space direction="vertical">
                <Tag tagStyle="soft">주요 업무</Tag>
                <Text>• 치과 병원용 PMS 웹, 환자용 모바일 앱 개발.</Text>
                <Text>
                  • 자체 개발 정량광 형광기를 연동한 치아우식증 검사용 이미징 소프트웨어 개발.
                </Text>
                <Text>
                  • 미국 Dallas에서 현지 치과 병원들을 대상으로 PMS 및 모바일 앱 시현 및 테스트.
                </Text>
                <Tag tagStyle="soft" className="mt-4">
                  적용 기술
                </Tag>
                <Space direction="horizontal" wrap className="max-w-3xl mt-2">
                  <Tag tagColor="primary">Type Script</Tag>
                  <Tag tagColor="blue">Next.js</Tag>
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
