"use client";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import {
  BudgetCardWithProgressBar,
  BudgetCardWithoutProgressBar,
} from "@/src/components/budget-progress";
import TotalMonthSpendingCard from "@/src/components/total-month-spending";
import DashboardSidebar from "@/src/components/dashboard-bar";
import RecentTransaction from "@/src/components/recent-transaction";
import TransactionsTopBar from "@/src/components/transactions-top-bar";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js/auto";
import { useBudgetStore } from "../../store";

export default function Dashboard() {
  const { transactions, categories } = useBudgetStore(
    ({ transactions, categories }) => ({
      transactions,
      categories,
    })
  );

  const expenseTransactions = transactions.filter(
    (transaction) => transaction.type === "Expense"
  );

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
    <div className="dashboard-container w-full">
      <div className="main-content">
        {/* Content for the main section */}
        <div className="graph-container">
          <Pie data={data} options={options} />
          {/* <img src="/graph.png" alt="Graph Placeholder" className="graph-placeholder" /> */}
        </div>

        {/* Top right content */}
        <div className="top-right-content">
          <RecentTransaction name="Walmart" category="Groceries" cost={60} />
          <TotalMonthSpendingCard spent={580} budget={3000} />
        </div>

        {/* Heading for the budget grid */}
        <h2 className="budgets-heading">Budgets</h2>

        {/* Container for the budget card grid */}
        <div className="budget-grid-container">
          <div className="budget-grid">
            <BudgetCardWithProgressBar
              category="Automotive"
              budget={300}
              spent={150}
              icon="/car.png"
            />
            <BudgetCardWithProgressBar
              category="Groceries"
              budget={300}
              spent={150}
              icon="/groceries.png"
            />
            <BudgetCardWithProgressBar
              category="Gas"
              budget={300}
              spent={150}
              icon="/gas.png"
            />
            <BudgetCardWithProgressBar
              category="Shopping"
              budget={300}
              spent={150}
              icon="/shopping.png"
            />
            <BudgetCardWithProgressBar
              category="Traveling"
              budget={300}
              spent={150}
              icon="/traveling.png"
            />
            <BudgetCardWithProgressBar
              category="Food & Drinks"
              budget={300}
              spent={150}
              icon="/food.png"
            />
            <BudgetCardWithProgressBar
              category="Dancing"
              budget={300}
              spent={150}
              icon="/dancing.png"
            />
            <BudgetCardWithProgressBar
              category="Rent"
              budget={300}
              spent={150}
              icon="/rent.png"
            />
            {/* Add more instances with different icons as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
