/**
 *
 *
 * @assignee Raquel
 * @task use tailwindcss classes to format the classes horizontally
 * @returns "🐓 BudgetBird"
 */
import React from "react";

    

//
function BudgetBird() {
    return (
    <div className ="flex items-center">
        <img src="/bird-logo.png" alt="BudgetBird" className ="w-6 h-6" />
        <span className ="text-neutral-900 text-xl font-semibold font-['Plus Jakarta Sans'] tracking-wide" >BudgetBird</span>
    </div>
      
);
}

export default BudgetBird;
