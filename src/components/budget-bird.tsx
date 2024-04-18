/**
 *
 *
 * @assignee Raquel
 * @task use tailwindcss classes to format the classes horizontally
 * @returns "🐓 BudgetBird"
 */
import { BirdIcon } from "lucide-react";
import React from "react";

//
function BudgetBird() {
    return (
        <div className="flex items-center text-stone-800">
            {/* <img src="/bird-logo.png" alt="BudgetBird" className ="w-6 h-6" /> */}
            <BirdIcon className="size-6 mr-1  " />
            <span className=" text-lg font-semibold  tracking-wide">BudgetBird</span>
        </div>
    );
}

export default BudgetBird;
