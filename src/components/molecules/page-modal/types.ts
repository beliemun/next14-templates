import { ButtonStyleType } from "@/components/atoms/button/types";
import { ColorType } from "@/lib/colors";
import { ReactNode } from "react";

export interface ModalAction {
  lable: string;
  style?: ButtonStyleType;
  color?: ColorType;
  onClick?: () => void | undefined;
}

export interface PageModalProps {
  title?: string | undefined;
  description?: string | undefined;
  children?: ReactNode | undefined;
  actions?: ModalAction[] | undefined;
  loading?: boolean | undefined;
  loadingMessage?: string | undefined;
  onClose?: () => void | undefined;
}
