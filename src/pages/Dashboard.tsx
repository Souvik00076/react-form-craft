import { FC } from "react";
import { PollCard } from "../components/cards";

export const Dashboard: FC = () => {
  return (
    <div className="flex gap-x-2 items-center justify-center">
      <PollCard
        nameClass={"shadow-pollcard-shadow-blue"}
        title={"Total visits"}
        subTitle={"All time form visits"}
        icon={"hello"}
        value={6}
        isPercentage={false}
      />
      <PollCard
        nameClass={"shadow-pollcard-shadow-yellow"}
        title={"Total visits"}
        subTitle={"All time form visits"}
        icon={"hello"}
        value={6}
        isPercentage={false}
      />
      <PollCard
        nameClass={"shadow-pollcard-shadow-green"}
        title={"Total visits"}
        subTitle={"All time form visits"}
        icon={"hello"}
        value={6}
        isPercentage={false}
      />
      <PollCard
        nameClass={"shadow-pollcard-shadow-red"}
        title={"Total visits"}
        subTitle={"All time form visits"}
        icon={"hello"}
        value={6}
        isPercentage={false}
      />
    </div>
  );
};
