import React from "react";
import NumbersMenu from "../NumbersMenu/NumbersMenu";
import OperandsMenu from "../OperandsMenu/OperandsMenu";
import ResultMenu from "../ResultMenu/ResultMenu";
import './CalculatorMenu.css'



const CalculatorMenu = () => {

    return <div className={'calculatorWrapper'}>
        <div>
            <ResultMenu/>
        </div>
        <div className={'calculatorButtonsWrapper'}>
            <NumbersMenu/>
            <OperandsMenu/>
        </div>
    </div>
}
export default CalculatorMenu;