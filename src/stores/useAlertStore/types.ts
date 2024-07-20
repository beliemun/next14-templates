import { ButtonStyleType } from "@/components/atoms/button/types";
import { ReactNode } from "react";

export type AlertSize = `480px` | `640px` | `720px` | `1024px`;
export type AlertFooterDirection = "left" | "right";

export interface AlertAction {
  lable: string;
  style?: ButtonStyleType;
  onClick?: () => void | undefined;
}

export interface AlertProps {
  visible: boolean;
  size?: AlertSize | undefined;
  title?: string | undefined;
  message?: string | undefined;
  contents?: ReactNode | undefined;
  actions?: [AlertAction, AlertAction?] | undefined;
  footerDirection?: AlertFooterDirection | undefined;
}

export interface AlertStore extends AlertProps {
  show: (props: Omit<AlertProps, "visible">) => void;
  onDismiss: () => void;
}
