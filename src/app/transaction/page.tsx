"use client";
import { useState, useEffect } from "react";
import OverviewCard from "@/src/components/transaction/overview-card";

type Transaction = {
  type: string;
  category: string;
  desc: string;
  amount: number;
};

type LogEntry = {
  date: Date;
  transactions: Transaction[];
};

const TransactionPage = () => {
  const log: LogEntry[] = [
    {
      date: new Date("02/15/2024"),
      transactions: [
        { type: "Income", category: "Salary", desc: "Salary ", amount: 1000 },
        {
          type: "Expense",
          category: "Restaurant",
          desc: "BJ's ",
          amount: 50,
        },
        {
          type: "Expense",
          category: "Entertainment",
          desc: "Ralphs ",
          amount: 50,
        },
      ],
    },
    {
      date: new Date("01/03/2024"),
      transactions: [
        { type: "Income", category: "Salary", desc: "Salary ", amount: 1000 },
        {
          type: "Expense",
          category: "Restaurant",
          desc: "BJ's ",
          amount: 50,
        },
        {
          type: "Expense",
          category: "Entertainment",
          desc: "Movies ",
          amount: 50,
        },
      ],
    },
    {
      date: new Date("01/01/2024"),
      transactions: [
        { type: "Expense", category: "Grocery", desc: "Ralphs ", amount: 50 },
      ],
    },
  ];

  const [transactions, setTransactions] = useState(log);

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

  const incomeSum = (transactions: Transaction[]): number => {
    let sum = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === "Income") {
        sum += transaction.amount;
      }
    });
    return sum;
  };
  const expenseSum = (transactions: Transaction[]): number => {
    let sum = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === "Expense") {
        sum += transaction.amount;
      }
    });
    return sum;
  };

  //   const month = 2;
  //   const year = 2024;

  //   useEffect(() => {
  //     const filteredTransactions = log.filter((entry) => {
  //       const entryMonth = entry.date.getMonth() + 1;
  //       const entryYear = entry.date.getFullYear();
  //       return entryMonth === month && entryYear === year;
  //     });
  //     setTransactions(filteredTransactions);
  //   }, [month, year]);

  return (
    <div className="container">
      <div className="flex justify-between my-5">
        <OverviewCard
          icon="/money.png"
          category="Income"
          money={10000}
          moneyColor="text-green-500"
        />
        <OverviewCard
          icon="/creddit-card.png"
          category="Expense"
          money={5795}
          moneyColor="text-red-500"
        />
        <OverviewCard
          icon="/receipt.png"
          category="Total"
          money={4205}
          moneyColor="text-neutral-500"
        />
      </div>
      <div>
        {transactions.length > 0 ? (
          <div className="border">
            {transactions.map((transaction, id) => (
              <div className="border-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex">
                    <h3 className="font-semibold text-neutral-600 text-xl pl-10 px-1 py-2">
                      {String(transaction.date.getDate()).padStart(2, "0")}
                    </h3>
                    <h3 className="font-semibold text-neutral-600 text-xl px-1 py-2">
                      {getMonthName(transaction.date.getMonth() + 1)}
                    </h3>
                  </div>

                  <div className="flex w-1/5 justify-around mx-4">
                    <h4 className="text-green-500 font-semibold">
                      ${incomeSum(transaction.transactions)}
                    </h4>
                    <h4 className="text-red-500 font-semibold">
                      ${expenseSum(transaction.transactions)}
                    </h4>
                  </div>
                </div>

                {transaction.transactions.map((t, index) => (
                  <div
                    key={index}
                    className="flex px-10 justify-between p-2 border-t"
                  >
                    <h4 className="w-1/5 text-slate-500 font-semibold">
                      {t.category}
                    </h4>
                    <h4 className="w-3/5 font-medium">{t.desc}</h4>
                    <h4
                      className={`w-1/5 font-medium text-end pr-5 ${
                        t.type === "Income" ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      ${t.amount}{" "}
                    </h4>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div>
            <img src="/hands-balance.png" alt="nothing" />
            <p>There is nothing here yet. Add something to continue</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionPage;
