import { Button, Message, Text } from "@/components/atoms";
import { signUserOut } from "@/lib/session";
import { cn } from "@/lib/utils";
import { useAlertStore } from "@/stores/useAlertStore";
import { useUserStore } from "@/stores/useUserStore";
import { Divider, theme } from "antd";

export const MenuHeader = ({ collapsed }: { collapsed: boolean }) => {
  const { user } = useUserStore();
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

  return (
    <div className={cn("col-center")}>
      {contextHolder}
      <div
        className={cn("col-center size-full rounded-full transition-all duration-200 gap-2")}
        style={{ borderColor: colorBorder, height: 80 }}
      >
        {user ? (
          <>
            <Text type="sm-semibold" color="primary">
              {`${user?.username}님, `}
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
      </div>
      <Divider style={{ marginTop: 0, marginBottom: 10, borderColor: colorBorder }} />
    </div>
  );
};
