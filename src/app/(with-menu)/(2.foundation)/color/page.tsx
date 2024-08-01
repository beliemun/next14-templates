import { PageLayout } from "@/components/organisms";
import { Section } from "@/components/atoms";
import { ColorPaletteItem } from "./_components/color-palette-item";
import { colorList } from "@/lib/colors";

export default function ColorPage() {
  return (
    <PageLayout title="Colors">
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
