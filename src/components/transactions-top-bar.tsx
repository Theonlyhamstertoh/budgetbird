"use client";
import React, { MouseEventHandler, use, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronLeft,
  ChevronLeftIcon,
  ChevronRight,
  ChevronRightIcon,
  ChevronUp,
  Plus,
  PlusIcon,
} from "lucide-react";
import { Button } from "./ui/button";

import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  Drawer,
  DrawerFooter,
  DrawerTitle,
  DrawerHeader,
  DrawerTrigger,
} from "@/src/components/ui/drawer";
import InputField from "./input-field";
import { EmojiInputField } from "./emoji-input-field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useBudgetStore } from "../app/store";

interface TransactionsTopBarProps {
  selectedMonth: number;
  prevMonth: () => void;
  nextMonth: () => void;
}

function TransactionsTopBar({
  selectedMonth,
  prevMonth,
  nextMonth,
}: TransactionsTopBarProps) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date());

  const { categories, addTransaction } = useBudgetStore(
    ({ categories, addTransaction }) => ({
      categories,
      addTransaction,
      // selectedMonth,
      // prevMonth,
      // nextMonth,
    })
  );

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

  return (
    <div className="flex gap-2 mt-4 items-center">
      <Button
        size={"icon"}
        variant={"ghost"}
        className="border-2   border-zinc-200/70 rounded-lg flex items-center"
        style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
        onClick={prevMonth}
      >
        <ChevronLeftIcon onClick={() => {}} />
      </Button>
      <div>{getMonthName(selectedMonth)}</div>
      <Button
        size={"icon"}
        variant={"ghost"}
        className="border-2   border-zinc-200/70 rounded-lg flex items-center"
        style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
        onClick={nextMonth}
      >
        <ChevronRightIcon onClick={() => {}} />
      </Button>

      <Button
        variant={"ghost"}
        className="border-2   border-zinc-200/70 rounded-lg flex items-center"
        style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
      >
        Month View
      </Button>
      <div className="ml-auto flex gap-2">
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              variant={"ghost"}
              className="border-2   border-zinc-200/70 rounded-lg flex items-center"
              style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
            >
              Add Income
              <PlusIcon className="ml-2 size-5 text-stone-600" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-[#FAF8F5] flex justify-center items-center">
            <DrawerHeader className="max-w-md w-full ">
              <DrawerTitle className="text-2xl text-center">
                {" "}
                Add Income
              </DrawerTitle>
            </DrawerHeader>
            <DrawerFooter className="max-w-md w-full">
              <InputField
                label="Name"
                placeholder=""
                value={name}
                setValue={setName}
              />
              <InputField
                label="Amount"
                placeholder="$0.00"
                value={amount}
                setValue={setAmount}
              />
              <Select onValueChange={(value) => setCategory(value)}>
                <SelectTrigger
                  className="w-full h-12 py-3 pl-4  bg-white border-[1.5px] font-medium border-zinc-200/70 "
                  style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
                >
                  <SelectValue placeholder="Select Category" className="" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem value={cat.id}>{cat.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <InputField
                type="date"
                label="Date"
                placeholder=""
                value={date.toISOString().split("T")[0]}
                setValue={setDate}
              />
              <DrawerClose>
                <button
                  onClick={() => {
                    addTransaction({
                      category,
                      amount,
                      date,
                      name,
                      type: "Income",
                    });
                    setAmount(0);
                    setName("");
                    setDate(new Date());
                    setCategory("");
                  }}
                  className="rounded-xl w-full h-12 py-3 mt-8 bg-emerald-700 border-[1.5px] border-emerald-700 text-white font-medium"
                  style={{ boxShadow: "0px 4px 0px 0 #03593e" }}
                >
                  Save Income
                </button>
              </DrawerClose>

              <DrawerClose>
                <button
                  className="rounded-xl h-12 py-3 my-2 w-full bg-white border-[1.5px] font-medium border-zinc-200"
                  style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
                >
                  Cancel
                </button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              variant={"ghost"}
              className="border-2  border-zinc-200/70 rounded-lg flex items-center"
              style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
            >
              Add Expense
              <PlusIcon className="ml-2 size-5 text-stone-600" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-[#FAF8F5] flex justify-center items-center">
            <DrawerHeader className="max-w-md w-full ">
              <DrawerTitle className="text-2xl text-center">
                {" "}
                Add Expense
              </DrawerTitle>
            </DrawerHeader>
            <DrawerFooter className="max-w-md w-full">
              <InputField
                label="Name"
                placeholder=""
                value={name}
                setValue={setName}
              />
              <InputField
                label="Amount"
                placeholder="$0.00"
                value={amount}
                setValue={setAmount}
              />
              <Select onValueChange={(value) => setCategory(value)}>
                <SelectTrigger
                  className="w-full h-12 py-3 pl-4  bg-white border-[1.5px] font-medium border-zinc-200/70 "
                  style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
                >
                  <SelectValue placeholder="Select Category" className="" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem value={cat.id}>{cat.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <InputField
                type="date"
                label="Date"
                placeholder=""
                value={date.toISOString().split("T")[0]}
                setValue={setDate}
              />
              <DrawerClose>
                <button
                  onClick={() => {
                    addTransaction({
                      category,
                      amount,
                      date,
                      name,
                      type: "Expense",
                    });
                    setAmount(0);
                    setName("");
                    setDate(new Date());
                    setCategory("");
                  }}
                  className="rounded-xl w-full h-12 py-3 mt-8 bg-emerald-700 border-[1.5px] border-emerald-700 text-white font-medium"
                  style={{ boxShadow: "0px 4px 0px 0 #03593e" }}
                >
                  Save Expense
                </button>
              </DrawerClose>

              <DrawerClose>
                <button
                  className="rounded-xl h-12 py-3 my-2 w-full bg-white border-[1.5px] font-medium border-zinc-200"
                  style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
                >
                  Cancel
                </button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

export default TransactionsTopBar;
