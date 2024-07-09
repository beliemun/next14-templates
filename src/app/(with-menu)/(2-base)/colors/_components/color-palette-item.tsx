import { Text } from "@/components/atoms";
import { colors } from "@/styles";
import { ButtonColorType } from "@/components/atoms/button/types";

interface ColorPaletteItemProp {
  color: string;
}

export const ColorPaletteItem = ({ color }: ColorPaletteItemProp) => {
  const renderColorCells = (color: ButtonColorType) => {
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
      {renderColorCells(color as ButtonColorType)}
    </>
  );
};
