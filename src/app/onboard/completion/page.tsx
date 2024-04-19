import React from "react";
import BudgetBird from "@/src/components/budget-bird";
import OnboardingBar from "@/src/components/onboard-bar";
import Image from "next/image";
export default function CompletionPage() {
    return (
        <div className="flex flex-col min-h-screen pt-8 bg-[#FAF8F5]">
            <div className="flex flex-col items-center grow ">
                <BudgetBird />
                <div className=" text-2xl font-bold   my-4">You are all set!</div>
                <Image width="200" height="200" alt="banner" className="w-56" src="/group47.png" />
                <div className="text-xl font-bold my-4">Let’s go to your dashboard!</div>
            </div>

            <OnboardingBar prevHref="/onboard/categories" nextHref="/dashboard" />
        </div>
    );
}
