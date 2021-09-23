const initialState = {
    step: 0,
    result: 0,
    operator: null,
    numbers: []

}
export default function calculator(state = initialState, action) {
    switch (action.type) {
        case "SET_CURRENT_NUMBER":
            if (state.step !== 1) {
                const lastIndex = state.numbers.length - 1;
                const newNumberValue = Number(`${state.numbers[lastIndex]}${action.payload}`);
                state.numbers[lastIndex] = newNumberValue;
                state.step++;
            } else {
                console.warn("Error")
            }
        case "ADD_OPERATOR":
            if (state.step === 1) {
                state.numbers.push()
            }
        default :
            return
    }

    return {...state}
}