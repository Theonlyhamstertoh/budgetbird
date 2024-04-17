/* import React from "react";

type BudgetProps = {
    category: string;
    budget: number;
    spent: number;
};

 *  *
 * @assignee Andrew
 * @task Display Budget state with and without progress bar
 * @returns budget state with progress bar. 
 *

function BudgetCardWithProgressBar({ category, budget, spent }: BudgetProps) {
    // Calculate percentage spent
    const percentageSpent = (spent / budget) * 100;

    return (
        <div style={{ 
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '30px',
            marginBottom: '5px',
            position: 'relative', // Position relative for absolute positioning of logo
            backgroundColor: 'white',
        }}>
            <img src="car.png" alt="Small Logo" style={{
                width: '30px',
                height: 'auto',
                position: 'absolute', // Position absolute for positioning inside container
                top: '10px', // Adjust top positioning as needed
                left: '10px' // Adjust right positioning as needed
            }} />
            <img src="exit.png" alt="Small Logo" style={{
                width: '20px',
                height: 'auto',
                position: 'absolute', // Position absolute for positioning inside container
                top: '10px', // Adjust top positioning as needed
                right: '10px' // Adjust right positioning as needed
            }} />
            <h3 style={{ fontWeight: 'bold', fontSize: '25px', textAlign: 'center' }}>{category}</h3>
            <p style={{ textAlign: 'center' }}>Total Budget: ${budget}</p>
            <p style={{ textAlign: 'center' }}>Amount Spent: ${spent}</p>
            <div style={{ 
                position: 'relative',
                height: '10px',
                backgroundColor: '#f0f0f0',
                borderRadius: '10px',
                marginTop: '15px',
                marginBottom: '15px',
                width: '100%' // Ensure the progress bar spans the full width
            }}>
                <div style={{ 
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    backgroundColor: '#007bff',
                    height: '100%',
                    width: `${percentageSpent}%`,
                    borderRadius: '3px'
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: '0',
                    color: '#000'
                }}>${spent.toFixed(2)}</div>
                <div style={{
                    position: 'absolute',
                    bottom: '-30px',
                    right: '0',
                    color: '#000'
                }}>${budget.toFixed(2)}</div>
            </div>
        </div>
    );
}


function BudgetCardWithoutProgressBar({ category, budget, spent }: BudgetProps) {
    return (
        <div className = 'rounded-md drop-shadow-md h-44' style={{ 
            border: '1px rounded #E4E4E7',
            borderRadius: '5px',
            padding: '20px',
            marginBottom: '5px',
            position: 'relative', // Position relative for absolute positioning of png
            backgroundColor: '#FAFAFA',
        }}>
            <img src="car.png" alt="Small Logo" style={{
                width: '30px',
                height: 'auto',
                position: 'absolute', // Position absolute for positioning inside container
                top: '10px', // Adjust top positioning
                left: '10px' // Adjust right positioning 
            }} />
            <img src="exit.png" alt="Small Logo" style={{
                width: '20px',
                height: 'auto',
                position: 'absolute', // Position absolute for positioning inside container
                top: '10px', // Adjust top positioning 
                right: '10px' // Adjust right positioning 
            }} />
            <div className=" flex flex-col items-left p-15">
                <h3 className=" text-xl text-justify font-semibold text-zinc-600 pt-12">{category}</h3>
                <p className ="w-[194px] text-justify text-zinc-600 text-sm font-medium font-['Plus Jakarta Sans']">Budget: ${budget}</p>
            </div>
        </div>
    );
}


export { BudgetCardWithProgressBar, BudgetCardWithoutProgressBar };
 */


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
