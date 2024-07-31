import { Button } from "@/components/atoms";
import { useDarkModeStore } from "@/stores/useDarkModeStore";
import { colors } from "@/styles";
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
    <div className="row-center mt-4">
      <Button
        buttonSize="default"
        buttonColor="gray"
        buttonStyle="ghost"
        tooltipTitle={"메인화면"}
        onClick={handleGobackHome}
      >
        <HomeOutlined style={{ fontSize: sizeMD }} />
      </Button>
      <Button
        buttonSize="default"
        buttonColor="gray"
        buttonStyle="ghost"
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
  );
};
