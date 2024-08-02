"use client";

import { Animate, Message, Text } from "@/components/atoms";
import { theme } from "antd";
import { BottomButtons, SignInExtrForm, SignInForm } from "./_components";
import { Lottie } from "@/assets/lotties";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useAlertStore } from "@/stores/useAlertStore";

export default function SingInPage({ searchParams }: any) {
  const [meesageApi, contextHolder] = Message.useMessage();
  const {
    token: { colorBgBase, colorBorder, colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    if (searchParams.greeting) {
      meesageApi.success("계정이 생성되었습니다. 로그인 해주세요.");
    }
  }, []);

  return (
    <div style={{ backgroundColor: colorBgBase }} className="col-center w-full min-h-screen">
      {contextHolder}
      <Animate type="turn-left">
        <div
          style={{
            border: `1px solid ${colorBorder}`,
            backgroundColor: colorBgContainer,
          }}
          className="col-center max-w-md w-full  rounded-2xl p-8 shadow"
        >
          <Animate type="show-up">
            <div className={cn("col-center size-full")}>
              <Text className="text-center my-4" type="xl-semibold" color="primary">
                로그인이 필요해요 😗
              </Text>
              <Animate type="fall-down">
                <Lottie name="signInLottie" size={240} />
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
