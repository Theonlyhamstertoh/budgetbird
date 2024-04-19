"use client";
import InputField from "@/src/components/input-field";
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
import { EmojiInputField } from "./emoji-input-field";

export function CategoryDrawer({ children }: { children: React.ReactNode }) {
    return (
        <Drawer>
            <DrawerTrigger className="w-full">{children}</DrawerTrigger>
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
