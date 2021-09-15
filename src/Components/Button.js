import React from "react";

function Button(props) {
    return (
        <button className="Button" onClick={() => console.log(props.text)} disabled={props.disabled}>
            <p>{props.text}</p>
        </button>
    )
}
git
export default Button;