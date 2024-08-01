"use client";

import { Button, Input, Text } from "@/components/atoms";
import { Form, FormItem } from "@/components/molecules";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export const SignUpForm = () => {
  const router = useRouter();
  const handleSumbit = (e: FormEvent) => {
    e.preventDefault();
  };
  const handleClick = () => router.push("/sign-in");
  return (
    <Form className="w-[400px]" onSubmit={handleSumbit}>
      <FormItem label="아이디" required>
        <Input size={"large"} placeholder="아이디를 입력" />
      </FormItem>
      <FormItem label="이름" required>
        <Input size={"large"} placeholder="이름을 입력" />
      </FormItem>
      <FormItem label="이메일" required>
        <Input size={"large"} placeholder="이메일을 입력" />
      </FormItem>
      <FormItem label="비밀번호" required>
        <Input size={"large"} placeholder="비밀번호 입력" />
      </FormItem>
      <FormItem label="비밀번호 확인" required>
        <Input size={"large"} placeholder="비밀번호 다시 입력" />
      </FormItem>
      <div className="col-center gap-4 mt-4">
        <Button fullWidth buttonSize="default" skipAnimation>
          계정 생성
        </Button>
        <div className="row-center gap-2">
          <Text type="sm-regular" color="description">
            이미 생성한 아이디가 있다면?
          </Text>
          <Button onClick={handleClick} buttonSize="default" buttonStyle="ghost" skipAnimation>
            로그인 🙂
          </Button>
        </div>
      </div>
    </Form>
  );
};
