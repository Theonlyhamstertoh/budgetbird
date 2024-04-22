import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { plus_jakarta_sans } from "./fonts";

export const metadata: Metadata = {
    title: "BudgetBird",
    description: "Start tracking where your money is going with BudgetBird",
    icons: {
        icon: "/budgetbird.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${plus_jakarta_sans.className}`}>{children}</body>
        </html>
    );
}
