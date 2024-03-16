"use client";
import { login, signup } from "@/src/actions/login.action";
import { AuthMode, UserAuthForm } from "@/src/components/auth-form";
import { GoogleIcon } from "@/src/components/social-icons/icons";
import { Button, buttonVariants } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { cn } from "@/src/lib/utils";
import { BirdIcon, BusIcon, CatIcon, Loader2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    return (
        <>
            {/* <div className="md:hidden">
                <Image
                    src="/examples/authentication-light.png"
                    width={1280}
                    height={843}
                    alt="Authentication"
                    className="block dark:hidden"
                />
                <Image
                    src="/examples/authentication-dark.png"
                    width={1280}
                    height={843}
                    alt="Authentication"
                    className="hidden dark:block"
                />
            </div> */}
            <div className="container  lg:bg-[#faf8f5] relative h-screen flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 ">
                <Link
                    href="/register"
                    className={cn(buttonVariants({ variant: "ghost" }), "absolute right-4 top-4 md:right-8 md:top-8")}
                >
                    Register
                </Link>
                <div className="relative hidden h-full flex-col bg-muted p-10 text-emerald-500 lg:flex dark:border-r">
                    <div className="absolute inset-0 bg-emerald-950 " />
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <BirdIcon className="mr-2 h-6 w-6" />
                        BudgetBird
                    </div>
                    <div className="relative z-20 my-auto">
                        <blockquote className="space-y-2">
                            <p className="text-6xl tracking-wide">Start tracking where your money is going every day</p>
                            {/* <footer className="text-sm">Sofia Davis</footer> */}
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8  ">
                    <div className="mx-auto flex w-full flex-col text-beige-900 justify-center space-y-6 max-w-sm">
                        <div className="flex flex-col space-y-2 text-center">
                            <div className="relative z-20 mx-auto flex items-center text-lg font-medium">
                                <BirdIcon className="mr-2 h-6 w-6" />
                                BudgetBird
                            </div>
                            <h1 className="text-2xl font-semibold tracking-tight">Welcome Back!</h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your email below to sign into your account
                            </p>
                        </div>
                        <UserAuthForm mode={AuthMode.SIGN_IN} />
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
