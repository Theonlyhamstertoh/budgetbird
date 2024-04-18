import React from "react";

type RecentTransactionProps = {
    name: string;
    category: string;
    cost: number;
};

function RecentTransaction({ name, category, cost }: RecentTransactionProps) {
    return (
        <div className="recent-transaction">
            <h3>Recent Transaction</h3>
            <div className="transaction-details">
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{name}</p>
                <div className="cost">
                    <p className="category">{category}</p>
                    <p className="amount">-{cost.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}

export default RecentTransaction;