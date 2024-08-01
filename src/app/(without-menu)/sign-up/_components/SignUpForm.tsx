"use client";

import { Button, Input } from "@/components/atoms";
import { Form, FormItem } from "@/components/molecules";

export const SignUpForm = () => {
  return (
    <Form>
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
      <Button fullWidth buttonSize="default" skipAnimation>
        계정 생성
      </Button>
    </Form>
  );
};
