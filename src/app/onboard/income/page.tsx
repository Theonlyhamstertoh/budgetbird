"use client";
import React, { useEffect, useState } from "react";
import BudgetBird from "@/src/components/budget-bird";
import OnboardingBar from "@/src/components/onboard-bar";
import Image from "next/image";
import InputField from "@/src/components/input-field";
import { EqualIcon } from "lucide-react";
import { Input } from "@/src/components/ui/input";
import { useBudgetStore } from "../../store";
export default function CompletionPage() {
    const [savings, editSavings, income, editIncome] = useBudgetStore((s) => [
        s.savings,
        s.editSavings,
        s.income,
        s.editIncome,
    ]);

    useEffect(() => {
        console.log(income, savings);
    });
    return (
        <div className="flex flex-col min-h-screen pt-8 bg-[#FAF8F5]">
            <div className="flex flex-col items-center grow max-w-2xl mx-auto w-fit ">
                <BudgetBird />
                <div className=" text-2xl font-bold   my-4">Let's start setting up your budget!</div>
                <Image width="200" height="200" alt="banner" className="w-56" src="/coin-money.png" />

                <div className="space-y-4">
                    <div className="text-md  my-4 text-left">What is your income and savings?</div>

                    <InputField label={"Income"} icon="/wallet.png" setValue={editIncome} />

                    <InputField label={"Savings Target"} value={savings} icon="/piggy.png" setValue={editSavings} />
                    <div className="h-20 items-center  flex justify-center">
                        <EqualIcon />
                    </div>
                    <InputField
                        label={"Your Monthly Budget"}
                        icon="/wallet.png"
                        disabled
                        placeholder={income - savings}
                    />
                </div>
            </div>

            <OnboardingBar prevHref="/" nextHref="/onboard/categories" />
        </div>
    );
}
