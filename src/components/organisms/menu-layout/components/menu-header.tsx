import { Animate, Button, Message, Text } from "@/components/atoms";
import { signUserOut } from "@/lib/session";
import { cn } from "@/lib/utils";
import { useAlertStore } from "@/stores/useAlertStore";
import { useLayoutStore } from "@/stores/useLayoutStore";
import { useSignedInUserStore } from "@/stores/useSignedInUserStore";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { Divider, theme } from "antd";
import { useRouter } from "next/navigation";

export const MenuHeader = () => {
  const router = useRouter();
  const { signedInUser } = useSignedInUserStore();
  const { isCollapsed } = useLayoutStore();
  const { show, onDismiss } = useAlertStore();
  const [messageApi, contextHolder] = Message.useMessage();
  const {
    token: { colorBorder },
  } = theme.useToken();

  const handleSignOut = () => {
    show({
      title: "로그아웃",
      message: "정말 로그아웃 할까요?",
      actions: [
        {
          lable: "로그아웃",
          onClick: () => {
            signUserOut();
            onDismiss();
            messageApi.info("로그아웃 되었습니다.");
          },
        },
        {
          lable: "취소",
          style: "outline",
        },
      ],
    });
  };
  const handleSignIn = () => router.push("/sign-in");
  const handleSignUp = () => router.push("/sign-up");

  const renderContents = () =>
    isCollapsed ? (
      <>
        {signedInUser ? (
          <Button
            buttonStyle="ghost"
            buttonColor="gray"
            tooltipTitle="로그아웃"
            onClick={handleSignOut}
          >
            <LoginOutlined />
          </Button>
        ) : (
          <Button
            buttonStyle="ghost"
            buttonColor="gray"
            onClick={handleSignIn}
            tooltipTitle="로그인"
          >
            <LoginOutlined />
          </Button>
        )}
      </>
    ) : (
      <>
        {signedInUser ? (
          <Animate className="gap-2">
            <Text type="sm-semibold" color="primary">
              {`${signedInUser?.username}님, `}
              <Text type="sm-normal">안녕하세요! 🤗</Text>
            </Text>
            <Button buttonSize="xs" onClick={handleSignOut}>
              로그아웃
            </Button>
          </Animate>
        ) : (
          <div className="row-center">
            <Button buttonSize="xs" onClick={handleSignIn} buttonStyle="outline">
              로그인
            </Button>
            <Divider type="vertical" />
            <Button buttonSize="xs" onClick={handleSignUp} buttonStyle="outline">
              회원가입
            </Button>
          </div>
        )}
      </>
    );

  return (
    <div className={cn("col-center")}>
      {contextHolder}
      <div
        className={cn(
          "col-center size-full rounded-full transition-all duration-200 gap-2",
          "h-12 xs:h-20"
        )}
        style={{ borderColor: colorBorder }}
      >
        {renderContents()}
      </div>
      <Divider style={{ marginTop: 0, marginBottom: 10, borderColor: colorBorder }} />
    </div>
  );
};
