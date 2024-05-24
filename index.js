import { createStore } from "./src/createStore.js";

const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const RESET = "RESET";

//initial state
const initialState = {
  value: 0,
};

//REDUCER function
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
