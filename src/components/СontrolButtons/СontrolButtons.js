import React from "react";
import "./СontrolButtons.css";
import Button from "../Button/Button";
import {clearState, storeResult} from "../../reducers/calculator/action";

const ControlButtons = ({props}) => {
    const onclickHandler = (value) => {
        switch (value) {
            case "AC":
                clearState()
                break
            case "Mem+":
                storeResult();
                break
            default:
                return
        }
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
