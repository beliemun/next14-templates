import { cn, colors } from "@/styles";
import { Card } from "antd";

export const paletteColorList = [
  "primary",
  "red",
  "volcano",
  "orange",
  "gold",
  "yellow",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekBlue",
  "purple",
  "magenta",
  "slate",
  "gray",
];

interface ColorPaletteItemProp {
  color: string;
  index: number;
}

export const ColorPaletteItem = ({ color, index }: ColorPaletteItemProp) => {
  return (
    <Card
      key={index}
      title={`${paletteColorList[index].toUpperCase()}`}
      className="w-64"
      type="inner"
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className={`flex flex-row items-center w-full h-4 p-4`}
          style={{ backgroundColor: colors[`${color}${index + 1}`] }}
        >
          <div
            className={cn("flex flex-row w-full justify-between items-center")}
            style={{ color: index > 5 ? colors["white"] : colors["black"] }}
          >
            <span>{`${color}-${index + 1}`}</span>
            <span>{colors[`${color}${index + 1}`]}</span>
          </div>
        </div>
      ))}
      <div className="b"></div>
    </Card>
  );
};
