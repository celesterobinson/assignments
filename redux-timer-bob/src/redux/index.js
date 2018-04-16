import { createStore } from "redux";

const initialState = {
    minutes: 0,
    seconds: 0
}

export const addSecond = () => {
    return {
        type: "ADD_SECOND"
    }
}

export const reset = () => {
    return {
        type: "RESET"
    }
}

const reducer = (state = initialState, action) => {
    const stateCopy = { ...state };
    switch (action.type) {
        case "ADD_SECOND":
            if (state.seconds === 59) {
                stateCopy.seconds = 0;
                stateCopy.minutes++
            } else {
                stateCopy.seconds++;
            }
            return stateCopy;
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;