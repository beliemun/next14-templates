"use client";

import { CSSProperties } from "styled-components";
import loading from "./loading.json";
import signIn from "./sign-in.json";

import { cn } from "@/lib/utils";
import { Player } from "@lottiefiles/react-lottie-player";

type LottieName = "loading" | "signIn";

const LottieType: Record<LottieName, any> = {
  loading,
  signIn,
};

interface LottieProps {
  style?: CSSProperties;
  className?: string;
  name: LottieName;
}

export const Lottie = ({ style, name }: LottieProps) => {
  return <Player src={LottieType[name]} style={{ ...style }} autoplay loop />;
};
