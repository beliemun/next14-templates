import { cn } from "@/styles";

export const MenuLayoutAvatar = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <div className={cn("col-center border-x border-x-white p-4")}>
      <div
        className={cn(
          "size-full border-2 border-dashed border-black/20 transition-all duration-200",
          collapsed ? "size-12 rounded-full" : "size-24 rounded-full"
        )}
      />
    </div>
  );
};
