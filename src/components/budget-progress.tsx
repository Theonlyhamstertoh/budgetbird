import React from "react";

type BudgetProps = {
    category: string;
    budget: number;
    spent: number;
    icon: string;
};
/**
 *  *
 * @assignee Andrew
 * @task Display Budget state with and without progress bar
 * @returns budget state with progress bar.
 *
 */
function BudgetCardWithProgressBar({ category, budget, spent, icon }: BudgetProps) {
    // Calculate percentage spent
    const percentageSpent = (spent / budget) * 100;

    return (
        <div className="budget-card">
            <img src={icon} alt="Icon" className="icon" />
            <img src="/exit.png" alt="Exit Logo" className="exit-logo" />
            <h3 className="category">{category}</h3>
            <p className="info">Total Budget: ${budget}</p>
            <p className="info">Amount Spent: ${spent}</p>
            <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${percentageSpent}%` }}></div>
                <div className="amount spent">${spent.toFixed(2)}</div>
                <div className="amount budget">${budget.toFixed(2)}</div>
            </div>
        </div>
    );
}

function BudgetCardWithoutProgressBar({ category, budget, spent, icon }: BudgetProps) {
    const percentageSpent = (spent / budget) * 100;

    return (
        <div className="budget-card bg-[#FAFAFA] rounded-md drop-shadow-md w-56 h-[162px] p-[15px] flex flex-col">
            <div className=" flex justify-between">
                <img src={icon} alt="Icon" className="icon w-7 h-7" />
                <img src="/pencil-alt.png" alt="Exit Logo" className="exit-logo w-6 h-6 relative" />
            </div>
            <h3 className="category text-justify text-zinc-600 text-xl font-semibold pt-3">{category}</h3>
            <p className="info text-sm text-justify font-medium text-zinc-600 mb-8">Budget: ${budget}</p>
            <div className="progress-bar-container">
                <div className="w-[194px] h-2 bg-zinc-300 rounded-3xl" />
            </div>
        </div>
    );
}

export { BudgetCardWithProgressBar, BudgetCardWithoutProgressBar };
