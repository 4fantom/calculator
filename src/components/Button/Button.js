import React from "react";
import "./Button.css";

const Button = ({props}) => {
    console.log(props);
    return <div className={props.className} onClick={props.onclickHandler}>
        <p className={'buttonText'}>{props.label}</p>
    </div>
}

export default Button;