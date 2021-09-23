import React from "react";
import NumbersMenu from "../NumbersMenu/NumbersMenu";
import OperandsMenu from "../OperandsMenu/OperandsMenu";
import './CalculatorMenu.css'



const CalculatorMenu = () => {

    return <div className={'calculatorWrapper'}>
        <div className={'displayResultWrapper'}>
            <p>something</p>
        </div>
        <div className={'calculatorButtonsWrapper'}>
            <NumbersMenu/>
            <OperandsMenu/>
        </div>
    </div>
}
export default CalculatorMenu;