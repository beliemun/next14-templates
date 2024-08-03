import { Button, Message, Text } from "@/components/atoms";
import { signUserOut } from "@/lib/session";
import { cn } from "@/lib/utils";
import { useAlertStore } from "@/stores/useAlertStore";
import { useLayoutStore } from "@/stores/useLayoutStore";
import { useSignedInUserStore } from "@/stores/useSignedInUserStore";
import { LogoutOutlined } from "@ant-design/icons";
import { Divider, theme } from "antd";

export const MenuHeader = () => {
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
            <LogoutOutlined />
          </Button>
        ) : (
          <Button buttonStyle="ghost" buttonColor="gray" disabled>
            <LogoutOutlined />
          </Button>
        )}
      </>
    ) : (
      <>
        {signedInUser ? (
          <>
            <Text type="sm-semibold" color="primary">
              {`${signedInUser?.username}님, `}
              <Text type="sm-normal">안녕하세요! 🤗</Text>
            </Text>
            <Button buttonSize="xs" onClick={handleSignOut}>
              로그아웃
            </Button>
          </>
        ) : (
          <Text type="sm-normal" color="disabled">
            로그인 정보 없음
          </Text>
        )}
      </>
    );

  return (
    <div className={cn("col-center")}>
      {contextHolder}
      <div
        className={cn("col-center size-full rounded-full transition-all duration-200 gap-2")}
        style={{ borderColor: colorBorder, height: 80 }}
      >
        {renderContents()}
      </div>
      <Divider style={{ marginTop: 0, marginBottom: 10, borderColor: colorBorder }} />
    </div>
  );
};
