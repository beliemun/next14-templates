import { Divider, Space, Tag, Text } from "@/components/atoms";
import { URL } from "@/lib/constants";
import Image from "next/image";

export const Boostree = () => {
  return (
    <div className="max-w-6xl w-full">
      <header className="flex flex-col items-start flex-wrap gap-3">
        <Text color="description" type="sm-regular">
          2024.02~2024.04(3개월)
        </Text>
        <div className="flex flex-col xs:flex-row items-center">
          <Text type="lg-semibold">(주)부스트리파트너스</Text>
          <Divider type="vertical" className="opacity-0 xs:opacity-100" />
          <Tag tagColor="slate" className="self-start">
            TL(Tech Leader)
          </Tag>
        </div>
      </header>
      <div className="hidden xs:flex flex-row mx-4 mt-3 mb-12">
        <Image
          alt="app-icon"
          src={`${URL.CF_IMAGE}/${process.env.CF_ACCOUNT_HASH}/775b25ed-a460-409a-c8a7-e07243345500/avatar`}
          width={60}
          height={60}
          className="self-start shrink-0 rounded-lg border"
        />
        <div className="flex flex-col items-start pl-4 gap-2 leading-5">
          <Text type="base-semibold">BOOSTREE</Text>
          <Text>피부과 병원의 오퍼레이팅 사이드와 마케팅 사이드의 자동화를 위한 SaaS 개발</Text>
          <div className="mt-2">
            <div className="border border-dashed rounded-lg p-4">
              <Space direction="vertical">
                <Tag tagStyle="soft">주요 업무</Tag>
                <Text>• 피부과 병원용 CRM 개발 중 마케팅 자동화 사이드 개발 총괄</Text>
                <Text>
                  • 병원이 사용하는 웹과 서비스 운용에 필요한 BOS(Back-office service) 개발
                </Text>
                <div className="hidden md:flex flex-col">
                  <Tag tagStyle="soft" className="mt-4 hidden sm:flex self-start">
                    적용 기술
                  </Tag>
                  <Space direction="horizontal" className="flex flex-wrap mt-2">
                    <Tag tagColor="primary">Type Script</Tag>
                    <Tag tagColor="primary">Python</Tag>
                    <Tag tagColor="blue">Next.js</Tag>
                    <Tag tagColor="blue">React</Tag>
                    <Tag tagColor="blue">Tailwind</Tag>
                    <Tag tagColor="blue">Styled Component</Tag>
                    <Tag tagColor="blue">Ant Design</Tag>
                    <Tag tagColor="blue">Framer Motion</Tag>
                  </Space>
                </div>
              </Space>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
