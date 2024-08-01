import { cn } from "@/lib/utils";
import { QRCode as QRCodeAntd, QRCodeProps as QRCodeAntdProps } from "antd";

interface QRCodeProps extends QRCodeAntdProps {}

export const QRCode = ({ className, ...rest }: QRCodeProps) => {
  return <QRCodeAntd className={cn(className)} {...rest} />;
};
