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

function CounterOne() {
  const [count, dispacth] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispacth("increment")}>Increment</button>
      <button onClick={() => dispacth("decrement")}>Decrement</button>
      <button onClick={() => dispacth("reset")}>Reset</button>
    </div>
  );
}

export default CounterOne;
