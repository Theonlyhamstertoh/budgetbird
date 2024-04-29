import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { MoveLeftIcon } from "lucide-react";

type OnboardingBarProps = {
    prevHref: string;
    nextHref: string;
    disabled?: boolean;
};
function OnboardingBar({ prevHref, nextHref, disabled }: OnboardingBarProps) {
    return (
        <div className="bg-emerald-900 flex justify-between flex-row w-screen items-center h-32 px-10">
            <Button className="text-white font-semibold" variant={"ghost"} asChild>
                <Link href={prevHref}>
                    <MoveLeftIcon className="size-5 mr-2" />
                    Back
                </Link>
            </Button>
            <Button disabled={disabled} variant={"outline"} className="disabled:bg-stone-100">
                <Link href={nextHref}>Save and Continue</Link>
            </Button>
        </div>
    );
}

export default OnboardingBar;
