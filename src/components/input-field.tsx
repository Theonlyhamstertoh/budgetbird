"use client";
import { Emoji } from "emoji-picker-react";
import Image from "next/image";
import { Input } from "./ui/input";

interface InputFields {
    label: string;
    placeholder?: string | number;
    icon?: string;
    emoji?: string;
    disabled?: boolean;
}
function InputField({ label, icon, emoji, placeholder, disabled }: InputFields) {
    return (
        <div
            className="bg-white border-2 pl-3 w-full border-zinc-200/70 rounded-lg flex items-center"
            style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
        >
            <label htmlFor="input" className="mx-2 flex items-center justify-center  gap-2 font-semibold text-zinc-600">
                {emoji && <Emoji unified={emoji} size={25} />}
                {icon && <Image src={icon} width="150" height="150" className="w-6 h-6" alt="Icon" />}
                {label}:
            </label>
            <Input
                className="border-none placeholder:font-medium placeholder:text-stone-800"
                disabled={disabled}
                placeholder={typeof placeholder === "number" ? `$${placeholder.toLocaleString()}` : placeholder}
            />
        </div>
    );
}
export default InputField;
