import { FC } from "react";
import { mergeClass } from "../../utils";
import { useTheme } from "../../hooks";

type TPollCardType = {
  className: string;
  title: string;
  subTitle: string;
  value: number;
  isPercentage: boolean;
  icon: string;
};

export const PollCard: FC<TPollCardType> = ({
  className,
  title,
  subTitle,
  value,
  isPercentage,
  icon,
}) => {
  const themeContext = useTheme();
  return (
    <div
      className={mergeClass(
        `
      w-[300px]
      h-[200px]
      rounded-md
      ${themeContext.theme ? "text-black" : "text-gray-300"}
      p-4
      flex
      items-center
      justify-between
`,
        className,
      )}
    >
      <div className="flex flex-col gap-y-2">
        <span className="text-bold">{title}</span>
        <span className="text-xl">{isPercentage ? value + "%" : value}</span>
        <span className="text-sm">{subTitle}</span>
      </div>
      <img src={icon} alt="Image Icon" />
    </div>
  );
};