import React from "react";
import BudgetBird from "@/src/components/budget-bird";
export default function CompletionPage() {
    return (
        <div className=" flex flex-col items-center ">
            <BudgetBird />
            <div className=" text-xl font-bold   my-4">You are all set!</div>
            <img className="w-56" src="/group47.png" />
            <div className="text-xl font-bold my-4">Let’s go to your dashboard!</div>
        </div>
    );
}
