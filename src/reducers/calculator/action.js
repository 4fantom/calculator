import store from "../../store";


export const add = () => (store.dispatch({type: "ADD_OPERATION"}))
export const minus = () => (store.dispatch({type: "MINUS_OPERATION"}))
export const multiply = () => (store.dispatch({type: "MULTIPLY_OPERATION"}))
export const divide = () => (store.dispatch({type: "DIVIDE_OPERATION"}))
export const setCurrentNumber = (payload) => (store.dispatch({type: "SET_CURRENT_NUMBER", payload}))
export const clearState = () => (store.dispatch({type: "CLEAR_STATE"}))
export const storeResult = () => (store.dispatch({type: "STORE_RESULT"}))
