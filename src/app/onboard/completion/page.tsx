import React from "react";
import BudgetBird from "@/src/components/budget-bird";
function CompletionPage() {
    return (
<div className="relative bg-[#FAF8F5] flex flex-col items-center h-screen pt-4">

        {/* cool we are done! */}

        {/* now lets commit, */}
        {/* we can do it through the terminal, we can also do it through vscode */}
    
        {/*  try click source control on the left sidebar*/}

        {/* hmm it might need to be added */}
        <BudgetBird />
        {/* // You are all set! */}
        <div className=" text-xl font-bold   my-4">You are all set!</div>
        {/* // Image */}
        <img className="w-56"  src="/group47.png"/>
        {/* // Let's go to your dashboard! */}
        <div className="text-xl font-bold my-4">Let’s go to your dashboard!</div>
    </div>

);
}

export default CompletionPage;
