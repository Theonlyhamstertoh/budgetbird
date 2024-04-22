import React from "react";

type MonthSpendingProps = {
    spent: number;
    budget: number;
};

function TotalMonthSpendingCard({ spent, budget }: MonthSpendingProps) {
    return (
        <div
            className="bg-white rounded-md p-6 border-stone-200/90 border  flex  flex-col justify-center h-fit"
            style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
        >
            <h3 className="font-semibold text-stone-700 text-lg">Total Monthly Spendings</h3>
            <div className="">
                <p className="text-4xl my-2 font-semibold">${spent}</p>
                <p>out of ${budget} budgeted</p>
            </div>
        </div>
    );
}

export default TotalMonthSpendingCard;
