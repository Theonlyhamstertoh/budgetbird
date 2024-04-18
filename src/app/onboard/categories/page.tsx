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
                        <AddCategoryButton
                            label="Create your own category"
                            className="md:col-span-3 py-3"
                            onClick={handleAddCategoryClick}
                        />
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

function CategoryDrawer() {
    return (
        <Drawer>
            <DrawerTrigger>Open</DrawerTrigger>
            <DrawerContent className="bg-[#FAF8F5] flex justify-center items-center">
                <DrawerHeader className="max-w-md w-full ">
                    <DrawerTitle className="text-2xl text-center">Add new Category</DrawerTitle>
                    <DrawerDescription>
                        <div className="flex justify-evenly my-3">
                            <div className="text-center">
                                <p className="text-base font-semibold  text-black">Total Budget</p>
                                <p className="text-base  text-black">$2000</p>
                            </div>
                            <div className="text-center">
                                <p className="text-base font-semibold  text-black">Remaining Budget</p>
                                <p className="text-base  text-black">$200</p>
                            </div>
                        </div>
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className="max-w-md w-full">
                    {/* <Button className="w-full">Save</Button> */}
                    <InputField label="Category Name" />
                    <InputField label="Budget" />
                    <EmojiInputField label="Choose Icon" />
                    <button
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
    );
}

function EmojiInputField({ label }: any) {
    const [emoji, setEmoji] = useState("1f423");
    const [active, setActive] = useState(false);
    return (
        <Popover open={active} onOpenChange={(open) => setActive(open)}>
            <PopoverTrigger>
                <Button
                    variant="ghost"
                    className="justify-between h-12 w-full py-3 text-md bg-white border-2 pl-3 border-zinc-200/70 rounded-lg flex items-center"
                    style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
                >
                    <label htmlFor="input" className="mx-2  flex gap-2 font-semibold text-zinc-600">
                        {label}:
                    </label>

                    <Emoji emojiStyle={EmojiStyle.TWITTER} unified={emoji} size={25} />
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <EmojiPicker
                    emojiStyle={EmojiStyle.TWITTER}
                    onEmojiClick={(emoji) => {
                        setEmoji(emoji.unified);
                        setActive(false);
                    }}
                />
            </PopoverContent>
        </Popover>
    );
}
