import { Text } from "@/components/atoms";
import { colors, ColorType } from "@/styles";

interface ColorPaletteItemProp {
  color: string;
}

export const ColorPaletteItem = ({ color }: ColorPaletteItemProp) => {
  const renderColorCells = (color: ColorType) => {
    const colorComponents = [];
    for (let key in colors[color]) {
      const value = (colors[color] as any)[key as any];
      colorComponents.push(
        <div className="col-center m-1">
          <div style={{ backgroundColor: value }} className="w-full h-12 rounded-md mb-2" />
          <Text type="sm-semibold">{key}</Text>
          <Text type="sm-light">{value}</Text>
        </div>
      );
    }
    return colorComponents;
  };
  return (
    <>
      <div className="col-center w-full h-full">
        <Text>{color}</Text>
      </div>
      {renderColorCells(color as ColorType)}
    </>
  );
};
