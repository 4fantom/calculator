import React from "react";
import "./OperandsMenu.css";
import Button from "../Button/Button";

const OperandsMenu = ({props}) => {
    console.log(props);

    const onclickHandler = (value) => {
        console.log(value)
    }
    const operands = [ '/', 'x', '-', '+']

    return <div className={'operandsMenu'}>
        {operands.map(operand =>
            <div>
                <Button props={{label: operand, className: 'button operandButton', onclickHandler: () => onclickHandler(operand)}}/>
            </div>
        )
        }
    </div>
}

export default OperandsMenu;