import { PlusIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import clsx from "clsx";
import { cn } from "../lib/utils";

type AddCategoryButtonProps = {
    emoji?: string;
    className?: string;
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function AddCategoryButton({ emoji, label, onClick, className }: AddCategoryButtonProps) {
    return (
        <Button
            onClick={onClick}
            variant={"secondary"}
            className={cn(
                "bg-white h-fit p-2 px-4 border-2 border-zinc-200/70 rounded-lg flex items-center justify-between",
                className
            )}
            style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
        >
            <div className="flex items-center gap-2">
                {emoji && <Emoji unified={emoji.toLowerCase()} emojiStyle={EmojiStyle.TWITTER} size={25} />}
                <h3 className="mx-2 font-semibold text-zinc-600">{label}</h3>
            </div>

            <PlusIcon className="size-5" />
        </Button>
    );
}

export default AddCategoryButton;
