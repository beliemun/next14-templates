import { Button, Text } from "@/components/atoms";
import { useRouter } from "next/navigation";

export const SignInExtrForm = () => {
  const router = useRouter();
  const handleClick = () => router.push("/sign-up");
  return (
    <div className="row-center gap-2 mt-4">
      <Text type="sm-regular" color="description">
        아이디가 아직 없으신가요?
      </Text>
      <Button onClick={handleClick} buttonSize="default" buttonStyle="ghost" skipAnimation>
        신규가입 🙂
      </Button>
    </div>
  );
};
