const initialState = {
    step: 1,
    result: 0,
    operator: null,
    firstOperand: null,
    display: '0'

}

export default function calculator(state = initialState, action) {
    console.log('act', action);
    switch (action.type) {
        case "SET_CURRENT_NUMBER":
            if (state.step === 1) {
                state.firstOperand = action.payload
            } else if (state.step === 2) {
                switch (state.operator) {
                    case "plus":
                        state.result = state.firstOperand + action.payload;
                        break
                    case "minus":
                        state.result = state.firstOperand - action.payload;
                        break
                    case "divide":
                        state.result = state.firstOperand / action.payload;
                        break
                    case "multiply":
                        state.result = state.firstOperand / action.payload;
                        break
                    default: return
                }
            }
            break
        case "ADD_OPERATION":
            if (state.step === 1 &&state.firstOperand) {
                state.step++;
                state.operator = 'plus';
            }
            break
        case "MINUS_OPERATION":
            if (state.step === 1 &&state.firstOperand) {
                state.step++;
                state.operator = 'minus';
            }
            break
        case "DIVIDE_OPERATION":
            if (state.step === 1 &&state.firstOperand) {
                state.step++;
                state.operator = 'divide';
            }
            break
        case "MULTIPLY_OPERATION":
            if (state.step === 1 &&state.firstOperand)  {
                state.step++;
                state.operator = 'multiply';
            }
            break
        default :
            console.log(state);



    }

    return {...state}
}