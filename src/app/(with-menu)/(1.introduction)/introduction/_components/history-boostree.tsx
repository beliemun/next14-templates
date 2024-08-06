"use client";

import { Divider, Space, Tag, Text } from "@/components/atoms";
import { URL } from "@/lib/constants";
import { theme } from "antd";
import Image from "next/image";

export const Boostree = () => {
  const {
    token: { colorBorder },
  } = theme.useToken();
  return (
    <div className="max-w-6xl w-full">
      <header>
        <Text type="lg-semibold">
          (주)부스트리파트너스
          <Divider type="vertical" />
          TL<Text>(Tech Leader)</Text>
        </Text>
        <Divider type="vertical" />
        <Text color="description">2024.02.01 ~ 2024.04.30</Text>
      </header>
      <div className="flex flex-row mx-4 mt-8 mb-12">
        <Image
          alt="app-icon"
          src={`${URL.CF_IMAGE}/${process.env.CF_ACCOUNT_HASH}/775b25ed-a460-409a-c8a7-e07243345500/avatar`}
          width={60}
          height={60}
          className="self-start shrink-0 rounded-lg border"
        />
        <div className="flex flex-col items-start pl-4 gap-2 leading-5">
          <Text type="base-semibold">BOOSTREE</Text>
          <Text>피부과 병원의 오퍼레이팅 사이드와 마케팅 사이드의 자동화를 위한 SaaS </Text>
          <div className="mt-2">
            <div
              style={{ borderColor: colorBorder }}
              className="border border-dashed rounded-lg p-4"
            >
              <Space direction="vertical">
                <Tag tagStyle="soft">주요 업무</Tag>
                <Text>• 블로그 마케팅 자동화 시스템 개발 총괄</Text>
                <Text>• 운영 백오피스 개발</Text>
                <Space direction="horizontal" className="mt-2">
                  <Tag tagColor="primary">Type Script</Tag>
                  <Tag tagColor="primary">Python</Tag>
                  <Tag tagColor="blue">Next.js</Tag>
                  <Tag tagColor="blue">React</Tag>
                  <Tag tagColor="blue">Tailwind</Tag>
                  <Tag tagColor="blue">Styled Component</Tag>
                  <Tag tagColor="blue">Ant Design</Tag>
                  <Tag tagColor="blue">Framer Motion</Tag>
                </Space>
              </Space>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
