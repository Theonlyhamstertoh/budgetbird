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

export default function Dashboard() {
    return (
        <div className="dashboard-container w-full">
            <div className="main-content">
                {/* Content for the main section */}
                <div className="graph-container">
                    <img src="/graph.png" alt="Graph Placeholder" className="graph-placeholder" />
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
                        <BudgetCardWithProgressBar category="Automotive" budget={300} spent={150} icon="/car.png" />
                        <BudgetCardWithProgressBar
                            category="Groceries"
                            budget={300}
                            spent={150}
                            icon="/groceries.png"
                        />
                        <BudgetCardWithProgressBar category="Gas" budget={300} spent={150} icon="/gas.png" />
                        <BudgetCardWithProgressBar category="Shopping" budget={300} spent={150} icon="/shopping.png" />
                        <BudgetCardWithProgressBar
                            category="Traveling"
                            budget={300}
                            spent={150}
                            icon="/traveling.png"
                        />
                        <BudgetCardWithProgressBar category="Food & Drinks" budget={300} spent={150} icon="/food.png" />
                        <BudgetCardWithProgressBar category="Dancing" budget={300} spent={150} icon="/dancing.png" />
                        <BudgetCardWithProgressBar category="Rent" budget={300} spent={150} icon="/rent.png" />
                        {/* Add more instances with different icons as needed */}
                    </div>
                </div>
            </div>
        </div>
    );
}
