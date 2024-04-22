import React from "react";
import Link from "next/link";
import BudgetBird from "./budget-bird";

/**
 *
 * @assignee Sophia
 * @task Dashbaord Sidebar
 *
 */

function DashboardSidebar() {
    return (
        <div className="bg-emerald-900 shrink-0  flex flex-col gap-4 p-8 items-center h-screen w-72">
            <BudgetBird className="text-emerald-400 " />
            <ul className="list-none ">
                <li className="rounded-sm transition text-white hover:invert hover:bg-black flex items-center py-3 pr-16 pl-4">
                    <img src="/house.svg" alt="Bird Logo" className=" mr-2" />
                    <Link href="/dashboard">Dashboard</Link>
                </li>
                <li className="rounded-sm text-white hover:invert hover:bg-black flex items-center py-3 pr-16 pl-4 mt-4">
                    <img src="/transactions1.svg" alt="Bird Logo" className="mr-2" />
                    <Link href="/transaction" className="text-white">
                        Transactions
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default DashboardSidebar;
