import { Text, Title } from "@/components/atoms";
import { cn } from "@/styles";
import { CSSProperties, DetailedHTMLProps, FormHTMLAttributes } from "react";

interface FormProps
  extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  style?: CSSProperties;
  className?: string;
  title?: string;
  description?: string;
}

export const Form = ({ style, className, title, description, children, ...rest }: FormProps) => {
  return (
    <form
      style={{ ...style }}
      className={cn("flex flex-col w-full h-full gap-4", className)}
      {...rest}
    >
      <div className={"flex flex-col gap-1 mb-1"}>
        <Title type="h6-semibold">{title}</Title>
        <Text type="sm-regular" color="description">
          {description}
        </Text>
      </div>
      {children}
    </form>
  );
};
