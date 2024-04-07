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
    return <div>button</div>;
}

function GreenButton({ onClick }: ButtonProps) {
    return <div>button</div>;
}

export default Button;
