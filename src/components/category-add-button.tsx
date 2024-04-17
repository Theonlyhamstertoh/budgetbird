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
    <div className="bg-[#FAFAFA] rounded-md drop-shadow-md w-60 m-5 p-3 flex justify-between items-center">
      <div className="flex">
        {icon && <img src={icon} alt="icon" className="w-7" />}
        <h3 className="mx-2 font-semibold text-zinc-600">{label}</h3>
      </div>
      <h2 className="text-2xl cursor-pointer">+</h2>
    </div>
  );
}

export default AddCategoryButton;
