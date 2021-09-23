import React from "react";
import "./СontrolButtons.css";
import Button from "../Button/Button";

const ControlButtons = ({props}) => {
    console.log(props);
    const onclickHandler = (value) => {
        console.log(value)
    }
    const controls = [ 'AC', 'Mem+'];
    return <div className={'controlMenu'}>
        {controls.map(control =>
            <div>
                <Button props={{label: control, className: 'button', onclickHandler: () => onclickHandler(control)}}/>
            </div>
        )
        }
    </div>
}

export default ControlButtons;
