import { FC } from "react";
import { mergeClass } from "../../utils";
type TCreateFromProps = {
  nameClass: string;
};
export const CreateForm: FC<TCreateFromProps> = ({ nameClass }) => {
  return <div className={mergeClass("w-[400px] rounded-lg ", nameClass)}></div>;
};
