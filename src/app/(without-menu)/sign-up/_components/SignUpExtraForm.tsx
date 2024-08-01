import { Button, Text } from "@/components/atoms";
import { useRouter } from "next/navigation";

export const SignUpExtrForm = () => {
  const router = useRouter();
  const handleClick = () => router.push("/sign-in");
  return (
    <div className="row-center gap-2 mt-4">
      <Text type="sm-regular" color="description">
        이미 생성한 아이디가 있다면?
      </Text>
      <Button onClick={handleClick} buttonSize="default" buttonStyle="ghost" skipAnimation>
        로그인 🙂
      </Button>
    </div>
  );
};
