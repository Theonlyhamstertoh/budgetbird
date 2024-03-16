"use client";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { useState } from "react";

export function BlurImage() {
    const [isLoading, setLoading] = useState(true);
    return (
        <a href="#" className="group w-full h-full">
            <div className="w-full relative h-72 aspect-w-1 bg-neutral-200 aspect-h-1 xl:aspect-w-8 xl:aspect-h-8 overflow-hidden rounded-lg ">
                <Image
                    alt=""
                    src="https://placeholdmon.vercel.app/300x300"
                    className={cn(
                        "group-hover:opacity-75  duration-700 ease-in-out",
                        isLoading ? "grayscale blur-2xl scale-110" : "grayscale-0 blur-0 scale-100"
                    )}
                    // width={200}
                    // height={200}
                    fill
                    onLoad={() => setLoading(false)}
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Lee Robinson</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">@leeerob</p>
        </a>
    );
}
