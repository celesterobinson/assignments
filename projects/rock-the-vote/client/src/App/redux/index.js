import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import issue from "./issue";

const rootReducer = (combineReducers({ issue }));

let store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
})

export default store;