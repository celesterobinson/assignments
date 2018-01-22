import { createStore } from "redux";

const initialState = {
    minutes: 0,
    seconds: 0,
    laps: []
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

export const addLap = () => {
    return {
        type: "ADD_LAP"
    }
}

const reducer = (state = initialState, action) => {
    const stateCopy = { ...state };
    const lapsCopy = { ...state.laps }
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
        case "ADD_LAP":
            let lapTime = [`${state.minutes}:${state.seconds}`, ...lapsCopy];
            console.log(lapTime);
            break;
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;