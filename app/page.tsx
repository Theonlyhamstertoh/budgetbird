import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { BlurImage } from "@/components/BlurImage";
import { supabase } from "@/lib/supabase";

export default function Gallery() {
    const setNewView = async () => {
        const { data, error } = await supabase.from("views").insert({
            name: "random name",
        });
        console.log("LOGGING", data, error);
        if (data) console.log(data);
        if (error) console.log(error);
    };

    setNewView();
    return (
        <div className="max-w-2xl bg-neutral-100 mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {/* Images will go here */}
                {/* <PlaceholderImage /> */}
                {[...new Array(18)].map((_, i) => (
                    <BlurImage key={i} />
                ))}
            </div>
        </div>
    );
}
