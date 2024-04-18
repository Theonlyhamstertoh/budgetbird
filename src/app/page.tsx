"use client";
import Image from "next/image";
import { useState } from "react";
// import { createClient } from "@supabase/supabase-js";
import InputField from "../components/input-field";
import { BudgetCardWithoutProgressBar, BudgetCardWithProgressBar } from "../components/budget-progress";
import TotalMonthSpendingCard from "../components/total-month-spending";
import Button, { GreenButton } from "../components/button";
import BudgetBird from "../components/budget-bird";
import DashboardSidebar from "../components/dashboard-bar";
import OnboardingBar from "../components/onboard-bar";
import OverviewCard from "../components/transaction/overview-card";
import AddCategoryButton from "../components/category-add-button";
import AddIncomeExpense, { AddExpense } from "../components/AddIncomeExpense";
import TransactionsTopBar from "../components/transactions-top-bar";
import { propagateServerField } from "next/dist/server/lib/render-server";

// function Button() {
//     return (

//     )
// }

// function Navbar() {

// }

export default function HomePage() {
    function onClickHandler() {}
    return (
        <div className="bg-[#FAF8F5] h-screen w-full space-y-2">
            {/* Logo + BudgetBird */}
            {/* <img src="/bird-logo.png" /> */}
            <div>
                <Image src="/bird-logo.png" alt="BudgetBird" width="30" height="30" />
                <span>BudgetBird</span>
            </div>
            {/* Header (Let's Start Setting Up Your Budget) */}
            <div className="heading">
                <h2 className="text-2xl">Let's Start Setting Up Your Budget</h2>
            </div>

            {/*budgetprogressbar */}
            <div>
                <div
                    style={{
                        maxWidth: "400px",
                        margin: "0 auto",
                        borderRadius: "10px",
                        position: "relative", // Position relative for absolute positioning
                    }}
                >
                    <div style={{ paddingLeft: "90px" }}>
                        {" "}
                        {/* Adjust padding to make space for the logo */}
                        {/* <BudgetCardWithProgressBar category="Automotive" budget={300} spent={180} /> */}
                        {/* <BudgetCardWithoutProgressBar category="Automotive" budget={200} spent={100} /> */}
                        {/* Total month spending card */}
                        <TotalMonthSpendingCard spent={580} budget={3000} />
                        {/* Add more BudgetCard components for other categories as needed */}
                    </div>
                </div>
            </div>
            {/* Coin Money  */}
            <Image src="/coin-money.png" alt="Coin And Money " width="200" height="200" />
            <p className="text-black text-lg">What is your income and savings?</p>
            <div className="bg-gray-200 h-10 w-60 my-2"></div>
            <div className="bg-gray-200 h-10 w-60 my-2"></div>
            <InputField label="poop" icon="/bird-logo.png" placeholder="2000" />
            {/* <div className="" */}
            <button className="text-black bg-white  p-5 rounded cursor-pointer float-right">Save and Continue</button>
            <AddIncomeExpense />
            <AddExpense />
            {/* <TransactionsTopBar onSwitchMonth="" onSwitchView="" monthLabel="March" addIncome="" /> */}
        </div>
    );
}
