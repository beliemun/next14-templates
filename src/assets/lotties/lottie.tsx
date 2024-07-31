"use client";

import { CSSProperties } from "styled-components";
import loadingLottie from "./loading.json";
import signInLottie from "./sign-in.json";
import signUpLottie from "./sign-up.json";

import dynamic from "next/dynamic";
import { cn } from "@/styles";
import { useEffect, useState } from "react";
const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

type LottieName = "loadingLottie" | "signInLottie" | "signUpLottie";

const LottieType: Record<LottieName, any> = {
  loadingLottie,
  signInLottie,
  signUpLottie,
};

interface LottieProps {
  style?: CSSProperties;
  className?: string;
  name: LottieName;
  size: number;
}

export const Lottie = ({ style, className, name, size }: LottieProps) => {
  const [isMount, setIsMount] = useState(false);
  useEffect(() => setIsMount(true), []);

  return (
    <div style={{ width: size, height: size, ...style }} className={cn(className)}>
      {isMount && (
        <DotLottieReact
          className="inset-0 mx-auto size-full"
          data={LottieType[name]}
          loop
          autoplay
        />
      )}
    </div>
  );
};
