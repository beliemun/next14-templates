import { loadingLottie } from "@/assets/lotties";
import { Text } from "../text";

import dynamic from "next/dynamic";
import { cn } from "@/styles";
const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

interface LoadingProps {
  calssName?: string;
  loadingMessage?: string;
}

export const Loading = ({ calssName, loadingMessage }: LoadingProps) => {
  return (
    <div className="relative col-center min-w-32">
      <DotLottieReact
        className={cn(
          "absolute left-[0px] right-0 mx-auto size-32",
          loadingMessage ? "top-[-30px]" : "top-[-65px]",
          calssName
        )}
        data={loadingLottie}
        loop
        autoplay
      />
      {loadingMessage ? (
        <Text type="base-semibold" color="description" className="mt-20">
          {loadingMessage}
        </Text>
      ) : null}
    </div>
  );
};
