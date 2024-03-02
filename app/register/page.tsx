"use client";
import { login, signup } from "@/actions/login.action";
import { AuthMode, UserAuthForm } from "@/components/auth-form";
import { GoogleIcon } from "@/components/social-icons/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
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
            <div className="container bg-amber-300 lg:bg-white relative h-screen flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 ">
                <Link
                    href="/login"
                    className={cn(buttonVariants({ variant: "ghost" }), "absolute right-4 top-4 md:right-8 md:top-8")}
                >
                    Login
                </Link>
                <div className="relative hidden h-full flex-col bg-muted p-10 text-secondary-foreground lg:flex dark:border-r">
                    <div className="absolute inset-0 bg-amber-300" />
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <BirdIcon className="mr-2 h-6 w-6" />
                        BudgetBird
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;This library has saved me countless hours of work and helped me deliver stunning
                                designs to my clients faster than ever before.&rdquo;
                            </p>
                            <footer className="text-sm">Sofia Davis</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8  ">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-sm">
                        <div className="flex flex-col space-y-2 text-center">
                            <div className="relative z-20 mx-auto flex items-center text-lg font-medium">
                                <BirdIcon className="mr-2 h-6 w-6" />
                                BudgetBird
                            </div>
                            <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your email below to create your account
                            </p>
                        </div>
                        <UserAuthForm mode={AuthMode.SIGN_UP} />
                        {/* <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                                Privacy Policy
                            </Link>
                            .
                        </p> */}
                    </div>
                </div>
            </div>
        </>
        // <form className="mx-auto max-w-md">
        //     <div className="flex items-center space-x-2">
        //         <Input id="email" name="email" type="email" required />
        //         <Label htmlFor="email">Email:</Label>
        //     </div>
        //     <div className="flex items-center space-x-2">
        //         <Input id="password" name="password" type="password" required />
        //         <Label htmlFor="password">Password:</Label>
        //     </div>
        //     <button formAction={login}>Log in</button>
        //     <button formAction={signup}>Sign up</button>
        // </form>
    );
}
