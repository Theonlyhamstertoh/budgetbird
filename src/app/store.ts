import { create } from "zustand";

interface BudgetState {
    savings: number;
    income: number;
    categories: CategoryProps[];
    transactions: TransactionProp[];
    addTransaction: (props: Omit<TransactionProp, "id">) => void;
    removeTransaction: (id: string) => void;
    addCategory: (name: string, emoji: string, budget: number) => void;
    editCategory: (name: string, emoji: string, budget: number, id: string) => void;
    removeCategory: (id: string) => void;
}
export const useBudgetStore = create<BudgetState>()((set) => ({
    savings: 0,
    income: 0,
    categories: [],
    transactions: [],
    addTransaction: (props: Omit<TransactionProp, "id">) =>
        set((state) => {
            const newTransaction: TransactionProp = { ...props, id: crypto.randomUUID() };
            return { transactions: state.transactions };
        }),
    removeTransaction: (id) =>
        set((state) => {
            const filteredTransactions = state.transactions.filter((transact) => transact.id !== id);
            return { transactions: filteredTransactions };
        }),
    addCategory: (name, emoji, budget) =>
        set((state) => {
            const newCategory: CategoryProps = { name, emoji, budget, id: crypto.randomUUID() };
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
    type: "Expense" | "income";
};
