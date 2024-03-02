"use client";
import { login, signup } from "@/actions/login.action";
import { GoogleIcon } from "@/components/social-icons/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { BirdIcon, BusIcon, CatIcon, Loader2Icon } from "lucide-react";
import { useState } from "react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
    mode: AuthMode;
}

export enum AuthMode {
    SIGN_IN = "SIGN_IN",
    SIGN_UP = "SIGN_UP",
}
export function UserAuthForm({ className, mode, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const isSignup = mode === AuthMode.SIGN_UP;

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={onSubmit}>
                <div className="grid gap-3">
                    {isSignup && (
                        <>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label className="" htmlFor="name">
                                    Your Name
                                </Label>
                                <Input
                                    id="name"
                                    placeholder="Name"
                                    type="text"
                                    autoCapitalize="none"
                                    autoComplete="name"
                                    autoCorrect="off"
                                    disabled={isLoading}
                                />
                            </div>
                        </>
                    )}

                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label className="" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label className="" htmlFor="password">
                            Password
                        </Label>
                        <Input
                            id="password"
                            placeholder="password"
                            type="password"
                            autoCapitalize="none"
                            autoComplete="password"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>

                    <Button disabled={isLoading}>
                        {isLoading && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
                        {isSignup ? "Sign up" : "Sign in"}
                    </Button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
            </div>
            <Button variant="outline" type="button" disabled={isLoading}>
                {isLoading ? (
                    <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <GoogleIcon className="mr-2 h-4 w-4" />
                )}{" "}
                {isSignup ? "Sign up " : "Sign in "}
                with Google
            </Button>
        </div>
    );
}
