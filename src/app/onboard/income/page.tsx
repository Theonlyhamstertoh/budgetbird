import React from "react";
import BudgetBird from "@/src/components/budget-bird";
import OnboardingBar from "@/src/components/onboard-bar";
import Image from "next/image";
import InputField from "@/src/components/input-field";
import { EqualIcon } from "lucide-react";
export default function CompletionPage() {
    return (
        <div className="flex flex-col min-h-screen pt-8 bg-[#FAF8F5]">
            <div className="flex flex-col items-center grow max-w-2xl mx-auto w-fit ">
                <BudgetBird />
                <div className=" text-2xl font-bold   my-4">Let's start setting up your budget!</div>
                <Image width="200" height="200" alt="banner" className="w-56" src="/coin-money.png" />

                <div className="space-y-4">
                    <div className="text-md  my-4 text-left">What is your income and savings?</div>
                    <InputField label={"Income"} icon="/wallet.png" />
                    <InputField label={"Savings Target"} icon="/piggy.png" />
                    <div className="h-20 items-center  flex justify-center">
                        <EqualIcon />
                    </div>
                    <InputField label={"Your Monthly Budget"} icon="/wallet.png" disabled placeholder={40} />
                </div>
            </div>

            <OnboardingBar prevHref="/" nextHref="/onboard/categories" />
        </div>
    );
}
