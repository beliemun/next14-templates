import { CSSProperties } from "react";

export type AvatarSizeType = "xs" | "sm" | "default" | "large";
export type AvatarRoundType = "rounded" | "full";

export interface AvatarProps {
  style?: CSSProperties | undefined;
  className?: string | undefined;
  avatarSize?: AvatarSizeType | undefined;
  avatarRound?: AvatarRoundType | undefined;
  avatarUrl?: string | undefined;
  showBadge?: boolean | undefined;
}
