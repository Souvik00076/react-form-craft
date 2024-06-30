import { ChangeEvent, FC } from "react";
import { mergeClass } from "../../../utils";

type TTextInputAuthType = {
  className?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
  title?: string;
};
export const TextInputAuth: FC<TTextInputAuthType> = ({
  className,
  value,
  onChange,
  placeHolder,
  title,
}) => {
  return (
    <label
      className={mergeClass(
        "input input-bordered flex items-center gap-2 text-black",
        className,
      )}
    >
      {title}
      <input
        type="text"
        className="grow"
        placeholder={placeHolder}
        onChange={onChange}
        value={value}
      />
    </label>
  );
};
