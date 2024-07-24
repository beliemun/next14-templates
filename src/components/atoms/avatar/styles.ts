import { AvatarProps, AvatarSizeType } from "./types";

export const avatarStyles = ({ avatarSize, avatarRound }: AvatarProps) => {
  const styles = [""];
  if (avatarSize === "xs") {
    styles.push("size-[24px]");
    avatarRound === "rounded" && styles.push("rounded-md");
  } else if (avatarSize === "sm") {
    styles.push("size-[32px]");
    avatarRound === "rounded" && styles.push("rounded-md");
  } else if (avatarSize === "default") {
    styles.push("size-[48px]");
    avatarRound === "rounded" && styles.push("rounded-lg");
  } else if (avatarSize === "large") {
    styles.push("size-[60px]");
    avatarRound === "rounded" && styles.push("rounded-lg");
  }

  avatarRound === "full" && styles.push("rounded-full");
  styles.push("bg-slate-200 dark:bg-slate-800 text-white dark:text-slate-600");
  return styles.join(" ");
};

export const avatarIconSize = ({ avatarSize }: AvatarProps) => {
  const styles = [""];
  if (avatarSize === "xs") {
    styles.push("text-[18px]");
  } else if (avatarSize === "sm") {
    styles.push("text-[24px]");
  } else if (avatarSize === "default") {
    styles.push("text-[38px]");
  } else if (avatarSize === "large") {
    styles.push("text-[48px]");
  }
  return styles.join(" ");
};

export const avatarImageSize = (avatarSize: AvatarSizeType) => {
  let size = { width: 0, height: 0 };
  if (avatarSize === "xs") {
    size = { width: 24, height: 24 };
  } else if (avatarSize === "sm") {
    size = { width: 32, height: 32 };
  } else if (avatarSize === "default") {
    size = { width: 48, height: 48 };
  } else if (avatarSize === "large") {
    size = { width: 60, height: 60 };
  }
  return size;
};

export const avatarBadgeProps = ({ avatarSize, avatarRound }: AvatarProps) => {
  const styles = [""];
  if (avatarSize === "xs") {
    if (avatarRound === "full") {
      styles.push("top-[0px] right-[0px] size-1.5");
    } else if (avatarRound === "rounded") {
      styles.push("top-[-1px] right-[-1px] size-1.5");
    }
  } else if (avatarSize === "sm") {
    if (avatarRound === "full") {
      styles.push("top-[1px] right-[1px] size-2");
    } else if (avatarRound === "rounded") {
      styles.push("top-[-2px] right-[-2px] size-2");
    }
  } else if (avatarSize === "default") {
    if (avatarRound === "full") {
      styles.push("top-[1.5px] right-[1.5px] size-2.5");
    } else if (avatarRound === "rounded") {
      styles.push("top-[-3px] right-[-3px] size-2.5");
    }
  } else if (avatarSize === "large") {
    if (avatarRound === "full") {
      styles.push("top-[2px] right-[2px] size-3");
    } else if (avatarRound === "rounded") {
      styles.push("top-[-4px] right-[-4px] size-3");
    }
  }
  styles.push("bg-[#ff0000] rouned-full border border-white dark:border-black/80");
  return styles;
};
