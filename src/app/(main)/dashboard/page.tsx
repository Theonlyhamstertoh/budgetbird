"use client";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { Suspense, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { BudgetCardWithProgressBar, BudgetCardWithoutProgressBar } from "@/src/components/budget-progress";
import TotalMonthSpendingCard from "@/src/components/total-month-spending";
import DashboardSidebar from "@/src/components/dashboard-bar";
import RecentTransaction from "@/src/components/recent-transaction";
import TransactionsTopBar from "@/src/components/transactions-top-bar";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js/auto";
import { useBudgetStore } from "../../store";
import { Button } from "@/src/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
    const { transactions, categories, savings, income } = useBudgetStore(
        ({ transactions, categories, savings, income }) => ({
            transactions,
            savings,
            income,
            categories,
        })
    );

    const expenseTransactions = transactions.filter((transaction) => transaction.type === "Expense");

    const latestTransaction = expenseTransactions[expenseTransactions.length - 1];
    let totalSpending = 0;

    const categoryTotals: Record<string, number> = expenseTransactions.reduce(
        (totals: Record<string, number>, transactions) => {
            const { category, amount } = transactions;
            totals[category] = (totals[category] || 0) + amount;
            return totals;
        },
        {}
    );

    for (const key in categoryTotals) {
        totalSpending += categoryTotals[key];
    }

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
                        <h3 className="font-semibold text-stone-700 text-lg">Total Spendings</h3>
                        <Pie data={data} options={options} />
                    </div>

                    {/* Top right content */}
                    <div className="w-full space-y-6">
                        {latestTransaction && (
                            <RecentTransaction
                                name={latestTransaction.name}
                                category={latestTransaction.category}
                                cost={latestTransaction.amount}
                            />
                        )}
                        <TotalMonthSpendingCard spent={totalSpending} budget={Number(income) - Number(savings)} />
                    </div>
                </div>

                {/* Heading for the budget grid */}
                <h2 className="font-bold text-lg flex gap-2 items-center mt-10 text-stone-600">
                    Budgets
                    <Button variant="outline" asChild>
                        <Link href="/onboard/categories">
                            Add Category <PlusIcon className="ml-2 size-4" />
                        </Link>
                    </Button>
                </h2>

                {/* Container for the budget card grid */}
                <div className="flex w-full flex-wrap gap-4 p-8 pl-0">
                    <Suspense>
                        {/* MAP ARRAY HERE */}
                        {categories.map((c) => {
                            if (c.name === "Income") return;
                            return (
                                <BudgetCardWithProgressBar
                                    key={c.id}
                                    id={c.id}
                                    category={c.name}
                                    budget={c.budget}
                                    spent={categoryTotals[c.name] !== undefined ? categoryTotals[c.name] : 0}
                                    emoji={c.emoji}
                                />
                            );
                        })}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
