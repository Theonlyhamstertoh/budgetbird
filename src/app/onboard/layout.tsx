import DashboardSidebar from "@/src/components/dashboard-bar";
import OnboardingBar from "@/src/components/onboard-bar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen ">
            <div className="grow pt-8 bg-[#FAF8F5] h-full">{children}</div>
            <OnboardingBar prevHref="/onboard/categories" nextHref="/dashboard" />
        </div>
    );
}
