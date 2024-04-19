import React from "react";
import InputField from "@/src/components/input-field";

// income selection
function AddIncomeExpense() {
    return (
        <div className="relative bg-slate-50 h-screen flex justify-center items-center">
            <div className="w-7/12 p-5 space-y-4">
                <h2 className="font-bold text-2xl flex items-center justify-center">Add Income/Expense</h2>
                <div className="flex flex-col space-x-4 max-w-lg mx-auto">
                    <div className="flex space-x-4 max-w-lg mx-auto">
                        <button className="bg-emerald-800 text-white shadow-lg py-3 px-20 rounded">Income</button>
                        <button className="bg-white text-gray shadow-lg py-3 px-20 rounded">Expense</button>
                    </div>
                    <InputField label="Name" placeholder="Bluon" />
                    <InputField label="Amount" placeholder="$200.00" />
                    <InputField label="Date" placeholder="3/24/24" />
                    <div className="flex flex-col space-y-4">
                        <button className="bg-emerald-800 text-white shadow-lg py-3 px-4 rounded">Add</button>
                        <button className="bg-white text-gray shadow-lg py-3 px-4 rounded">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// expense selection
export function AddExpense() {
    return (
        <div className="relative bg-slate-50 h-screen flex justify-center items-center">
            <div className="w-7/12 p-5 space-y-4">
                <h2 className="font-bold text-2xl flex items-center justify-center">Add Income/Expense</h2>
                <div className="flex flex-col space-x-4 max-w-lg mx-auto">
                    <div className="flex space-x-4 max-w-lg mx-auto">
                        <button className="bg-white text-gray shadow-lg py-3 px-20 rounded">Income</button>
                        <button className="bg-emerald-800 text-white shadow-lg py-3 px-20 rounded">Expense</button>
                    </div>
                    <InputField label="Name" placeholder="Offstage" />
                    <InputField label="Amount" placeholder="$200.00" />
                    <InputField label="Catergory" placeholder="Dancing" icon="/woman-dancing.png" />
                    <InputField label="Date" placeholder="3/24/24" />
                    <div className="flex flex-col space-y-4">
                        <button className="bg-emerald-800 text-white shadow-lg py-3 px-4 rounded">Add</button>
                        <button className="bg-white text-gray shadow-lg py-3 px-4 rounded">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddIncomeExpense;
