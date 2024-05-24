export function createStore(reducer) {
  let state;
  let listeners = [];

  const getState = () => state;

  //dispatch method to update the state based on the actions
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  //subscribe to state changes
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  //initialize the state by dispatching a dummy action
  dispatch({ type: "Hope" });

  return {
    getState,
    dispatch,
    subscribe,
  };
}
