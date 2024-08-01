import { cn } from "@/lib/utils";
import { avatarBadgeProps, avatarIconSize, avatarImageSize, avatarStyles } from "./styles";
import { UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import { AvatarProps } from "./types";
import { CSSProperties, ReactNode } from "react";

const Avatar = ({
  style,
  className,
  avatarSize = "sm",
  avatarRound = "full",
  avatarUrl,
  showBadge = false,
  ...rest
}: AvatarProps) => {
  return (
    <div
      className={cn(
        "relative flex justify-center items-center ring-[1px] ring-white dark:ring-black/80",
        avatarStyles({ avatarSize, avatarRound }),
        className
      )}
      {...rest}
    >
      <div
        style={{ ...style }}
        className={cn(
          "relative flex justify-center items-center overflow-hidden",
          avatarStyles({ avatarSize, avatarRound })
        )}
      >
        <UserOutlined className={avatarIconSize({ avatarSize })} />
        {avatarUrl ? (
          <Image
            {...avatarImageSize(avatarSize)}
            className="absolute"
            src={avatarUrl}
            alt={"user-avatar"}
          />
        ) : null}
      </div>
      {showBadge ? (
        <div
          className={cn(
            "absolute rounded-full bg-[#ff0000]",
            avatarBadgeProps({ avatarSize, avatarRound })
          )}
        />
      ) : null}
    </div>
  );
};

interface AvatarGroupProps {
  style?: CSSProperties | undefined;
  className?: string | undefined;
  list: ReactNode[];
}

const AvatarGroup = ({ style, className, list }: AvatarGroupProps) => {
  return (
    <div style={{ ...style }} className={cn("flex flex-row", className)}>
      {list?.map((avatar, index) => (
        <div key={index} className={cn("relative", { "ml-[-10px]": index > 0 })}>
          {avatar}
        </div>
      ))}
    </div>
  );
};

Avatar.Group = AvatarGroup;

export { Avatar };
