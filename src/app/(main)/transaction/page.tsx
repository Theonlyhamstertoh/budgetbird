"use client";
import { useState, useEffect } from "react";
import OverviewCard from "@/src/components/transaction/overview-card";
import TransactionsTopBar from "@/src/components/transactions-top-bar";
import { useBudgetStore } from "../../store";

const TransactionPage = () => {
    const { transactions, categories } = useBudgetStore(({ transactions, categories }) => ({
        transactions,
        categories,
    }));

    const [income, setIncome] = useState<number>(0);
    const [expense, setExpense] = useState<number>(0);
    const [filteredTransactions, setFilteredTransactions] = useState<typeof transactions>([]);
    const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth());

    const getMonthName = (monthIndex: number) => {
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        return months[monthIndex];
    };

    useEffect(() => {
        const filtered = transactions.filter((transaction) => {
            return transaction.date.getMonth() === selectedMonth;
        });
        setFilteredTransactions(filtered);
    }, [transactions, selectedMonth]);

    const handlePrevMonth = () => {
        setSelectedMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    };

    const handleNextMonth = () => {
        setSelectedMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    };

    useEffect(() => {
        let totalIncome = 0;
        let totalExpense = 0;

        filteredTransactions.forEach((filteredTransactions) => {
            if (filteredTransactions.type === "Income") {
                totalIncome += filteredTransactions.amount;
            } else if (filteredTransactions.type === "Expense") {
                totalExpense += filteredTransactions.amount;
            }
        });

        setIncome(totalIncome);
        setExpense(totalExpense);
    }, [filteredTransactions]);

    return (
        <div className="container bg-[#FAF8F5] flex flex-col">
            <TransactionsTopBar selectedMonth={selectedMonth} prevMonth={handlePrevMonth} nextMonth={handleNextMonth} />
            <div className="flex justify-between my-5">
                <OverviewCard icon="/money.png" category="Income" money={income} moneyColor="text-green-500" />
                <OverviewCard icon="/creddit-card.png" category="Expense" money={expense} moneyColor="text-red-500" />
                <OverviewCard
                    icon="/receipt.png"
                    category="Total"
                    money={income - expense}
                    moneyColor="text-neutral-500"
                />
            </div>
            <div className="my-5">
                {filteredTransactions.length > 0 ? (
                    <div className="border">
                        {filteredTransactions.map((transaction, id) => (
                            <div className="border-y-2" key={id}>
                                <div>
                                    <div className="flex px-10 justify-between items-center p-2 border-t">
                                        <div className="flex mx-4 w-1/6">
                                            <h3 className="font-semibold text-neutral-600 pl-10 px-1 py-2">
                                                {String(transaction.date.getDate()).padStart(2, "0")}
                                            </h3>
                                            <h3 className="font-semibold text-neutral-600 px-1 py-2">
                                                {getMonthName(transaction.date.getMonth())}
                                            </h3>
                                        </div>

                                        <h4 className=" text-slate-500 font-semibold w-1/6">{transaction.category}</h4>
                                        <h4 className="font-medium w-3/6">{transaction.name}</h4>
                                        <h4
                                            className={` font-medium text-end w-1/6 pr-10 ${
                                                transaction.type === "Income" ? "text-green-500" : "text-red-500"
                                            }`}
                                        >
                                            ${transaction.amount}{" "}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center m-5">
                        <img src="/hands-balance.png" alt="nothing" />
                        <p>There is nothing here yet. Add something to continue</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TransactionPage;
