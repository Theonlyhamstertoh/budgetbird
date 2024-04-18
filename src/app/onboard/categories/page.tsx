import React from "react";
import BudgetBird from "@/src/components/budget-bird";
import AddCategoryButton from "@/src/components/category-add-button";
import InputField from "@/src/components/input-field";
import OnboardingBar from "@/src/components/onboard-bar";
import { BudgetCardWithoutProgressBar } from "@/src/components/budget-progress";
import { BudgetCardWithProgressBar } from "@/src/components/budget-progress";
function CategoriesPage() {
    return (
        <div className = "relative flex bg-[#FAF8F5] flex-col items-center h-full pt-8">
            <BudgetBird />
            <div className=" text-2xl font-bold   my-4">What categories would you like to add?</div>
            <img className="w-56"  src="/grocerycart.png"/>
            <div className="grid grid-cols-3 p-15">
                <AddCategoryButton icon = '/lettuce.png' label= 'Groceries' />
                <AddCategoryButton icon = '/fuel-pump.png' label= 'Gas' />
                <AddCategoryButton icon = '/shopping-bag.png' label= 'Shopping' />
                <AddCategoryButton icon = '/car.png' label= 'Automotive' />
                <AddCategoryButton icon = '/airplane.png' label= 'Traveling' />
                <AddCategoryButton icon = '/Clinking-beer-mugs.png' label= 'Food & Drinks' />
            </div>
            <div className="w-[800px] h-[63px] p-[22px] bg-[#FAFAFA] rounded-md drop-shadow-md border-zinc-200 justify-between items-center inline-flex">
                <div className="text-zinc-600 text-base font-semibold font-['Plus Jakarta Sans']">Create your own category</div>
                <div className="w-6 h-6 relative" />
                <h2 className="text-2xl cursor-pointer">+</h2>
            </div>
            <div className="w-[330px] h-[0px] border-2 border-zinc-200 mt-16 mb-8"></div>
            <div className=" grid grid-cols-3 gap-10 pb-8">
                <BudgetCardWithoutProgressBar category="Automotive" budget={300} spent={0} icon={"/car.png"} />
                <BudgetCardWithoutProgressBar category="Dancing" budget={200} spent={0} icon={"/woman-dancing.png"} />
                <BudgetCardWithoutProgressBar category="Gas" budget={200} spent={0} icon={"/fuel-pump.png"} />
            </div>
            <div className="mt-16">
                <OnboardingBar prevHref="dummy.org" nextHref="dummy.org"/>
            </div>
            
        </div>
    );
}

export default CategoriesPage;