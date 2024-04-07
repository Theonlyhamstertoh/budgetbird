interface InputFields {
    label: string;
    placeholder: string;
    icon: string;
}

const InputField = ({ label, placeholder, icon }: InputFields) => {
    return (
        <div className="input-container">
            <label htmlFor="input">{label}</label>
            <img src={icon} alt="icon" />
            <input type="text" placeholder={placeholder} id="input" />
        </div>
    );
};

export default InputField;
