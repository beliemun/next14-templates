import { colors } from "@/styles";

type FunctionalColorItemType = {
  lable: string;
  color: string;
};

export const FunctionalColorList: FunctionalColorItemType[] = [
  {
    lable: "Link",
    color: "blue6",
  },
  {
    lable: "Success",
    color: "green6",
  },
  {
    lable: "Warnning",
    color: "gold6",
  },
  {
    lable: "Error",
    color: "red5",
  },
];

export const FunctionalColorItem = ({ item }: { item: FunctionalColorItemType }) => {
  return (
    <div
      className="col-center w-[95%] h-10 opacity-90"
      style={{ backgroundColor: colors[item.color] }}
    >
      <div className="w-full flex flex-row justify-between items-center p-4">
        <span className="text-white">{item.lable}</span>
        <span className="text-white">{`${item.color}`}</span>
      </div>
    </div>
  );
};
