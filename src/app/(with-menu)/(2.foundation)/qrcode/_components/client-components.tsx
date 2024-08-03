"use client";

import { Button, Divider, Input, QRCode, Radio, Section } from "@/components/atoms";
import { colors } from "@/lib/colors";
import { ChangeEvent, useState } from "react";

const ICON =
  "data:image/png;base64,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";

const download = ({ url, fileName }: { url: string; fileName: string }) => {
  const a = document.createElement("a");
  a.download = fileName;
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const downloadQRCode = () => {
  const canvas = document.getElementById("myqrcode")?.querySelector<HTMLCanvasElement>("canvas");
  if (canvas) {
    const url = canvas.toDataURL();
    download({ url, fileName: "QRCode.png" });
  }
};

export const ClientComponents = () => {
  const [text, setText] = useState("https://google.com");

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  return (
    <>
      {" "}
      <Divider orientation="left">Basic QRCode</Divider>
      <Section className="flex-col pt-2">
        <div className="space-y-4">
          <QRCode value={text} />
          <Input title="Text" value={text} onChange={handleChangeText} style={{ width: 160 }} />
        </div>
      </Section>
      <Divider orientation="left">Variants</Divider>
      <Section className="pt-2">
        <QRCode value={text} icon={ICON} iconSize={{ width: 64, height: 64 }} />
        <QRCode value={text} color={colors.primary[500]} />
        <QRCode value={text} color={colors.slate[100]} bgColor={colors.slate[800]} />
      </Section>
      <Divider orientation="left">Status</Divider>
      <Section className="pt-2">
        <QRCode value={text} status="loading" />
        <QRCode value={text} status="expired" />
        <QRCode value={text} status="scanned" />
      </Section>
      <Divider orientation="left">Download</Divider>
      <Section id="myqrcode" className="pt-2">
        <div className="space-y-4">
          <QRCode value={text} />
          <Button fullWidth onClick={downloadQRCode}>
            Download
          </Button>
        </div>
      </Section>
    </>
  );
};
