"use client";
import BudgetBird from "@/src/components/budget-bird";
import AddCategoryButton from "@/src/components/category-add-button";
import InputField from "@/src/components/input-field";
import OnboardingBar from "@/src/components/onboard-bar";
import { BudgetCardWithProgressBar, BudgetCardWithoutProgressBar } from "@/src/components/budget-progress";
import { Button } from "@/src/components/ui/button";
import EmojiPicker, { Emoji, EmojiStyle } from "emoji-picker-react";
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

import React, { useState } from "react";

import { Input } from "@/src/components/ui/input";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "@/src/components/ui/popover";
import { CategoryDrawer } from "@/src/components/category-drawer";

const emojiObject = {
    leafygreen: "1f96c",
    fuelpump: "26fd",
    shoppingbag: "1f6d2",
    car: "1f697",
    airplane: "1f6a1",
    clinkingbeermugs: "1f37b",
    womandancing: "1f483",
};

export default function Page() {
    function handleAddCategoryClick(event: React.MouseEvent<HTMLButtonElement>) {
        console.log("yo");
    }
    return (
        <div className="bg-[#FAF8F5] grid grid-rows-[1fr_auto] grid-cols-1 h-screen  ">
            <div className="pt-8 overflow-y-scroll pb-28">
                <div className="mx-auto w-fit flex flex-col items-center">
                    <BudgetBird />
                    <div className=" text-2xl font-bold   my-4">What categories would you like to add?</div>
                    <Image alt="Grocery Cart Banner" className="my-8" width="250" height="250" src="/grocerycart.png" />
                    <div className="grid md:grid-cols-3 p-15 gap-3 w-full">
                        <AddCategoryButton emoji={emojiObject.fuelpump} label="Gas" onClick={handleAddCategoryClick} />
                        <AddCategoryButton
                            emoji={emojiObject.leafygreen}
                            label="Groceries"
                            onClick={handleAddCategoryClick}
                        />
                        <AddCategoryButton
                            emoji={emojiObject.shoppingbag}
                            label="Shopping"
                            onClick={handleAddCategoryClick}
                        />
                        <AddCategoryButton
                            emoji={emojiObject.car}
                            label="Automotive"
                            onClick={handleAddCategoryClick}
                        />
                        <AddCategoryButton
                            emoji={emojiObject.airplane}
                            label="Traveling"
                            onClick={handleAddCategoryClick}
                        />
                        <AddCategoryButton
                            emoji={emojiObject.clinkingbeermugs}
                            label="Food & Drinks"
                            onClick={handleAddCategoryClick}
                        />

                        <div className="col-span-3">
                            <CategoryDrawer>
                                <AddCategoryButton
                                    label="Create your own category"
                                    className=" py-3"
                                    onClick={handleAddCategoryClick}
                                />
                            </CategoryDrawer>
                        </div>
                    </div>

                    <div className="w-[330px] h-[0px] border-2 border-stone-200 mt-16 mb-8"></div>
                    <div className=" grid md:grid-cols-3 gap-10 pb-8">
                        {/* MAP ARRAY HERE */}

                        {/* <BudgetCardWithoutProgressBar category="Automotive" budget={300} spent={0} emoji={"/car.png"} />
                        <BudgetCardWithoutProgressBar
                            category="Dancing"
                            budget={200}
                            spent={0}
                            emoji={"/woman-dancing.png"}
                        />
                        <BudgetCardWithProgressBar
                            category="Gas"
                            budget={200}
                            spent={10}
                            emoji={emojiObject.fuelpump}
                        /> */}
                    </div>
                </div>
            </div>

            <OnboardingBar prevHref="/onboard/income" nextHref="/onboard/completion" />
        </div>
    );
}
