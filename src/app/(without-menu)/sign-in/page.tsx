"use client";

import { Animate, Message, Text } from "@/components/atoms";
import { theme } from "antd";
import { BottomButtons, SignInExtrForm, SignInForm } from "./_components";
import { Lottie } from "@/assets/lotties";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useDarkModeStore } from "@/stores/useDarkModeStore";

export default function SingInPage({ searchParams }: any) {
  const [meesageApi, contextHolder] = Message.useMessage();
  const { isDarkMode } = useDarkModeStore();
  const {
    token: { colorBgBase, colorBorder, colorBgContainer, colorBgContainerDisabled },
  } = theme.useToken();

  useEffect(() => {
    if (searchParams.greeting) {
      meesageApi.success("계정이 생성되었습니다. 로그인 해주세요.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{ backgroundColor: isDarkMode ? colorBgBase : colorBgContainerDisabled }}
      className="col-center w-full min-h-screen"
    >
      {contextHolder}
      <Animate type="turn-left">
        <div
          style={{
            border: `1px solid ${colorBorder}`,
            backgroundColor: colorBgContainer,
          }}
          className="col-center max-w-md w-full  rounded-2xl p-8"
        >
          <Animate type="show-up">
            <div className={cn("col-center size-full")}>
              <Text className="text-center mt-4" type="xl-semibold" color="primary">
                로그인
              </Text>
              <Text className="text-center mt-2" type="xs-regular" color="gray">
                (실제 인증을 위해 구현, 그 외 기능은 없음)
              </Text>
              <Animate type="fall-down">
                <Lottie name="signIn" style={{ width: 240, height: 240 }} />
              </Animate>
              <SignInForm />
              <SignInExtrForm />
            </div>
          </Animate>
        </div>
        <Animate transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}>
          <BottomButtons />
        </Animate>
      </Animate>
    </div>
  );
}
