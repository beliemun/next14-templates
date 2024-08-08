import { Image, Text } from "@/components/atoms";
import { URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const PageTitle = () => {
  return (
    <div className="flex items-center mb-2">
      <div className="inline-block px-2 py-1 bg-primary-500 rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm">
        <Text type="lg-semibold" color="invert">
          완성해내는
        </Text>
      </div>
      <Text type="lg-semibold" className="ml-2">
        개발자, 김진환입니다.
      </Text>
    </div>
  );
};

export const Introduction = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full">
      <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-60 lg:h-60 shrink-0 mb-4 sm:mb-6 lg:mb-0 transition-all">
        <Image
          src={`${URL.CF_IMAGE}/${process.env.CF_ACCOUNT_HASH}/3f3e0116-76e9-4306-411e-7844af5bfb00/public`}
          // style={{ borderRadius: "80px 10px" }}
          className={cn("size-full rounded-full")}
          alt="avatar"
        />
      </div>
      <div className="flex flex-col items-start flex-1 lg:pl-8 gap-3 xl:gap-2">
        <PageTitle />
        <Text>• 안녕하세요. 7년간 기업을 경영했고, 현재는 웹/앱 풀스택 개발자입니다.</Text>
        <Text>
          • 사람과 소통을 좋아해서 데이트 및 커뮤니케이션 관련 앱 개발사를 설립, 7년 동안 대표를
          역임했습니다.
        </Text>
        <Text>
          • 약 20여 개의 모바일 앱 프로젝트를 리드하며 기획부터 UX/UI 디자인, 개발 업무까지
          진행했습니다.
        </Text>
        <Text>
          • 대표 서비스 3개는 100만 이상 다운로드, 외부투자 없이 7년 동안 약 30억원의 매출을
          기록했습니다.
        </Text>
        <Text>
          • 실력의 본질에 대한 갈증으로 퇴사, 풀스택 개발 과정을 독학, 1인 개발로 글로벌 SNS를
          출시했습니다.
        </Text>
        <Text>• 치과 PMS, 피부과 SaaS 등 의료계 플랫폼 개발의 테크 리드를 담당했습니다.</Text>
      </div>
    </div>
  );
};
