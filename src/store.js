import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
//import calculatorReducer from "./reducers/calculator";
export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
