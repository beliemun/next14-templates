"use client";

import { signInAction } from "@/actions/sign-in";
import { Button, Input } from "@/components/atoms";
import { Form, FormItem } from "@/components/molecules";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
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
          addonBefore={<UserOutlined />}
          placeholder="여기에 아이디를 입력"
          autoComplete="username"
          defaultValue={""}
          errors={state?.fieldErrors.email}
          autoFocus
        />
      </FormItem>
      <FormItem label="비밀번호" required direction="vertical">
        <Input.Password
          name={"password"}
          size={"large"}
          addonBefore={<LockOutlined />}
          placeholder="여기에 비밀번호 입력"
          autoComplete="password"
          defaultValue={""}
          errors={state?.fieldErrors.password}
        />
      </FormItem>
      <Button className="mt-6" fullWidth buttonSize="default" skipAnimation>
        로그인
      </Button>
    </Form>
  );
};
