import React from "react";

/**
 *
 * @assignee Daniella
 * @task Button has default white color with shadows. Create a green button variant as well
 *
 */

type ButtonProps = {
    onClick?: () => void;
    children: React.ReactNode;
};
function Button({ onClick, children }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: "white",
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
                padding: "10px 110px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
            }}
        >
            {children}
        </button>
    );
}

export function GreenButton({ onClick, children }: ButtonProps) {
    return (
        <div>
            <button
                onClick={onClick}
                style={{
                    backgroundColor: "green",
                    color: "white",
                    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.5)",
                    padding: "10px 118.5px",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                }}
            >
                {children}
            </button>
            <button
                onClick={onClick}
                style={{
                    backgroundColor: "green",
                    color: "white",
                    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.5)",
                    padding: "10px 40px",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                }}
            >
                {children}
            </button>
        </div>
    );
}

export default Button;
