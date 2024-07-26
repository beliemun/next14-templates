import { CSSProperties, DetailedHTMLProps, forwardRef, LabelHTMLAttributes } from "react";
import { Tooltip, Text } from "@/components/atoms";
import { TooltipPlacement } from "@/components/atoms/tooltip/types";
import { TextType } from "@/components/atoms/text/types";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { cn } from "@/styles";

interface FormItemProps
  extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  style?: CSSProperties;
  className?: string;
  label: string;
  labelType?: TextType;
  labelWidth?: number;
  direction?: "horizontal" | "vertical";
  required?: boolean;
  maxWidth?: number;
  tooltipTitle?: string;
  tooltipTrigger?: "click" | "focus" | "hover";
  tooltipPlacement?: TooltipPlacement;
}

const FormItem = ({
  style,
  className,
  htmlFor,
  label,
  labelType = "sm-regular",
  labelWidth = 120,
  direction = "horizontal",
  required,
  maxWidth = 640,
  tooltipTitle,
  tooltipTrigger = "hover",
  tooltipPlacement = "top",
  children,
  ...rest
}: FormItemProps) => {
  return (
    <div
      style={{ ...style, maxWidth }}
      className={cn("flex gap-2", direction === "horizontal" ? "flex-row" : "flex-col", className)}
    >
      <label style={{ width: labelWidth }} className={cn("flex items-center gap-1")} {...rest}>
        <Text type={labelType} className="overflow-hidden-text" color="description">
          {label}
        </Text>
        {required ? <Text style={{ color: "red", marginLeft: -3 }}>*</Text> : null}
        <Tooltip title={tooltipTitle} trigger={tooltipTrigger} placement={tooltipPlacement}>
          <Text color="description">
            <QuestionCircleOutlined style={{ fontSize: 14 }} />
          </Text>
        </Tooltip>
      </label>
      {children}
    </div>
  );
};

export default forwardRef(FormItem);
