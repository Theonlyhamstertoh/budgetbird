"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Configuration, PlaidApi, Products, PlaidEnvironments, CountryCode, LinkTokenCreateResponse } from "plaid";

const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;
const PLAID_ENV = process.env.PLAID_ENV || "sandbox";
const PLAID_PRODUCTS = (process.env.PLAID_PRODUCTS || Products.Transactions).split(",") as Products[];
const PLAID_COUNTRY_CODES = (process.env.PLAID_COUNTRY_CODES || "US").split(",") as CountryCode[];
const PLAID_REDIRECT_URI = process.env.PLAID_REDIRECT_URI || "";

const plaidClient = new PlaidApi(
    new Configuration({
        basePath: PlaidEnvironments[PLAID_ENV],
        baseOptions: {
            headers: {
                "PLAID-CLIENT-ID": PLAID_CLIENT_ID,
                "PLAID-SECRET": PLAID_SECRET,
                "Plaid-Version": "2020-09-14",
            },
        },
    })
);

export async function createLinkToken() {
    try {
        const tokenResponse = await plaidClient.linkTokenCreate({
            user: { client_user_id: "user-id" },
            client_name: "Personal Finance App",
            language: "en",
            products: PLAID_PRODUCTS,
            country_codes: PLAID_COUNTRY_CODES,
            redirect_uri: PLAID_REDIRECT_URI,
        });

        // cookies().set("plaid_expiration", tokenResponse.data.expiration, { secure: true, httpOnly: true });
        // cookies().set("plaid_link_token", tokenResponse.data.link_token, { secure: true, httpOnly: true });
        // cookies().set("plaid_request_id", tokenResponse.data.request_id, { secure: true, httpOnly: true });
        revalidatePath("/budget");
        return tokenResponse.data as LinkTokenCreateResponse;
    } catch (err: unknown) {
        console.error(`Failed to create link token: ${err}`);
        return null;
    }
}

export async function exchangePublicToken(public_token: string) {
    const exchangeResponse = await plaidClient.itemPublicTokenExchange({
        public_token,
    });

    const ACCESS_TOKEN = exchangeResponse.data.access_token;
    const ITEM_ID = exchangeResponse.data.item_id;

    console.log(ACCESS_TOKEN, ITEM_ID);
}
