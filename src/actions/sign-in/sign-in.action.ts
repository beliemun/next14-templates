"use server";

const signInAction = async (prevAction: any, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("formData:", formData);
  return {
    error: ["비밀번호가 일치하지 않습니다.", "이메일 형식이 아닙니다."],
  };
};

export default signInAction;
