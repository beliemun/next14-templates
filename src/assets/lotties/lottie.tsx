"use client";

import { CSSProperties } from "styled-components";
import loadingLottie from "./loading.json";
import signInLottie from "./sign-in.json";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false, loading: () => <>Loading..</> }
);

type LottieName = "loadingLottie" | "signInLottie";

const LottieType: Record<LottieName, any> = {
  loadingLottie,
  signInLottie,
};

interface LottieProps {
  style?: CSSProperties;
  className?: string;
  name: LottieName;
  size: number;
}

export const Lottie = ({ style, className, name, size }: LottieProps) => {
  const [isMount, setIsMount] = useState(false);

  // DotLottieReact 오류로 isMount가 있지만, 렌더가 되지 않아도 여전히 문제가 있음.
  // index.js:1512  Uncaught DOMException: Failed to construct 'ImageData': The source width is zero or not a number.
  useEffect(() => setIsMount(true), []);

  return (
    <div style={{ width: size, height: size, ...style }} className={cn(className)}>
      {isMount ? (
        <DotLottieReact
          className="inset-0 mx-auto size-full"
          data={LottieType[name]}
          loop
          autoplay
        />
      ) : null}
    </div>
  );
};
