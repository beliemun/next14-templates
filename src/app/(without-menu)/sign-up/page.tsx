"use client";

import { Animate, Text } from "@/components/atoms";
import { theme } from "antd";
import { BottomButtons, SignUpExtrForm, SignUpForm } from "./_components";
import { cn } from "@/lib/utils";

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
          className="col-center max-w-lg w-full rounded-2xl p-8"
        >
          <Animate>
            <div className={cn("col-center size-full")}>
              <Text className="text-center mt-4" type="xl-semibold" color="primary">
                회원 가입
              </Text>
              <SignUpForm />
              <SignUpExtrForm />
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
