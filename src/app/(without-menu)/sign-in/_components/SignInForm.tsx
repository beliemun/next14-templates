"use client";

import { signInAction } from "@/actions/sign-in";
import { Button, Input, Text } from "@/components/atoms";
import { Form, FormItem } from "@/components/molecules";
import { useFormState } from "react-dom";

export const SignInForm = () => {
  const [state, action] = useFormState(signInAction, null);
  return (
    <Form action={action}>
      <FormItem label="아이디" required direction="vertical">
        <Input
          name={"email"}
          type={"email"}
          size={"large"}
          placeholder="여기에 아이디를 입력"
          defaultValue={"test@test.com"}
          errors={state?.error}
        />
      </FormItem>
      <FormItem label="비밀번호" required direction="vertical">
        <Input
          name={"password"}
          type={"password"}
          size={"large"}
          placeholder="여기에 비밀번호 입력"
          defaultValue={"1234"}
          errors={state?.error}
        />
      </FormItem>
      <Button fullWidth buttonSize="default" skipAnimation>
        로그인
      </Button>
    </Form>
  );
};
