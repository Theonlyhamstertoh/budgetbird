"use client";
import React from "react";
import { Progress } from "./ui/progress";
import { Edit, PencilIcon } from "lucide-react";
import { Emoji, EmojiStyle } from "emoji-picker-react";

type BudgetProps = {
    category: string;
    budget: number;
    spent: number;
    emoji: string;
};
/**
 *  *
 * @assignee Andrew
 * @task Display Budget state with and without progress bar
 * @returns budget state with progress bar.
 *
 */
function BudgetCardWithProgressBar({ category, budget, spent, emoji }: BudgetProps) {
    const percentageSpent = Math.min((spent / budget) * 100, 1);

    return (
        <div
            className="bg-[#FAFAFA] rounded-md border-zinc-200/70 border  w-56 h-[162px] p-[15px] flex flex-col"
            style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
        >
            <div className=" flex justify-between">
                <Emoji unified={emoji} emojiStyle={EmojiStyle.TWITTER} size={25} />
                {/* <img src="/pencil-alt.png" alt="Exit Logo" className="exit-logo w-6 h-6 relative" /> */}
                <Edit className="size-5 text-stone-500" />
            </div>
            <h3 className="text-justify text-zinc-600 text-xl font-semibold pt-3">{category}</h3>
            <p className=" text-sm text-justify font-medium text-zinc-600">Budget: ${budget}</p>
            <Progress value={percentageSpent} className="shrink-0 mt-2" />
            <div className="flex justify-between w-full text-stone-400 text-sm mt-2">
                <div className="">${spent.toFixed(2)}</div>
                <div className="">${budget.toFixed(2)}</div>
            </div>
        </div>
    );
}

function BudgetCardWithoutProgressBar({ category, budget, spent, emoji }: BudgetProps) {
    const percentageSpent = (spent / budget) * 100;

    return (
        <div
            className="bg-[#FAFAFA] rounded-md border-zinc-200/70 border  w-56 h-[162px] p-[15px] flex flex-col"
            style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
        >
            <div className=" flex justify-between">
                <Emoji unified={emoji} emojiStyle={EmojiStyle.TWITTER} size={25} />
                <Edit className="size-5 text-stone-500" />
            </div>
            <h3 className="category text-justify text-zinc-600 text-xl font-semibold pt-3">{category}</h3>
            <p className="info text-sm text-justify font-medium text-zinc-600 mb-8">Budget: ${budget}</p>
            <div className="progress-bar-container">
                <div className="w-[194px] h-2 bg-stone-200 rounded-3xl" />
            </div>
        </div>
    );
}

export { BudgetCardWithProgressBar, BudgetCardWithoutProgressBar };
