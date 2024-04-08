"use client";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
// import { BlurImage } from "@/src/components/ui/BlurImage";
// import { supabase } from "@/src/lib/supabase";
import InputField from "../components/input-field";
import OverviewCard from "../components/transaction/overview-card";
import AddCategoryButton from "../components/category-add-button";

// function Button() {
//     return (

//     )
// }

// function Navbar() {

// }

export default function HomePage() {
  function onClickHandler() {}
  return (
    <div className="bg-[#FAF8F5] h-screen w-full space-y-2">
      {/* Logo + BudgetBird */}
      {/* <img src="/bird-logo.png" /> */}
      <div>
        <Image src="/bird-logo.png" alt="BudgetBird" width="30" height="30" />
        <span>BudgetBird</span>
      </div>
      {/* Header (Let's Start Setting Up Your Budget) */}
      <div className="heading">
        <h2 className="text-2xl">Let's Start Setting Up Your Budget</h2>
      </div>
      {/* Coin Money  */}
      <Image
        src="/coin-money.png"
        alt="Coin And Money "
        width="200"
        height="200"
      />
      <p className="text-black text-lg">What is your income and savings?</p>
      <div className="bg-gray-200 h-10 w-60 my-2"></div>
      <div className="bg-gray-200 h-10 w-60 my-2"></div>
      <InputField
        label="Your Monthly Budget"
        icon="/money-badge.png"
        placeholder={2000.0}
      />
      <InputField label="Budget" placeholder={200} />
      {/* <div className="" */}
      <AddCategoryButton label="Grocery" icon="/lettuce.png" />
      <OverviewCard
        icon="/money.png"
        category="Income"
        money={10000}
        moneyColor="text-[#10B981]"
      />
      <OverviewCard
        icon="/creddit-card.png"
        category="Expense"
        money={5795}
        moneyColor="text-[#EF4444]"
      />
      <button className="text-black bg-white  p-5 rounded cursor-pointer float-right">
        Save and Continue
      </button>
    </div>
  );
}

// export default function Gallery() {
//     const setNewView = async () => {
//         const { data, error } = await supabase.from("views").insert({
//             name: "random name",
//         });
//         console.log("LOGGING", data, error);
//         if (data) console.log(data);
//         if (error) console.log(error);
//     };

//     setNewView();
//     return (
//         <div className="max-w-2xl bg-neutral-100 mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
//             <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//                 {/* Images will go here */}
//                 {/* <PlaceholderImage /> */}
//                 {[...new Array(18)].map((_, i) => (
//                     <BlurImage key={i} />
//                 ))}
//             </div>
//         </div>
//     );
// }
