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
            const minutes = state.minutes < 10 ? `0${state.minutes}` : state.minutes;
            const seconds = state.seconds < 10 ? `0${state.seconds}` : state.seconds;
            let lapTime = [...state.laps, `${minutes}:${seconds}`];
            return { ...state, laps: lapTime };
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;