import React from "react";

type OverviewCardProps = {
    icon: string;
    category: string;
    money: number;
};
/**
 *
 * @assignee Zophia
 * @task Overview cards for transaction page (income, expense, total)
 *
 */

function OverviewCard({ icon, category, money }: OverviewCardProps) {
    return <div>OverviewCard</div>;
}

export default OverviewCard;
