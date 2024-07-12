import { PageLayout } from "@/components/organisms";
import { Card, Divider, Flex } from "antd";
import { paletteColorList, ColorPaletteItem } from "./_components/color-palette-item";
import { FunctionalColorItem, FunctionalColorList } from "./_components/functional-color-item";
import { Section, Title } from "@/components/atoms";

export default function () {
  return (
    <PageLayout title="Colors">
      <Section>
        <Title className="pb-4">Base Color Palettes</Title>
        <Flex wrap gap={20}>
          {paletteColorList.map((color, index) => (
            <ColorPaletteItem key={index} color={color} index={index} />
          ))}
        </Flex>
      </Section>
      <Divider />
      <Section className="max-w-2xl">
        <Title className="pb-4">Functional Color</Title>
        <Flex>
          <Card className="w-full" type="inner">
            <div className="relative flex h-64 border-4 border-dashed rounded-lg p-1">
              <div className="flex-1 bg-white/85 rounded-l-lg" />
              <div className="flex-1 bg-black/85 rounded-r-lg" />
              <div className="absolute col-center gap-2 top-0 bottom-0 left-0 right-0 m-auto">
                {FunctionalColorList.map((item, index) => (
                  <FunctionalColorItem key={index} item={item} />
                ))}
              </div>
            </div>
          </Card>
        </Flex>
      </Section>
    </PageLayout>
  );
}
