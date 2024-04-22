"use client";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { BudgetCardWithProgressBar, BudgetCardWithoutProgressBar } from "@/src/components/budget-progress";
import TotalMonthSpendingCard from "@/src/components/total-month-spending";
import DashboardSidebar from "@/src/components/dashboard-bar";
import RecentTransaction from "@/src/components/recent-transaction";
import TransactionsTopBar from "@/src/components/transactions-top-bar";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js/auto";
import { useBudgetStore } from "../../store";

export default function Dashboard() {
    const { transactions, categories } = useBudgetStore(({ transactions, categories }) => ({
        transactions,
        categories,
    }));

    const expenseTransactions = transactions.filter((transaction) => transaction.type === "Expense");

    const categoryTotals: Record<string, number> = expenseTransactions.reduce(
        (totals: Record<string, number>, transactions) => {
            const { category, amount } = transactions;
            totals[category] = (totals[category] || 0) + amount;
            return totals;
        },
        {}
    );

    // Extract labels (categories) and amounts from the grouped data
    const labels: string[] = Object.keys(categoryTotals);
    const amounts: number[] = Object.values(categoryTotals);

    Chart.register(ArcElement);
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Amount ($)",
                data: amounts,
                backgroundColor: [
                    "rgba(179, 125, 232, 0.4)",
                    "rgba(125, 232, 232, 0.4)",
                    "rgba(178, 232, 125, 0.4)",
                    "rgba(232, 125, 125, 0.4)",
                ],
                borderColor: [
                    "rgba(179, 125, 232, 1)",
                    "rgba(125, 232, 232, 1)",
                    "rgba(178, 232, 125, 1)",
                    "rgba(232, 125, 125, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        plugins: {
            legend: {
                position: "right", // Display legend on the right side
                labels: {
                    boxWidth: 20, // Adjust the width of the legend box
                },
            },
        },
    };

    return (
        <div className="container bg-[#FAF8F5] p-8">
            <div className="">
                {/* Pie Chart */}
                <div className=" flex gap-6">
                    <div
                        className="bg-white rounded-md p-12 border-stone-200/90 border shrink-0 w-[500px] h-[400px] flex  flex-col justify-center h-fit"
                        style={{ boxShadow: "0px 6px 0px 0 rgba(0,0,0,0.05)" }}
                    >
                        <h3 className="font-semibold text-stone-700 text-lg">Monthly Spendings</h3>
                        <Pie data={data} clas options={options} />
                    </div>

                    {/* Top right content */}
                    <div className="w-full space-y-6">
                        <RecentTransaction name="Walmart" category="Groceries" cost={60} />
                        <TotalMonthSpendingCard spent={580} budget={3000} />
                    </div>
                </div>

                {/* Heading for the budget grid */}
                <h2 className="budgets-heading">Budgets</h2>

                {/* Container for the budget card grid */}
                <div className=""></div>
            </div>
        </div>
    );
}
