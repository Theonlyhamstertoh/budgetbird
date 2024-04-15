"use client";
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
import AddCategoryButton from "@/src/components/category-add-button";
import InputField from "@/src/components/input-field";
import { Popover, PopoverContent, PopoverTrigger } from "@/src/components/ui/popover";

export default function Page() {
    return (
        <div>
            <div>
                yooo
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
            </div>
        </div>
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
