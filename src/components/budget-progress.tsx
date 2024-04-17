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
 * @returns budget state with progress bar.
 *
 */
function BudgetCardWithProgressBar({ category, budget, spent }: BudgetProps) {
    // Calculate percentage spent
    const percentageSpent = (spent / budget) * 100;

    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "30px",
                marginBottom: "5px",
                position: "relative", // Position relative for absolute positioning of logo
                backgroundColor: "white",
            }}
        >
            <img
                src="car.png"
                alt="Small Logo"
                style={{
                    width: "30px",
                    height: "auto",
                    position: "absolute", // Position absolute for positioning inside container
                    top: "10px", // Adjust top positioning as needed
                    left: "10px", // Adjust right positioning as needed
                }}
            />
            <img
                src="exit.png"
                alt="Small Logo"
                style={{
                    width: "20px",
                    height: "auto",
                    position: "absolute", // Position absolute for positioning inside container
                    top: "10px", // Adjust top positioning as needed
                    right: "10px", // Adjust right positioning as needed
                }}
            />
            <h3 style={{ fontWeight: "bold", fontSize: "25px", textAlign: "center" }}>{category}</h3>
            <p style={{ textAlign: "center" }}>Total Budget: ${budget}</p>
            <p style={{ textAlign: "center" }}>Amount Spent: ${spent}</p>
            <div
                style={{
                    position: "relative",
                    height: "10px",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "10px",
                    marginTop: "15px",
                    marginBottom: "15px",
                    width: "100%", // Ensure the progress bar spans the full width
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        backgroundColor: "#007bff",
                        height: "100%",
                        width: `${percentageSpent}%`,
                        borderRadius: "3px",
                    }}
                ></div>
                <div
                    style={{
                        position: "absolute",
                        bottom: "-30px",
                        left: "0",
                        color: "#000",
                    }}
                >
                    ${spent.toFixed(2)}
                </div>
                <div
                    style={{
                        position: "absolute",
                        bottom: "-30px",
                        right: "0",
                        color: "#000",
                    }}
                >
                    ${budget.toFixed(2)}
                </div>
            </div>
        </div>
    );
}

function BudgetCardWithoutProgressBar({ category, budget, spent }: BudgetProps) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "30px",
                marginBottom: "5px",
                position: "relative", // Position relative for absolute positioning of png
                backgroundColor: "white",
            }}
        >
            <img
                src="car.png"
                alt="Small Logo"
                style={{
                    width: "30px",
                    height: "auto",
                    position: "absolute", // Position absolute for positioning inside container
                    top: "10px", // Adjust top positioning
                    left: "10px", // Adjust right positioning
                }}
            />
            <img
                src="exit.png"
                alt="Small Logo"
                style={{
                    width: "20px",
                    height: "auto",
                    position: "absolute", // Position absolute for positioning inside container
                    top: "10px", // Adjust top positioning
                    right: "10px", // Adjust right positioning
                }}
            />
            <h3 style={{ fontWeight: "bold", fontSize: "25px", textAlign: "center" }}>{category}</h3>
            <p style={{ textAlign: "center" }}>Total Budget: ${budget}</p>
            <p style={{ textAlign: "center" }}>Amount Spent: ${spent}</p>
        </div>
    );
}

export { BudgetCardWithProgressBar, BudgetCardWithoutProgressBar };
