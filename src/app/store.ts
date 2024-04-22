import { create } from "zustand";

const log: TransactionProp[] = [
    {
        date: new Date("02/15/2024"),
        type: "Income",
        category: "Salary",
        name: "Salary",
        amount: 1000,
        id: crypto.randomUUID(),
    },
    {
        date: new Date("02/15/2024"),
        type: "Expense",
        category: "Restaurant",
        name: "BJ's",
        amount: 50,
        id: crypto.randomUUID(),
    },
    {
        date: new Date("02/15/2024"),
        type: "Expense",
        category: "Entertainment",
        name: "Ralphs",
        amount: 50,
        id: crypto.randomUUID(),
    },
    {
        date: new Date("01/03/2024"),
        type: "Income",
        category: "Salary",
        name: "Salary",
        amount: 1000,
        id: crypto.randomUUID(),
    },
    {
        date: new Date("01/03/2024"),
        type: "Expense",
        category: "Restaurant",
        name: "BJ's",
        amount: 50,
        id: crypto.randomUUID(),
    },
    {
        date: new Date("01/03/2024"),
        type: "Expense",
        category: "Entertainment",
        name: "Movies",
        amount: 50,
        id: crypto.randomUUID(),
    },
    {
        date: new Date("01/01/2024"),
        type: "Expense",
        category: "Grocery",
        name: "Ralphs",
        amount: 50,
        id: crypto.randomUUID(),
    },
];

interface BudgetState {
    savings: number;
    income: number;
    categories: CategoryProps[];
    transactions: TransactionProp[];
    selectedMonth: number;
    prevMonth: () => void;
    nextMonth: () => void;
    editSavings: (money: number) => void;
    editIncome: (money: number) => void;
    addTransaction: (props: Omit<TransactionProp, "id">) => void;
    removeTransaction: (id: string) => void;
    addCategory: (name: string, emoji: string, budget: number) => void;
    editCategory: (name: string, emoji: string, budget: number, id: string) => void;
    removeCategory: (id: string) => void;
}
export const useBudgetStore = create<BudgetState>()((set) => ({
    savings: 0,
    income: 0,
    categories: [
        {
            id: "Salary",
            name: "Income",
            emoji: "1f4b0",
            budget: 10000,
        },
        {
            id: "Restaurant",
            name: "Restaurant",
            emoji: "1f377",
            budget: 300,
        },
        {
            id: "Entertainment",
            name: "Entertainment",
            emoji: "1f37f",
            budget: 300,
        },
        {
            id: "Subscription",
            name: "Subscription",
            emoji: "1f4b3",
            budget: 300,
        },
    ],
    selectedMonth: new Date().getMonth(), // value from 0 (January) to 11 (December)
    nextMonth: () =>
        set((s) => {
            if (s.selectedMonth === 11) {
                return { selectedMonth: 0 };
            }
            return { selectedMonth: s.selectedMonth + 1 };
        }),
    prevMonth: () =>
        set((s) => {
            if (s.selectedMonth === 0) {
                return { selectedMonth: 11 };
            }

            return { selectedMonth: s.selectedMonth - 1 };
        }),
    transactions: log,
    editSavings: (money) => set(() => ({ savings: money })),
    editIncome: (money) => set(() => ({ income: money })),
    addTransaction: (props: Omit<TransactionProp, "id">) =>
        set((state) => {
            const newTransaction: TransactionProp = {
                ...props,
                id: crypto.randomUUID(),
            };
            console.log(newTransaction);
            newTransaction.amount = Number(newTransaction.amount);
            return { transactions: [...state.transactions, newTransaction] };
        }),
    removeTransaction: (id) =>
        set((state) => {
            const filteredTransactions = state.transactions.filter((transact) => transact.id !== id);
            return { transactions: filteredTransactions };
        }),
    addCategory: (name, emoji, budget) =>
        set((state) => {
            const newCategory: CategoryProps = {
                name,
                emoji,
                budget,
                id: crypto.randomUUID(),
            };
            console.log(newCategory);
            return { categories: [...state.categories, newCategory] };
        }),
    editCategory: (name, emoji, budget, id) =>
        set((state) => {
            const editedCategories = state.categories.map((cat) => (cat.id === id ? { name, emoji, budget, id } : cat));
            return { categories: editedCategories };
        }),
    removeCategory: (id) =>
        set((state) => {
            const filteredCategories = state.categories.filter((cat) => cat.id !== id);
            return { categories: filteredCategories };
        }),
}));

type CategoryProps = {
    id: string;
    name: string;
    emoji: string;
    budget: number;
};

type TransactionProp = {
    id: string;
    category: string;
    amount: number;
    name: string;
    date: Date;
    type: "Expense" | "Income";
};
