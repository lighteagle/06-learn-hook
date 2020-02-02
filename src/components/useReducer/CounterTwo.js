import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;

    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispacth] = useReducer(reducer, initialState);

  return (
    <div>
      <div>1st Count - {count.firstCounter}</div>
      <div>2nd Count - {count.secondCounter}</div>
      <button onClick={() => dispacth({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispacth({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispacth({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispacth({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <div>
        <button onClick={() => dispacth({ type: "increment2", value: 1 })}>
          Increment 2nd
        </button>
        <button onClick={() => dispacth({ type: "decrement2", value: 1 })}>
          Decrement 2nd
        </button>
      </div>
      <button onClick={() => dispacth({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;
