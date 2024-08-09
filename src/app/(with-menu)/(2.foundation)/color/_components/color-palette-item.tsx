import { Text } from "@/components/atoms";
import { colors, ColorType } from "@/lib/colors";

interface ColorPaletteItemProp {
  color: string;
}

export const ColorPaletteItems = ({ color }: ColorPaletteItemProp) => {
  const renderColorCells = (color: ColorType) => {
    const colorComponents = [];
    for (let key in colors[color]) {
      const value = (colors[color] as any)[key as any];
      colorComponents.push(
        <div className="col-center shrink-0 mt-2" key={key}>
          <div
            style={{ backgroundColor: value }}
            className="size-10 md:size-12 rounded-full mb-2"
          />
          <Text type="sm-semibold">{key}</Text>
          <Text type="xs-light">{value}</Text>
        </div>
      );
    }
    return colorComponents;
  };
  return (
    <div className="flex flex-row flex-wrap gap-1 sm:gap-2 px-2 sm:px-4">
      {renderColorCells(color as ColorType)}
    </div>
  );
};
