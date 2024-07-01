import { FC } from "react";
import { PollCard } from "../cards";
import {
  VisitIcon,
  SubmissionIcon,
  SubmissionRateIcon,
  BounceRateIcon,
} from "../../constants/imageIndex";
export const FormInfo: FC = () => {
  return (
    <div className="flex items-center  justify-between">
      <PollCard
        nameClass={"shadow-pollcard-shadow-blue"}
        title={"Total visits"}
        subTitle={"All time form visits"}
        icon={VisitIcon}
        value={6}
        isPercentage={false}
      />
      <PollCard
        nameClass={"shadow-pollcard-shadow-yellow"}
        title={"Total visits"}
        subTitle={"All time form visits"}
        value={6}
        icon={SubmissionIcon}
        isPercentage={false}
      />
      <PollCard
        nameClass={"shadow-pollcard-shadow-green"}
        title={"Total visits"}
        subTitle={"All time form visits"}
        icon={SubmissionRateIcon}
        value={6}
        isPercentage={false}
      />
      <PollCard
        nameClass={"shadow-pollcard-shadow-red"}
        title={"Total visits"}
        subTitle={"All time form visits"}
        icon={BounceRateIcon}
        value={6}
        isPercentage={false}
      />
    </div>
  );
};
