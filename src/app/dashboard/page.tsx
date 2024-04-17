import { redirect } from "next/navigation";

import { Button } from "@/src/components/ui/button";

export default async function Page() {
    return (
        <p>
            Page
            {/* <ReusableComponent label="Bananas" /> */}
            {/* <ReusableComponent label="Apples" /> */}
            {/* <UserBalance money={541} /> */}
        </p>
    );
}

// function ReusableComponent({ label }: { label: string }) {
//     return <Button className="my-2">{label}</Button>;
// }
// function UserBalance({ money }: { money: number }) {
//     // const money = 531;
//     return <div>I Have: ${money}</div>;
// }
