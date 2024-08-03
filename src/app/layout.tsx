import type { Metadata } from "next";
import { Gothic_A1 } from "next/font/google";
import "@/styles/globals.css";

const gothicA1 = Gothic_A1({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

import { AntdProvider } from "../components/providers/antd-provider";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
  title: {
    template: "%s | Brian's template",
    default: "Brian's template",
  },
  description: "Custom Template made by Next.js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className={gothicA1.className}>
        <StyledComponentsRegistry>
          <AntdProvider>{children}</AntdProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
