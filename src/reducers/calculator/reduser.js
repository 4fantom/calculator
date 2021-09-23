const initialState = {
    step: 1,
    result: 0,
    operator: null,
    firstOperand: null,
    display: 'Lets calculate something!',
    storedResult: null,
}

export default function calculator(state = initialState, action) {
    console.log('act', action);
    switch (action.type) {
        case "SET_CURRENT_NUMBER":
            if (state.step === 1) {
                state.firstOperand = action.payload
                state.display=state.firstOperand;
            } else if (state.step === 2) {
                switch (state.operator) {
                    case "plus":
                        state.result = state.firstOperand + action.payload;
                        state.step --;
                        state.firstOperand = state.result;
                        state.display=state.result;
                        break
                    case "minus":
                        state.result = state.firstOperand - action.payload;
                        state.step --;
                        state.firstOperand = state.result;
                        state.display=state.result;
                        break
                    case "divide":
                        state.result = state.firstOperand / action.payload;
                        state.step --;
                        state.firstOperand = state.result;
                        state.display=state.result;
                        break
                    case "multiply":
                        state.result = state.firstOperand * action.payload;
                        state.step --;
                        state.firstOperand = state.result;
                        state.display=state.result;
                        break
                    default: return
                }
            }
            break
        case "ADD_OPERATION":
            if (state.step === 1 && state.firstOperand!==null) {
                state.step++;
            }
                state.operator = 'plus';
                state.display=state.firstOperand.toString()+'+';
            break
        case "MINUS_OPERATION":
            if (state.step === 1 && state.firstOperand!==null) {
                state.step++;
            }
                state.operator = 'minus';
                state.display=state.firstOperand.toString()+'-';
            break
        case "DIVIDE_OPERATION":
            if (state.step === 1 && state.firstOperand!==null) {
                state.step++;
            }
            state.operator = 'divide';
            state.display=state.firstOperand.toString()+'/';
            break
        case "MULTIPLY_OPERATION":
            if (state.step === 1 && state.firstOperand!==null) {
                state.step++;
            }
            state.operator = 'multiply';
            state.display=state.firstOperand.toString()+'*';
            break
        case "CLEAR_STATE":
            state=initialState;
            break;
        case "STORE_RESULT":
            state.storedResult=state.result;
            break
        default :
            console.log(state);
    }

    return {...state}
}