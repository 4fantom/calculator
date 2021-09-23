import React from "react";
import "./OperandsMenu.css";
import Button from "../Button/Button";
import {add , minus, divide, multiply} from "../../reducers/calculator/action";

const OperandsMenu = ({props}) => {
    console.log(props);

    const onclickHandler = (value) => {
        switch (value) {
            case '/':
                divide();
                break
            case 'x':
                multiply();
                break
            case '-':
                minus();
                break
            case '+':
                add()
                break
            default: return;

        }
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