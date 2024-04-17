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
    return (
        <div className="budget-card">
            <img src={icon} alt="Icon" className="icon" />
            <img src="/exit.png" alt="Exit Logo" className="exit-logo" />
            <h3 className="category">{category}</h3>
            <p className="info">Total Budget: ${budget}</p>
            <p className="info">Amount Spent: ${spent}</p>
        </div>
    );
}


export { BudgetCardWithProgressBar, BudgetCardWithoutProgressBar };
