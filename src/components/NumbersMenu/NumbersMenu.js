import React from "react";
import "./NumbersMenu.css";
import Button from "../Button/Button";
import ControlButtons from "../СontrolButtons/СontrolButtons";
import {setCurrentNumber} from "../../reducers/calculator/action";

const NumbersMenu = ({props}) => {
    console.log(props);

    const onclickHandler = (value) => {
        setCurrentNumber(value)
    }
    const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9,0]

    return <div className={'numbersMenu'}>
        {numbers.map(number =>
            <div>
                <Button props={{label: number, className: 'button', onclickHandler: () => onclickHandler(number)}}/>
            </div>
        )
        }
        <ControlButtons/>
    </div>
}

export default NumbersMenu;