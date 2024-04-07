import React from "react";

type BudgetProps = {
    category: string;
    budget: number;
    spent: number;
};
/**
 *  *
 * @assignee Andrew
 * @task Display Budget state with and without progress bar
 * @returns
 *
 */
function BudgetCard({ category, budget, spent }: BudgetProps) {
    return <div>BudgetCard</div>;
}

export default BudgetCard;
