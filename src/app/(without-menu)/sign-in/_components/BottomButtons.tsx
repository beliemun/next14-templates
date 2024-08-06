import { Button, Text } from "@/components/atoms";
import { useDarkModeStore } from "@/stores/useDarkModeStore";
import { colors } from "@/lib/colors";
import { HomeOutlined, MoonFilled, MoonOutlined } from "@ant-design/icons";
import { theme } from "antd";
import { useRouter } from "next/navigation";

export const BottomButtons = () => {
  const router = useRouter();
  const { isDarkMode, setDarkMode } = useDarkModeStore();
  const {
    token: { sizeMD },
  } = theme.useToken();
  const handleGobackHome = () => {
    router.push("/");
  };
  const handleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="col-center">
      <div className="row-center mt-4 mb-2 gap-2">
        <Button
          buttonSize="default"
          buttonColor="gray"
          buttonStyle="soft"
          tooltipTitle={"홈으로"}
          onClick={handleGobackHome}
        >
          <HomeOutlined style={{ fontSize: sizeMD }} />
        </Button>
        <Button
          buttonSize="default"
          buttonColor="gray"
          buttonStyle="soft"
          tooltipTitle={isDarkMode ? "일반모드" : "다크모드"}
          onClick={handleDarkMode}
        >
          {isDarkMode ? (
            <MoonFilled style={{ fontSize: sizeMD, color: colors.primary[500] }} />
          ) : (
            <MoonOutlined style={{ fontSize: sizeMD }} />
          )}
        </Button>
      </div>
      <Text className="text-center mt-2" type="xs-regular" color="gray">
        실제 인증을 위해 구현된 페이지입니다.
      </Text>
      <Text className="text-center mt-2" type="xs-regular" color="gray">
        로그인 여부와 상관없이 전체 페이지를 볼 수 있습니다.
      </Text>
    </div>
  );
};
