"use client";

import { Button, Input, Text } from "@/components/atoms";
import { Form, FormItem } from "@/components/molecules";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export const SignInForm = () => {
  const router = useRouter();
  const handleSumbit = (e: FormEvent) => {
    e.preventDefault();
  };
  const handleClick = () => router.push("/sign-up");
  return (
    <Form className={"w-[400px]"} onSubmit={handleSumbit}>
      <FormItem label="아이디" required>
        <Input size={"large"} placeholder="여기에 아이디를 입력" />
      </FormItem>
      <FormItem label="비밀번호" required>
        <Input size={"large"} placeholder="여기에 비밀번호 입력" />
      </FormItem>
      <div className="col-center gap-4 mt-4">
        <Button fullWidth buttonSize="default" skipAnimation>
          로그인
        </Button>
        <div className="row-center gap-2">
          <Text type="sm-regular" color="description">
            아이디가 아직 없으신가요?
          </Text>
          <Button onClick={handleClick} buttonSize="default" buttonStyle="ghost" skipAnimation>
            신규가입 🙂
          </Button>
        </div>
      </div>
    </Form>
  );
};
