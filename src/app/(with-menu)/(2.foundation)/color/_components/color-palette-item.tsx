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
            className="size-7 xs:size-10 xs:rounded-lg mb-2"
          />
          <Text type="sm-semibold" className="hidden xs:inline-block">
            {key}
          </Text>
          <Text type="xs-light" className="hidden xs:inline-block">
            {value}
          </Text>
        </div>
      );
    }
    return colorComponents;
  };
  return (
    <div className="flex flex-row xs:flex-wrap gap-0 xs:gap-2 px-4">
      {renderColorCells(color as ColorType)}
    </div>
  );
};
