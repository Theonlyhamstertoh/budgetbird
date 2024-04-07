import React from "react";

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
    return <div>DashboardSidebar</div>;
}

export default OnboardingBar;
