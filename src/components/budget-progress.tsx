"use client";
import React, { useEffect, useState } from "react";
import { Progress } from "./ui/progress";
import { Edit, PencilIcon } from "lucide-react";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import {
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    Drawer,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/src/components/ui/drawer";
import InputField from "./input-field";
import { EmojiInputField } from "./emoji-input-field";
import { useBudgetStore } from "../app/store";

type BudgetProps = {
    category: string;
    budget: number;
    id: string;
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
function BudgetCardWithProgressBar(props: BudgetProps) {
    const percentageSpent = (props.spent / props.budget) * 100;

    const [openDrawer, setOpenDrawer] = useState(false);

    const [name, setName] = useState(props.category);
    const [budget, setBudget] = useState(props.budget);
    const [emoji, setEmoji] = useState(props.emoji);

    const [editCategory, removeCategory] = useBudgetStore((state) => [state.editCategory, state.removeCategory]);

    const [totalBudget, setTotalBudget] = useState(0);
    const [remainingBudget, setRemainingBudget] = useState(0);
    const [addCategory, income, savings, categories] = useBudgetStore((s) => [
        s.addCategory,
        s.income,
        s.savings,
        s.categories,
    ]);

    useEffect(() => {
        const totalBudget = categories.reduce((prev, current) => {
            return prev + Number(current.budget);
        }, 0);

        setRemainingBudget(Number(income) - Number(savings) - totalBudget);
        setTotalBudget(totalBudget);
    }, [budget, categories]);
    console.log(remainingBudget + Number(props.budget) - budget);
    return (
        <div
            className="bg-white rounded-md border-zinc-200/70 border  w-56 h-[162px] p-[15px] flex flex-col"
            style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
        >
            <div className=" flex justify-between">
                <Emoji unified={emoji} emojiStyle={EmojiStyle.TWITTER} size={25} />
                <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
                    <DrawerTrigger>
                        <Edit className="size-5 text-stone-500" />
                    </DrawerTrigger>
                    <DrawerContent className="bg-[#FAF8F5] flex justify-center items-center">
                        <DrawerHeader className="max-w-md w-full ">
                            <DrawerTitle className="text-2xl text-center">Add new Category</DrawerTitle>
                            <DrawerDescription>
                                <div className="flex justify-evenly my-3">
                                    <div className="text-center">
                                        <div className="text-base font-semibold  text-black">Total Budget</div>
                                        <div className="text-base  text-black">{totalBudget}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-base font-semibold  text-black">Remaining Budget</div>
                                        <div className="text-base  text-black">
                                            {remainingBudget + Number(props.budget) - budget}
                                        </div>
                                    </div>
                                </div>
                            </DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter className="max-w-md w-full">
                            {/* <Button className="w-full">Save</Button> */}
                            <InputField label="Category Name" value={name} setValue={setName} />
                            <InputField type="number" label="Budget" value={budget} setValue={setBudget} />
                            <EmojiInputField label="Choose Icon" emoji={emoji} setEmoji={setEmoji} />
                            <button
                                onClick={() => {
                                    editCategory(name, emoji, budget, props.id);
                                    setOpenDrawer(false);
                                }}
                                disabled={remainingBudget - budget < 0}
                                className="rounded-xl h-12 py-3 mt-8 bg-emerald-700 border-[1.5px] border-emerald-700 text-white font-medium disabled:grayscale disabled:cursor-not-allowed"
                                style={{ boxShadow: "0px 4px 0px 0 #03593e" }}
                            >
                                Edit Category
                            </button>

                            <DrawerClose>
                                <button
                                    className="rounded-xl h-12 py-3 my-2 w-full bg-white border-[1.5px] font-medium border-zinc-200"
                                    style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
                                >
                                    Cancel
                                </button>
                            </DrawerClose>
                            <button className="text-red-400 mt-6" onClick={() => removeCategory(props.id)}>
                                Remove Category
                            </button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
            <h3 className="text-justify text-zinc-600 text-xl font-semibold pt-3">{props.category}</h3>
            <p className=" text-sm text-justify font-medium text-zinc-600">Budget: ${budget}</p>
            <Progress value={percentageSpent} className="shrink-0 mt-2" />
            <div className="flex justify-between w-full text-stone-500 text-sm mt-2">
                <div className="">${Number(props.spent).toFixed(2)}</div>
                <div className="">${Number(budget).toFixed(2)}</div>
            </div>
        </div>
    );
}

function BudgetCardWithoutProgressBar(props: BudgetProps) {
    const percentageSpent = (props.spent / props.budget) * 100;

    const [openDrawer, setOpenDrawer] = useState(false);

    const [name, setName] = useState(props.category);
    const [budget, setBudget] = useState(props.budget);
    const [emoji, setEmoji] = useState(props.emoji);

    const [editCategory, removeCategory] = useBudgetStore((state) => [state.editCategory, state.removeCategory]);

    const [totalBudget, setTotalBudget] = useState(0);
    const [remainingBudget, setRemainingBudget] = useState(0);
    const [addCategory, income, savings, categories] = useBudgetStore((s) => [
        s.addCategory,
        s.income,
        s.savings,
        s.categories,
    ]);

    useEffect(() => {
        const totalBudget = categories.reduce((prev, current) => {
            return prev + Number(current.budget);
        }, 0);

        setRemainingBudget(Number(income) - Number(savings) - totalBudget);
        setTotalBudget(totalBudget);
    }, [budget, categories]);

    return (
        <div
            className="bg-white rounded-md border-zinc-200/70 border  w-56 h-[162px] p-[15px] flex flex-col"
            style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
        >
            <div className=" flex justify-between">
                <Emoji unified={emoji} emojiStyle={EmojiStyle.TWITTER} size={25} />
                <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
                    <DrawerTrigger>
                        <Edit className="size-5 text-stone-500" />
                    </DrawerTrigger>
                    <DrawerContent className="bg-[#FAF8F5] flex justify-center items-center">
                        <DrawerHeader className="max-w-md w-full ">
                            <DrawerTitle className="text-2xl text-center">Add new Category</DrawerTitle>
                            <DrawerDescription>
                                <div className="flex justify-evenly my-3">
                                    <div className="text-center">
                                        <div className="text-base font-semibold  text-black">Total Budget</div>
                                        <div className="text-base  text-black">{Number(income) - Number(savings)}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-base font-semibold  text-black">Remaining Budget</div>
                                        <div className="text-base  text-black">
                                            {remainingBudget + Number(props.budget) - budget}
                                        </div>
                                    </div>
                                </div>
                            </DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter className="max-w-md w-full">
                            {/* <Button className="w-full">Save</Button> */}
                            <InputField label="Category Name" value={name} setValue={setName} />
                            <InputField label="Budget" type="number" value={budget} setValue={setBudget} />
                            <EmojiInputField label="Choose Icon" emoji={emoji} setEmoji={setEmoji} />
                            <button
                                onClick={() => {
                                    editCategory(name, emoji, budget, props.id);
                                    setOpenDrawer(false);
                                }}
                                disabled={remainingBudget + Number(props.budget) - budget < 0}
                                className="rounded-xl h-12 py-3 mt-8 bg-emerald-700 border-[1.5px] border-emerald-700 text-white font-medium disabled:grayscale disabled:cursor-not-allowed"
                                style={{ boxShadow: "0px 4px 0px 0 #03593e" }}
                            >
                                Edit Category
                            </button>

                            <DrawerClose>
                                <button
                                    className="rounded-xl h-12 py-3 my-2 w-full bg-white border-[1.5px] font-medium border-zinc-200"
                                    style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
                                >
                                    Cancel
                                </button>
                            </DrawerClose>
                            <button className="text-red-400 mt-6" onClick={() => removeCategory(props.id)}>
                                Remove Category
                            </button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
            <h3 className="category text-justify text-zinc-600 text-xl font-semibold pt-3">{name}</h3>
            <p className="info text-sm text-justify font-medium text-zinc-600 mb-8">Budget: ${budget}</p>
            <div className="progress-bar-container">
                <div className="w-[194px] h-2 bg-stone-200 rounded-3xl" />
            </div>
        </div>
    );
}

export { BudgetCardWithProgressBar, BudgetCardWithoutProgressBar };
