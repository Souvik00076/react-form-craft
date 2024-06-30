import { FC } from "react";
import { mergeClass } from "../../utils";
type TAuthButtonType = {
  text: string;
  className: string;
  onClick: () => void;
};
export const AuthButton: FC<TAuthButtonType> = ({
  text,
  className,
  onClick,
}) => {
  console.log(mergeClass("px-6 py-2 rounded-md w-[100px]", className));
  return (
    <button
      className={mergeClass("px-6 py-2 rounded-md w-[100px]", className)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
