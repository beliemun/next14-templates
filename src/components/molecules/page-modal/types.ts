import { ButtonStyleType } from "@/components/atoms/button/types";
import { ColorType } from "@/styles";
import { ReactNode } from "react";

export type AlertSize = 480 | 640 | 720 | 1024;
export type ModalFooterDirection = "left" | "right";

export interface ModalAction {
  lable: string;
  style?: ButtonStyleType;
  color?: ColorType;
  onClick?: () => void | undefined;
}

export interface ModalProps {
  isOpen: boolean;
  size?: AlertSize | undefined;
  title?: string | undefined;
  message?: string | undefined;
  children?: ReactNode | undefined;
  actions?: ModalAction[] | undefined;
  footerDirection?: ModalFooterDirection | undefined;
  footerFitable?: boolean | undefined;
  loading?: boolean | undefined;
  onClose?: () => void | undefined;
}
