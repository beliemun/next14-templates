"use client";

import { signInLottie } from "@/assets/lotties";
import { Animate, Button, Input, Loading, Text, Title } from "@/components/atoms";
import { Form, FormItem } from "@/components/molecules";
import { useDarkModeStore } from "@/stores/useDarkModeStore";
import { cn, colors } from "@/styles";
import { HomeOutlined, MoonFilled, MoonOutlined } from "@ant-design/icons";
import { theme } from "antd";
import { FormEvent, useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

export default function SingInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { isDarkMode, setDarkMode } = useDarkModeStore();
  const {
    token: { colorBgBase, colorBorder, colorBgContainer, sizeMD },
  } = theme.useToken();

  const handleSumbit = (e: FormEvent) => {
    e.preventDefault();
  };
  const handleGobackHome = () => {
    router.push("/");
  };
  const handleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div style={{ backgroundColor: colorBgBase }} className="col-center w-full min-h-screen">
      <div
        style={{
          border: `1px solid ${loading ? "transparant" : colorBorder}`,
          backgroundColor: colorBgContainer,
        }}
        className="col-center w-[400px] h-[640px] rounded-2xl p-8"
      >
        {loading ? (
          <Loading calssName="top-[-65px]" />
        ) : (
          <Animate delay={0.5}>
            <div className={cn("col-center size-full")}>
              <Text className="text-center my-4" type="xl-semibold" color="primary">
                로그인이 필요해요 😗
              </Text>
              <div className="w-full h-60">
                <DotLottieReact
                  className="bottom-[0] left-0 right-0 mx-auto size-full"
                  data={signInLottie}
                  loop
                  autoplay
                />
              </div>
              <Form onSubmit={handleSumbit}>
                <FormItem label="아이디" required extra="아이디는 이메일 형식입니다">
                  <Input placeholder="아이디 입력" />
                </FormItem>
                <FormItem label="비밀번호" required>
                  <Input placeholder="비밀번호 입력" />
                </FormItem>
                <div className="col-center gap-4 mt-4">
                  <Button fullWidth buttonSize="default" skipAnimation>
                    로그인
                  </Button>
                  <Button fullWidth buttonSize="default" buttonStyle="ghost" skipAnimation>
                    아이디가 없다면, 여기에서 가입해요! 🙂
                  </Button>
                </div>
              </Form>
            </div>
          </Animate>
        )}
      </div>
      <Animate delay={1.5}>
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
      </Animate>
    </div>
  );
}
