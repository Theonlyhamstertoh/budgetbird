import React from "react";

/**
 *
 * @assignee Daniella
 * @task Button has default white color with shadows. Create a green button variant as well
 *
 */

type ButtonProps = {
    onClick: () => void;
};
function Button({ onClick }: ButtonProps) {
    return <div>
        <button onClick={onClick} style={{backgroundColor: "white", boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)", padding: "10px 110px", border: "none", borderRadius: "10px", cursor: "pointer"}}>Cancel</button>
    </div>;
}

export function GreenButton({ onClick }: ButtonProps) {
    return <div>
        <button onClick={onClick} style={{backgroundColor: "green", color: "white", boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.5)", padding: "10px 118.5px", border: "none", borderRadius: "10px", cursor: "pointer"}}>Save</button>
        <button onClick={onClick} style={{backgroundColor: "green", color: "white", boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.5)", padding: "10px 40px", border: "none", borderRadius: "10px", cursor: "pointer"}}>Income</button>
    </div>;
}

export default Button;