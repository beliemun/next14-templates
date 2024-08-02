import { Lottie } from "@/assets/lotties";
import { Text } from "../text";
import { CSSProperties } from "styled-components";
import { cn } from "@/lib/utils";

interface LoadingProps {
  style?: CSSProperties;
  calssName?: string;
  loadingMessage?: string;
}

export const Loading = ({ style, calssName, loadingMessage }: LoadingProps) => {
  return (
    <div style={{ ...style }} className={cn("relative col-center min-w-32", calssName)}>
      <Lottie name="loading" style={{ width: 128, height: 128 }} />
      {loadingMessage ? (
        <Text type="base-semibold" color="description">
          {loadingMessage}
        </Text>
      ) : null}
    </div>
  );
};
