import { FC } from "react";
import { FormInfo } from "../components";

export const Dashboard: FC = () => {
  return (
    <div className=" px-24 py-8 flex flex-col gap-y-16">
      <FormInfo />
      <h1 className="text-4xl font-bold ">Your Forms</h1>
    </div>
  );
};
