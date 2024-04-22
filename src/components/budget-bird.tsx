/**
 *
 *
 * @assignee Raquel
 * @task use tailwindcss classes to format the classes horizontally
 * @returns "🐓 BudgetBird"
 */
import { BirdIcon } from "lucide-react";
import React from "react";
import { cn } from "../lib/utils";

//
function BudgetBird({ className }: any) {
    return (
        <div className={cn("flex items-center text-stone-800 ", className)}>
            {/* <img src="/bird-logo.png" alt="BudgetBird" className ="w-6 h-6" /> */}
            <BirdIcon className="size-6 mr-1  " />
            <span className=" text-lg font-medium  tracking-wide">BudgetBird</span>
        </div>
    );
}

export default BudgetBird;
