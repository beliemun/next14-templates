import { PageLayout } from "@/components/organisms";
import { Section, Divider } from "@/components/atoms";
import { colorList } from "@/styles";
import { ColorPaletteItem } from "./_components/color-palette-item";

export default function () {
  return (
    <PageLayout title="Colors">
      <Divider orientation="left">Color Palettes</Divider>
      <Section>
        <div className="grid grid-cols-12 w-full max-w-4xl gap-y-8">
          {colorList.map((color, key) => (
            <ColorPaletteItem color={color} key={key} />
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
