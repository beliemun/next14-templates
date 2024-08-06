import { Divider, Space, Tag, Text } from "@/components/atoms";
import { URL } from "@/lib/constants";
import Image from "next/image";

export const Buddymon = () => {
  return (
    <div className="max-w-6xl w-full">
      <header>
        <Text type="lg-semibold">
          (주)J2YSOFT
          <Divider type="vertical" />
          <Tag tagColor="slate">사원</Tag>
        </Text>
        <Divider type="vertical" />
        <Text color="description">2013.01 ~ 2013.11</Text>
      </header>
      <div className="flex flex-row mx-4 mt-8 mb-12">
        <div className="self-start w-[60px] h-[60px] shrink-0 rounded-lg border bg-slate-100" />
        <div className="flex flex-col items-start pl-4 gap-2 leading-5">
          <Text type="base-semibold">버디몬</Text>
          <Text>육성 시뮬레이션 모바일 게임</Text>
          <div className="mt-2">
            <div className="border border-dashed rounded-lg p-4">
              <Space direction="vertical">
                <Tag tagStyle="soft">주요 업무</Tag>
                <Text>• 모바일 게임 콘텐츠 기획</Text>
                <Text>• 전투 시뮬레이터 개발(Unity 3D)</Text>
                <Space direction="horizontal" wrap className="max-w-3xl mt-2">
                  <Tag tagColor="blue">Unity 3D</Tag>
                </Space>
              </Space>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
