interface InputFields {
  label: string;
  placeholder: string | number;
  icon?: string;
}

const InputField = ({ label, placeholder, icon }: InputFields) => {
  return (
    <div className="bg-[#FAFAFA] rounded-md drop-shadow-md m-5 p-3 flex justify-between ">
      <div className="flex items-center">
        {icon && <img src={icon} alt="icon" className="w-7" />}
        <label htmlFor="input" className="mx-2 font-semibold text-zinc-600">
          {label}:
        </label>
      </div>
      <input
        type="text"
        placeholder={
          typeof placeholder === "number"
            ? `$${placeholder.toLocaleString()}`
            : String(placeholder)
        }
        id="input"
        className="bg-transparent"
      />
    </div>
  );
};

export default InputField;
