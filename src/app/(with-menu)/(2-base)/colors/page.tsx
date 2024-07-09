import { PageLayout } from "@/components/organisms";
import { Section, Text, Divider } from "@/components/atoms";
import { colors } from "@/styles";
import { buttonColors, ButtonColorType } from "@/components/atoms/button/types";
import { ColorPaletteItem } from "./_components/color-palette-item";

export default function () {
  return (
    <PageLayout title="Colors">
      <Divider orientation="left">Color Palettes</Divider>
      <Section>
        <div className="grid grid-cols-12 w-full max-w-4xl gap-y-8">
          {buttonColors.map((color, key) => (
            <ColorPaletteItem color={color} key={key} />
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
