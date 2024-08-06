"use client";

import { Divider, Space, Tag, Text } from "@/components/atoms";
import { URL } from "@/lib/constants";
import { theme } from "antd";
import Image from "next/image";

export const Linkdens = () => {
  const {
    token: { colorBorder },
  } = theme.useToken();
  return (
    <div className="max-w-6xl w-full">
      <header>
        <Text type="lg-semibold">
          (주)아이오바이오
          <Divider type="vertical" />
          프론트엔드 개발팀장
        </Text>
        <Divider type="vertical" />
        <Text color="description">2023.02.01 ~ 2024.01.31</Text>
      </header>
      <div className="flex flex-row mx-4 mt-8 mb-12">
        <Image
          alt="app-icon"
          src={`${URL.CF_IMAGE}/${process.env.CF_ACCOUNT_HASH}/de494b15-f5bb-450f-c067-cedd3905ee00/avatar`}
          width={60}
          height={60}
          className="self-start shrink-0 rounded-lg border"
        />
        <div className="flex flex-col items-start pl-4 gap-2 leading-5">
          <Text type="base-semibold">LINKDENS</Text>
          <Text>정량광형광기 연동한 이미지 시스템을 제공하는 치과 병원용 PMS</Text>
          <div className="mt-2">
            <div
              style={{ borderColor: colorBorder }}
              className="border border-dashed rounded-lg p-4"
            >
              <Space direction="vertical">
                <Tag tagStyle="soft">주요 업무</Tag>
                <Text>• 프론트엔드 개발팀 테크 리드</Text>
                <Text>• 정량광형광기를 연동한 치아우식증을 검사하는 이미징 소프트웨어 개발</Text>
                <Text>• 프로토타입 개발 및 미국 Dallas 현지 시현</Text>
                <Text>• OpenDental 연동, PMS 개발 및 미국 Dallas 현지 설치 및 운용 테스트</Text>
                <Space direction="horizontal" wrap className="max-w-3xl mt-2">
                  <Tag tagColor="primary">Type Script</Tag>
                  <Tag tagColor="blue">Next.js</Tag>
                  <Tag tagColor="blue">React</Tag>
                  <Tag tagColor="blue">Expo</Tag>
                  <Tag tagColor="blue">Apollo Client</Tag>
                  <Tag tagColor="blue">Tailwind</Tag>
                  <Tag tagColor="blue">Styled Component</Tag>
                  <Tag tagColor="blue">Ant Design</Tag>
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
