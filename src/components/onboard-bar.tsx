import React from "react";
import Link from 'next/link'


/**
 *
 * @assignee Sophia
 * @task Onboarding bar. We will pass in links as props. If prev link/next link is undefined, don't display their respective button.
 *
 */

type OnboardingBarProps = {
    prevHref: string;
    nextHref: string;
};
function OnboardingBar({ prevHref, nextHref }: OnboardingBarProps) {
    return (
        <div className="bg-emerald-900 flex justify-between flex-row w-screen items-center h-32 px-10">
            <div className="items-center gap-2 flex my-8 rounded-sm text-white hover:invert hover:bg-black pl-4 pr-4 py-2 transition">
                <img src="/arrow-left.svg" alt="BudgetBird" width="30" height="30" />
                <Link className="text-white" href={prevHref}>Back</Link>

            </div>
            
            <div className="my-8 text-white flex rounded-sm hover:invert hover:bg-black pl-4 pr-4 py-2 transition">
                <Link href={nextHref}>Save and continue</Link>
            </div>
        </div>
    )
    
}

export default OnboardingBar;
