import type { Metadata } from "next";
import { Gothic_A1 } from "next/font/google";
import "@/styles/globals.css";

const gothicA1 = Gothic_A1({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

import { AntdProvider } from "../components/providers/antd-provider";
import StyledComponentsRegistry from "@/lib/registry";
import { URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    template: "%s | Brian's template",
    default: "Brian's template",
  },
  description: "Brian's Next.js Template",
  creator: "burngrit",
  openGraph: {
    images: [
      {
        url: `${URL.CF_IMAGE}/${process.env.CF_ACCOUNT_HASH}/3f3e0116-76e9-4306-411e-7844af5bfb00/public`,
      },
    ],
  },
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
