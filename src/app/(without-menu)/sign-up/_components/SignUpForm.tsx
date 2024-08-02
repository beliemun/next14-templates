"use client";

import { singUpAction } from "@/actions/sign-up/sign-up.action";
import { Button, Input } from "@/components/atoms";
import { Form, FormItem } from "@/components/molecules";
import { useFormState } from "react-dom";

export const SignUpForm = () => {
  const [state, action] = useFormState(singUpAction, null);
  return (
    <Form action={action}>
      <FormItem label="이름" required>
        <Input
          name={"username"}
          size={"large"}
          placeholder="이름을 입력"
          autoComplete="username"
          defaultValue={"Brian"}
          errors={state?.fieldErrors.username}
        />
      </FormItem>
      <FormItem label="이메일" required>
        <Input
          name={"email"}
          size={"large"}
          placeholder="이메일을 입력"
          autoComplete="email"
          defaultValue={"burngrit@icloud.com"}
          errors={state?.fieldErrors.email}
        />
      </FormItem>
      <FormItem label="비밀번호" required>
        <Input.Password
          name={"password"}
          size={"large"}
          placeholder="비밀번호 입력"
          autoComplete="password"
          defaultValue={"1234"}
          errors={state?.fieldErrors.password}
        />
      </FormItem>
      <FormItem label="비밀번호 확인" required>
        <Input.Password
          name={"confirm_password"}
          type={"password"}
          size={"large"}
          placeholder="비밀번호 다시 입력"
          autoComplete="conform_password"
          defaultValue={"1234"}
          errors={state?.fieldErrors.confirm_password}
        />
      </FormItem>
      <Button fullWidth buttonSize="default" skipAnimation>
        계정 생성
      </Button>
    </Form>
  );
};
