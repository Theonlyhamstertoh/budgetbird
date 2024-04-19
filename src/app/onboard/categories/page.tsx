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

import React, { use, useState } from "react";

import { Input } from "@/src/components/ui/input";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "@/src/components/ui/popover";
import { CategoryDrawer } from "@/src/components/category-drawer";
import { useBudgetStore } from "../../store";
import { EmojiInputField } from "@/src/components/emoji-input-field";

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
    function handleAddCategoryClick(name: string, emoji: string) {
        // console.log("yo");
        setName(name);
        setEmoji(emoji);
        setOpenDrawer(true);
    }

    const [openDrawer, setOpenDrawer] = useState(false);
    const [name, setName] = useState("");
    const [budget, setBudget] = useState(0);
    const [emoji, setEmoji] = useState("");
    const { categories, addCategory } = useBudgetStore(({ categories, addCategory }) => ({ categories, addCategory }));

    return (
        <div className="bg-[#FAF8F5] grid grid-rows-[1fr_auto] grid-cols-1 h-screen  ">
            <div className="pt-8 overflow-y-scroll pb-28">
                <div className="mx-auto w-fit flex flex-col items-center">
                    <BudgetBird />
                    <div className=" text-2xl font-bold   my-4">What categories would you like to add?</div>
                    <Image alt="Grocery Cart Banner" className="my-8" width="250" height="250" src="/grocerycart.png" />
                    <div className="grid md:grid-cols-3 p-15 gap-3 w-full">
                        <AddCategoryButton
                            emoji={emojiObject.fuelpump}
                            label="Gas"
                            name="gas"
                            onClick={handleAddCategoryClick}
                        />

                        <AddCategoryButton
                            emoji={emojiObject.leafygreen}
                            label="Groceries"
                            name="groceries"
                            onClick={handleAddCategoryClick}
                        />

                        <AddCategoryButton
                            emoji={emojiObject.shoppingbag}
                            label="Shopping"
                            name="shopping"
                            onClick={handleAddCategoryClick}
                        />

                        <AddCategoryButton
                            emoji={emojiObject.car}
                            label="Automotive"
                            name="automotive"
                            onClick={handleAddCategoryClick}
                        />

                        <AddCategoryButton
                            emoji={emojiObject.airplane}
                            label="traveling"
                            name="traveling"
                            onClick={handleAddCategoryClick}
                        />

                        <AddCategoryButton
                            emoji={emojiObject.clinkingbeermugs}
                            label="Food & Drinks"
                            name="food & drinks"
                            onClick={handleAddCategoryClick}
                        />
                        <div className="col-span-3">
                            <AddCategoryButton
                                label="Create your own category"
                                name=""
                                className="py-3"
                                onClick={handleAddCategoryClick}
                            />
                        </div>
                    </div>

                    <div className="w-[330px] h-[0px] border-2 border-stone-200 mt-16 mb-8"></div>
                    <div className=" grid md:grid-cols-3 gap-10 pb-8">
                        {/* MAP ARRAY HERE */}
                        {categories.map((c) => (
                            <BudgetCardWithoutProgressBar
                                key={c.id}
                                id={c.id}
                                category={c.name}
                                budget={c.budget}
                                spent={0}
                                emoji={c.emoji}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Drawer onOpenChange={setOpenDrawer} open={openDrawer}>
                <DrawerContent className="bg-[#FAF8F5] flex justify-center items-center">
                    <DrawerHeader className="max-w-md w-full ">
                        <DrawerTitle className="text-2xl text-center">Add new Category</DrawerTitle>
                        <DrawerDescription>
                            <div className="flex justify-evenly my-3">
                                <div className="text-center">
                                    <div className="text-base font-semibold  text-black">Total Budget</div>
                                    <div className="text-base  text-black">$2000</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-base font-semibold  text-black">Remaining Budget</div>
                                    <div className="text-base  text-black">$200</div>
                                </div>
                            </div>
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter className="max-w-md w-full">
                        {/* <Button className="w-full">Save</Button> */}
                        <InputField label="Category Name" value={name} setValue={setName} />
                        <InputField label="Budget" value={budget} setValue={setBudget} />
                        <EmojiInputField label="Choose Icon" emoji={emoji} setEmoji={setEmoji} />
                        <button
                            onClick={() => {
                                addCategory(name, emoji, budget);
                                setOpenDrawer(false);
                                setName("");
                                setBudget(0);
                                setEmoji("");
                            }}
                            className="rounded-xl h-12 py-3 mt-8 bg-emerald-700 border-[1.5px] border-emerald-700 text-white font-medium"
                            style={{ boxShadow: "0px 4px 0px 0 #03593e" }}
                        >
                            Create Category
                        </button>
                        <DrawerClose>
                            <button
                                className="rounded-xl h-12 py-3 my-2 w-full bg-white border-[1.5px] font-medium border-zinc-200"
                                style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
                            >
                                Cancel
                            </button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            <OnboardingBar prevHref="/onboard/income" nextHref="/onboard/completion" />
        </div>
    );
}
