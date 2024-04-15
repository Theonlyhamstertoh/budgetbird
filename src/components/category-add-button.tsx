import Image from "next/image";
import React from "react";

type AddCategoryButtonProps = {
    icon?: string;
    label: string;
};
/**
 *  *
 * @assignee Zophia
 * @task Category button with icon and plus sign. Allow for icon to be optional.
 *
 */

function AddCategoryButton({ icon, label }: AddCategoryButtonProps) {
    return (
        <div
            className="bg-white h-12 p-3 border-2 border-zinc-200/70 rounded-lg flex items-center justify-between"
            style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
        >
            <div className="flex">
                {icon && <img src={icon} alt="icon" className="w-7" />}
                <h3 className="mx-2 font-semibold text-zinc-600">{label}</h3>
            </div>
            <h2 className="text-3xl cursor-pointer">
                <Image src="/plus.svg" width="24" height="24" alt="Plus" />
            </h2>
        </div>
    );
}

export default AddCategoryButton;
