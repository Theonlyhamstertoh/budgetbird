import React from "react";

type RecentTransactionProps = {
    name: string;
    category: string;
    cost: number;
};

function RecentTransaction({ name, category, cost }: RecentTransactionProps) {
    return (
        <div
            className="bg-white rounded-md p-6 border-stone-200/90 border  flex  flex-col justify-center h-fit"
            style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
        >
            <h3 className="font-semibold text-stone-700 text-lg">Recent Transaction</h3>
            <div className="">
                <p className="text-2xl text-stone-800 font-medium">{name}</p>
                <div className="flex justify-between mt-2 items-center">
                    <p className="bg-stone-200 p-1  px-3 rounded-md">{category}</p>
                    <p className="text-red-600 font-medium">-{cost.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}

export default RecentTransaction;
