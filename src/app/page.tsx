"use client";

import Link from "next/link";
import BudgetBird from "../components/budget-bird";
import { Button } from "../components/ui/button";

export default function HomePage() {
    return (
        <div className="bg-emerald-950  w-full ">
            <div className=" flex flex-col justify-center gap-6 items-center space-y-2 p-24 ">
                <div className="max-w-4xl  mx-auto text-center flex flex-col gap-5 ">
                    <BudgetBird className="text-emerald-400 text-5xl mx-auto w-fit" />

                    <h1 className="text-bold text-6xl font-black text-emerald-200 text-balance">
                        The best money tracker app
                    </h1>
                    <h1 className="text-emerald-500 text-bold text-3xl text-center  text-balance">
                        Manage your finances confidently. Monitor spending, budgets, investments, and net worth
                        effortlessly.
                    </h1>

                    {/* <button
                    className="rounded-xl h-12 py-3 my-2 w-full bg-white border-[1.5px] font-medium border-zinc-200"
                    style={{ boxShadow: "0px 6px 0px 0 #ffffff70" }}
                >
                    Cancel
                </button> */}

                    <Button
                        style={{ boxShadow: "0px 6px 0px 0 #ffffff70" }}
                        variant={"outline"}
                        className="w-fit mx-auto hover:translate-y-1 py-4 px-12 transition"
                        asChild
                    >
                        <Link href={"/onboard/income"}>Get Started</Link>
                    </Button>
                </div>
                <video
                    src="/budget-bird-demo.mov"
                    muted
                    autoPlay={true}
                    loop={true}
                    className="border rounded-2xl"
                ></video>
            </div>

            <Component />
        </div>
    );
}

import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { GithubIcon, LinkedinIcon } from "../components/social-icons/icons";

export function Component() {
    return (
        <Card className="mx-auto p-24 bg-[#FAF8F5]">
            <CardHeader>
                <CardTitle>A Student Project Created By:</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/01.png" alt="Avatar" />
                        <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Andrew Di</p>
                    </div>
                    <div className="ml-auto font-medium flex gap-2 ">
                        <Button asChild size="icon" variant={"outline"}>
                            <Link href="https://github.com/Andrewdi94" target="_blank">
                                <GithubIcon className="text-white size-6" />
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/02.png" alt="Avatar" />
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Daniella Vargas</p>
                    </div>
                    <div className="ml-auto font-medium flex gap-2 ">
                        <Button asChild size="icon" variant={"outline"}>
                            <Link href="https://github.com/daniellavargas27" target="_blank">
                                <GithubIcon className="text-white size-6" />
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/03.png" alt="Avatar" />
                        <AvatarFallback>RH</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Raquel Hernandez</p>
                    </div>
                    <div className="ml-auto font-medium flex gap-2 ">
                        <Button asChild size="icon" variant={"outline"}>
                            <Link href="https://github.com/raquelhndz" target="_blank">
                                <GithubIcon className="text-white size-6" />
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/04.png" alt="Avatar" />
                        <AvatarFallback>SD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Sophia Doan</p>
                    </div>
                    <div className="ml-auto font-medium flex gap-2 ">
                        <Button asChild size="icon" variant={"outline"}>
                            <Link href="https://github.com/sophiadoan" target="_blank">
                                <GithubIcon className="text-white size-6" />
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/05.png" alt="Avatar" />
                        <AvatarFallback>WZ</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Weibo Zhang</p>
                    </div>
                    <div className="ml-auto font-medium flex gap-2 ">
                        <Button asChild size="icon" variant={"outline"}>
                            <Link href="https://github.com/Theonlyhamstertoh" target="_blank">
                                <GithubIcon className="text-white size-6" />
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/05.png" alt="Avatar" />
                        <AvatarFallback>ZL</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Zophia Laud</p>
                    </div>
                    <div className="ml-auto font-medium flex gap-2 ">
                        <Button asChild size="icon" variant={"outline"}>
                            <Link href="https://github.com/zlaud" target="_blank">
                                <GithubIcon className="text-white size-6" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
