"use client";

import { Animate, Text } from "@/components/atoms";
import { cn } from "@/styles";
import { theme } from "antd";
import { BottomButtons, SignUpForm } from "./_components";

export default function SingUpPage() {
  const {
    token: { colorBgBase, colorBorder, colorBgContainer },
  } = theme.useToken();

  return (
    <div style={{ backgroundColor: colorBgBase }} className="col-center w-full min-h-screen">
      <Animate type="turn-left">
        <div
          style={{
            border: `1px solid ${colorBorder}`,
            backgroundColor: colorBgContainer,
          }}
          className="col-center w-full f-full rounded-2xl p-8 shadow "
        >
          <Animate>
            <div className={cn("col-center size-full")}>
              <Text className="text-center my-4" type="xl-semibold" color="primary">
                새로운 계정을 생성합니다 😀
              </Text>
              <SignUpForm />
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
