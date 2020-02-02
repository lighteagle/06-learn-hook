import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;

    default:
      return state;
  }
};

function CounterThree() {
  const [count, dispacth] = useReducer(reducer, initialState);
  const [countTwo, dispacthTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispacth("increment")}>Increment</button>
      <button onClick={() => dispacth("decrement")}>Decrement</button>
      <button onClick={() => dispacth("reset")}>Reset</button>

      <div>
        <div>Count - {countTwo}</div>
        <button onClick={() => dispacthTwo("increment")}>Increment</button>
        <button onClick={() => dispacthTwo("decrement")}>Decrement</button>
        <button onClick={() => dispacthTwo("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default CounterThree;
