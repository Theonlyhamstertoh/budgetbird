import React, { MouseEventHandler } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Plus } from "lucide-react";

/**
 *
 * @assignee Sophia
 * @task Transactions top bar
 *
 */

type TransactionsTopBarProps = {
    onSwitchMonth: (direction: 'prev' | 'next') => void;
    onSwitchView: MouseEventHandler<HTMLButtonElement>;
    addIncome: string; 
    monthLabel: string;
};
function TransactionsTopBar({ onSwitchMonth, onSwitchView, addIncome , monthLabel}: TransactionsTopBarProps) {
    const handleSwitchMonth = (direction:'prev' | 'next') => {
        // logic for switching months: update the state to reflect the new month
        console.log(direction);
        // onSwitchMonth(direction); 
    };
    const handleSwitchView = () => {

    };

    return (
        <div className="bg-white flex justify-between flex-row w-screen items-center h-32 px-5">
            <div className="bg-white flex justify-start flex-row w-screen items-center h-32 px-5 gap-4">
                <div className="bg-white rounded-sm shadow-md w-max p-2 flex items-center">
                    <ChevronLeft onClick={() => handleSwitchMonth('prev')}/>
                    <button >{monthLabel}</button>
                    <ChevronRight onClick={()=>handleSwitchMonth('next')}/>
                    </div>
                
                <div className="bg-white rounded-sm shadow-md w-max p-2 flex items-center">
                    <button onClick={onSwitchView} >Monthly View</button>
                    <div className="ml-2 relative">
                        <ChevronUp className="-mb-2 -mt-2 bottom" />
                        <ChevronDown className="-mt-2 -mb-2 top" />
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-sm shadow-md  p-2 flex items-center gap-2 whitespace-nowrap">
                    <Link href={addIncome}>Add Income/Expense</Link>
                    <Plus/>
                    <div/>
        </div>
        </div>
        )
    
}

export default TransactionsTopBar;
