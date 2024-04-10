import React from "react";

type MonthSpendingProps = {
    spent: number;
    budget: number;
};

/**
 *  *
 * @assignee Andrew
 * @task Display the total month spending
 *
 */

function TotalMonthSpendingCard({ spent, budget }: MonthSpendingProps) {
    return (
        <div style={{ 
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '20px',
            marginBottom: '20px',
            width: '400px', // Set a fixed width
            height: '200px', // Set a fixed height
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            backgroundColor: 'white',
        }}>
            <h3>Total Month Spendings</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>${spent}</p>
            <p>out of ${budget} budgeted</p>
        </div>
    );
}

export default TotalMonthSpendingCard;