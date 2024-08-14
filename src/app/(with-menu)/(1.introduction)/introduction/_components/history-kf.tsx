import { Divider, Space, Tag, Text } from "@/components/atoms";
import { URL } from "@/lib/constants";
import Image from "next/image";
import LineChart from "./line-chart";

export const Kf = () => {
  return (
    <div className="max-w-6xl w-full">
      <header className="flex flex-col xs:flex-row items-start xs:items-center flex-wrap">
        <Text type="lg-semibold">(주)한국에서놀자</Text>
        <Divider type="vertical" className="opacity-0 xs:opacity-100" />
        <Tag tagColor="slate">대표이사</Tag>
        <Divider type="vertical" className="opacity-0 xs:opacity-100" />
        <Text color="description">2013.12~2020.02(7년 2개월)</Text>
      </header>
      {/* 친구 */}
      <div className="hidden xs:flex flex-row mx-4 mt-8 mb-12">
        <Image
          alt="app-icon"
          src={`${URL.CF_IMAGE}/${process.env.CF_ACCOUNT_HASH}/9ff39e50-df49-4108-5cf8-01849d02c800/avatar`}
          width={60}
          height={60}
          className="self-start shrink-0 rounded-lg border"
        />
        <div className="flex flex-col items-start pl-4 gap-2 leading-5">
          <Text type="base-semibold">Chingu(친구)</Text>
          <Text>글로벌 소셜 네트워크 모바일 앱, 30만+ 다운로드</Text>
          <Image
            alt="app-icon"
            src={`${URL.CF_IMAGE}/${process.env.CF_ACCOUNT_HASH}/731d2a95-2f56-4313-0f7d-7f74ffeccb00/public`}
            width={802}
            height={512}
            className="hidden md:flex self-start shrink-0 rounded-lg my-2"
          />
          <div className="mt-2">
            <div className="border border-dashed rounded-lg p-4">
              <Space direction="vertical">
                <Tag tagStyle="soft">주요 업무</Tag>
                <Text>• 프로젝트 총괄, 기획 및 UX/UI 디자인, 프론트앤드 개발.</Text>
                <Tag tagStyle="soft" className="mt-4">
                  적용 기술
                </Tag>
                <Space direction="horizontal" wrap className="max-w-3xl mt-2">
                  <Tag tagColor="primary">Type Script</Tag>
                  <Tag tagColor="blue">React Native</Tag>
                  <Tag tagColor="blue">Styled Component</Tag>
                </Space>
              </Space>
            </div>
          </div>
        </div>
      </div>
      {/* 한국 친구 */}
      <div className="hidden xs:flex flex-row mx-4 mt-8 mb-12">
        <Image
          alt="app-icon"
          src={`${URL.CF_IMAGE}/${process.env.CF_ACCOUNT_HASH}/a44b1aa8-9ca1-4685-c573-f4567cb44e00/avatar`}
          width={60}
          height={60}
          className="self-start shrink-0 rounded-lg border"
        />
        <div className="flex flex-col items-start pl-4 gap-2 leading-5">
          <Text type="base-semibold">Korean Friend(한국 친구)</Text>
          <Text>글로벌 소셜 네트워크 모바일 앱, 100만+ 다운로드</Text>
          <Image
            alt="app-icon"
            src={`${URL.CF_IMAGE}/${process.env.CF_ACCOUNT_HASH}/e39bdfc3-847b-4434-97ab-1d15d50b5c00/public`}
            width={802}
            height={512}
            className="hidden md:flex self-start shrink-0 rounded-lg my-2"
          />
          <div className="mt-2">
            <div className="border border-dashed rounded-lg p-4">
              <Space direction="vertical">
                <Tag tagStyle="soft">주요 업무</Tag>
                <Text>• 프로젝트 총괄, 기획 및 UX/UI 디자인, 프론트앤드 개발.</Text>
                <Tag tagStyle="soft" className="mt-4">
                  적용 기술
                </Tag>
                <Space direction="horizontal" wrap className="max-w-3xl mt-2">
                  <Tag tagColor="primary">Type Script</Tag>
                  <Tag tagColor="blue">React Native</Tag>
                  <Tag tagColor="blue">Styled Component</Tag>
                </Space>
              </Space>
            </div>
          </div>
        </div>
      </div>
      {/* 마카롱 */}
      <div className="hidden xs:flex flex-row mx-4 mt-8 mb-12">
        <Image
          alt="app-icon"
          src={`${URL.CF_IMAGE}/${process.env.CF_ACCOUNT_HASH}/89901950-2cd0-4960-011c-eb062fe1c500/avatar`}
          width={60}
          height={60}
          className="self-start shrink-0 rounded-lg border"
        />
        <div className="flex flex-col items-start pl-4 gap-2 leading-5">
          <Text type="base-semibold">마카롱</Text>
          <Text>모바일 데이트 앱, 100만+ 다운로드</Text>
          <Image
            alt="app-icon"
            src={`${URL.CF_IMAGE}/${process.env.CF_ACCOUNT_HASH}/a453c52a-0df4-40ed-cc17-3a5b99b0e700/public`}
            width={802}
            height={512}
            className="hidden md:flex self-start shrink-0 rounded-lg my-2"
          />
          <div className="mt-2">
            <div className="border border-dashed rounded-lg p-4">
              <Space direction="vertical">
                <Tag tagStyle="soft">주요 업무</Tag>
                <Text>• 프로젝트 총괄, 기획 및 UX/UI 디자인, 프론트앤드 개발.</Text>
                <Text>• 사용자 패턴 분석, 비지니스 모델 설계, 노출 최적화, 광고 마케팅.</Text>
                <Text>
                  • 월 매출 30만원에서 1억 2천만원까지 성장(창업 첫달부터 2년간 실제 인앱수익 및
                  타사광고 매출 자료).
                </Text>
                <Text>
                  • 대표 서비스 3개는 100만 이상 다운로드, 외부투자 없이 7년 동안 총 매출 약 30억원.
                </Text>
                <LineChart />
                <Tag tagStyle="soft" className="mt-4">
                  적용 기술
                </Tag>
                <Space direction="horizontal" wrap className="max-w-3xl mt-2">
                  <Tag tagColor="blue">Unity 3D</Tag>
                </Space>
              </Space>
            </div>
          </div>
        </div>
      </div>
      {/* 관심있어요 */}
      <div className="hidden xs:flex flex-row mx-4 mt-8 mb-12">
        <Image
          alt="app-icon"
          src={`${URL.CF_IMAGE}/${process.env.CF_ACCOUNT_HASH}/0a7e6ab8-349e-46de-8ebd-b053ca69e500/avatar`}
          width={60}
          height={60}
          className="self-start shrink-0 rounded-lg border"
        />
        <div className="flex flex-col items-start pl-4 gap-2 leading-5">
          <Text type="base-semibold">관심있어요</Text>
          <Text>모바일 데이트 앱, 100만+ 다운로드</Text>
          <Image
            alt="app-icon"
            src={`${URL.CF_IMAGE}/${process.env.CF_ACCOUNT_HASH}/ceccd410-08fd-4b59-1cb5-ce80b438ef00/public`}
            width={802}
            height={512}
            className="hidden md:flex self-start shrink-0 rounded-lg my-2"
          />
          <div className="mt-2">
            <div className="border border-dashed rounded-lg p-4">
              <Space direction="vertical">
                <Tag tagStyle="soft">주요 업무</Tag>
                <Text>• 프로젝트 총괄, 기획 및 UX/UI 디자인, 프론트앤드 개발.</Text>
                <Text>• 사용자 패턴 분석, 비지니스 모델 설계, 노출 최적화, 광고 마케팅.</Text>
                <Tag tagStyle="soft" className="mt-4">
                  적용 기술
                </Tag>
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
