import { createStore } from "./src/createStore.js";

//types of actions that can be dispatched
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const RESET = "RESET";

//initial state
const initialState = {
  value: 0,
};

//REDUCER function //how the state will change based on actions applied
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state, //spread operator to make a shallow copy of the initialState
        value: state.value + 1, //add 1 to the current value
      };
    case SUBTRACT:
      return {
        ...state,
        value: state.value - 1, //subtract 1 from the current value
      };
    case RESET:
      return {
        ...state,
        value: 0, //reset the value to 0
      };
    default:
      return state; //return the initial state
  }
}

//creating store using createStore function and reducer
const store = createStore(reducer);

//subscription written before dispatch so it can capture all state changes //logs current state to console every time action dispatched
store.subscribe(() => {
  console.log("Value: " + store.getState().value);
});

//dispatch actions

store.dispatch({ type: ADD });
store.dispatch({ type: ADD });
store.dispatch({ type: SUBTRACT });
store.dispatch({ type: RESET });

console.log("Current state: " + store.getState().value);
