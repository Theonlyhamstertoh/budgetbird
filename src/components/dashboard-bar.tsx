import React from "react";
import Link from "next/link";

/**
 *
 * @assignee Sophia
 * @task Dashbaord Sidebar
 *
 */

function DashboardSidebar() {
    return (
        <div className="bg-emerald-900 shrink-0  flex flex-col items-center h-screen w-72">
            <div className="flex items-center my-10">
                <img src="/lucide_bird.svg" alt="BudgetBird" width="30" height="30" className="mr-2" />
                <h1 className="text-emerald-400">BudgetBird</h1>
            </div>
            <ul className="list-none">
                <li className="rounded-sm text-white hover:invert hover:bg-black flex items-center py-3 pr-16 pl-4">
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
            <div className="mt-auto text-white flex items-center rounded-sm hover:invert hover:bg-black pl-4 pr-4 pb-3">
                <img src="/signout.svg" alt="Bird Logo" width="20" height="20" className="mt-2 mr-2" />
                <button className="mt-2">sign out</button>
            </div>
        </div>
    );
}

export default DashboardSidebar;
