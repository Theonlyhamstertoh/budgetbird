import React from "react";

type TransactionProp = {
    name: string;
    category: string;
    cost: number;
};
/**
 *  *
 * @assignee Weibo
 * @task Display recent transaction
 * @returns
 *
 */
function BudgetCard({ category, name, cost }: TransactionProp) {
    return <div>BudgetCard</div>;
}

export default BudgetCard;
