import { PageLayout } from "@/components/organisms";
import { Section } from "@/components/atoms";
import { ColorPaletteItems } from "./_components/color-palette-item";
import { colorList } from "@/lib/colors";
import { Metadata } from "next";
import { color } from "framer-motion";
import { Divider } from "antd";
import { capitalizeFirstLetter } from "@/shared/utils";

export const metadata: Metadata = {
  title: "Colors",
};

export default function ColorPage() {
  return (
    <PageLayout title="Colors">
      {colorList.map((color, key) => (
        <>
          <Divider orientation="left">{capitalizeFirstLetter(color)}</Divider>
          <ColorPaletteItems color={color} key={`#2_${color}_${key}`} />
        </>
      ))}
    </PageLayout>
  );
}
