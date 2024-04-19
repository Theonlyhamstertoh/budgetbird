"use client";
import { Button } from "@/src/components/ui/button";
import EmojiPicker, { Emoji, EmojiStyle } from "emoji-picker-react";
import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/src/components/ui/popover";

export function EmojiInputField({ label }: any) {
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
