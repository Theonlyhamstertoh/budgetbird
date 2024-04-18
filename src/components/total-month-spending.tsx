import React from "react";

type MonthSpendingProps = {
    spent: number;
    budget: number;
};

function TotalMonthSpendingCard({ spent, budget }: MonthSpendingProps) {
    return (
        <div className="total-month-spending-card"> {/* Apply the CSS class */}
            <h3>Total Month Spendings</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>${spent}</p>
            <p>out of ${budget} budgeted</p>
        </div>
    );
}

export default TotalMonthSpendingCard;