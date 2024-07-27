"use client";

import { LoadingModal } from "@/components/molecules";
import { LoadingModalProps } from "@/components/molecules/loading-modal/types";
import { useEffect, useState } from "react";

export const LoadingModalComponent = ({ ...rest }: LoadingModalProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return <LoadingModal message="Here is loading message" loading={loading} {...rest} />;
};
