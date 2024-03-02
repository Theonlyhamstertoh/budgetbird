"use client";
import { useCallback, useEffect, useState } from "react";
import { usePlaidLink, PlaidLinkOptions, PlaidLinkOnSuccess } from "react-plaid-link";
import { LinkTokenCreateResponse } from "plaid";
import { cookies } from "next/headers";
import { exchangePublicToken } from "@/app/actions";

export const SimplePlaidLink = ({ token }: { token: string }) => {
    console.log(token);

    const config: PlaidLinkOptions = {
        onSuccess: async (public_token, metadata) => {
            console.log(public_token, metadata);
            console.log("PRIVATE TOKEN", await exchangePublicToken(public_token));
        },
        onExit: (err, metadata) => {},
        onEvent: (eventName, metadata) => {},
        token,
    };
    const { open, ready } = usePlaidLink(config);

    return (
        <button onClick={() => open()} disabled={!ready}>
            Connect a bank account
        </button>
    );
};
