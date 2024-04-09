import React from "react";
import BudgetBird from "@/src/components/budget-bird";
function CompletionPage() {
    return (
<div className="relative bg-[#FAF8F5] flex flex-col items-center h-screen pt-4">
        <BudgetBird />
        <div className=" text-xl font-bold   my-4">You are all set!</div>
        <img className="w-56"  src="/group47.png"/>
        <div className="text-xl font-bold my-4">Let’s go to your dashboard!</div>
    </div>

);
}

export default CompletionPage;
