"use client";
import type { Metadata } from "next";
import DashboardSidebar from "@/src/components/dashboard-bar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex">
            <DashboardSidebar />
            <div className="w-full max-h-screen overflow-y-scroll">{children}</div>
        </div>
    );
}
