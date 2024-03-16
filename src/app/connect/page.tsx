// "use client";
import { useCallback, useEffect, useState } from "react";
import { createLinkToken } from "../actions";
import { usePlaidLink, PlaidLinkOptions, PlaidLinkOnSuccess } from "react-plaid-link";
import { LinkTokenCreateResponse } from "plaid";
import { cookies } from "next/headers";
import { SimplePlaidLink } from "@/src/components/SimplePlaidLink";

export default async function BudgetApp() {
    // if (cookies().get("plaid_expiration"))
    const result = await createLinkToken();
    console.log(result);
    if (result) {
        return <SimplePlaidLink token={result?.link_token} />;
    } else {
        return <div>There was an error with loading this page</div>;
    }

    // const { linkSuccess, isItemAccess, isPaymentInitiation, dispatch } = useContext(Context);

    // const getInfo = useCallbac(async () => {
    //     const response = await fetch("/api/info", { method: "POST" });
    //     if (!response.ok) {
    //         dispatch({ type: "SET_STATE", state: { backend: false } });
    //         return { paymentInitiation: false };
    //     }
    //     const data = await response.json();
    //     const paymentInitiation: boolean = data.products.includes("payment_initiation");
    //     dispatch({
    //         type: "SET_STATE",
    //         state: {
    //             products: data.products,
    //             isPaymentInitiation: paymentInitiation,
    //         },
    //     });
    //     return { paymentInitiation };
    // }, [dispatch]);

    // // Step one of the workflow
    // const generateToken = useCallback(
    //     async (isPaymentInitiation) => {
    //         // Link tokens for 'payment_initiation' use a different creation flow in your backend.
    //         // /api is going to your backend
    //         const path = isPaymentInitiation
    //             ? "/api/create_link_token_for_payment"
    //             : "/api/create_link_token";
    //         const response = await fetch(path, {
    //             method: "POST",
    //         });
    //         if (!response.ok) {
    //             dispatch({ type: "SET_STATE", state: { linkToken: null } });
    //             return;
    //         }
    //         const data = await response.json();
    //         if (data) {
    //             if (data.error != null) {
    //                 dispatch({
    //                     type: "SET_STATE",
    //                     state: {
    //                         linkToken: null,
    //                         linkTokenError: data.error,
    //                     },
    //                 });
    //                 return;
    //             }
    //             dispatch({ type: "SET_STATE", state: { linkToken: data.link_token } });
    //         }
    //         // Save the link_token to be used later in the Oauth flow.
    //         localStorage.setItem("link_token", data.link_token);
    //     },
    //     [dispatch]
    // );

    // useEffect(() => {
    //     const init = async () => {
    //         const { paymentInitiation } = await getInfo(); // used to determine which path to take when generating token
    //         // do not generate a new token for OAuth redirect; instead
    //         // setLinkToken from localStorage
    //         if (window.location.href.includes("?oauth_state_id=")) {
    //             dispatch({
    //                 type: "SET_STATE",
    //                 state: {
    //                     linkToken: localStorage.getItem("link_token"),
    //                 },
    //             });
    //             return;
    //         }
    //         generateToken(paymentInitiation);
    //     };
    //     init();
    // }, [dispatch, generateToken, getInfo]);

    // return (
    //     <div className={styles.App}>
    //         <div className={styles.container}>
    //             <Header />
    //             {linkSuccess && (
    //                 <>
    //                     {isPaymentInitiation && <Products />}
    //                     {isItemAccess && (
    //                         <>
    //                             <Products />
    //                             <Items />
    //                         </>
    //                     )}
    //                 </>
    //             )}
    //         </div>
    //     </div>
    // );
}
