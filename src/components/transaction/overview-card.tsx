import React from "react";

type OverviewCardProps = {
  icon: string;
  category: string;
  money: number;
  moneyColor: string;
};
/**
 *
 * @assignee Zophia
 * @task Overview cards for transaction page (income, expense, total)
 *
 */

function OverviewCard({
  icon,
  category,
  money,
  moneyColor,
}: OverviewCardProps) {
  return (
    <div className="bg-[#FAFAFA] rounded-md w-80 drop-shadow-md m-5">
      <div className="p-5">
        <img src={icon} alt="icon" className="w-8" />
        <h3 className="text-xl font-semibold text-[#52525B] my-2">
          {category}
        </h3>
        <h1 className={`text-4xl font-bold  ${moneyColor} my-2`}>
          ${money.toLocaleString()}
        </h1>
      </div>
    </div>
  );
}

export default OverviewCard;
