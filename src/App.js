import "./App.css";
import { useReducer } from "react";
import DigitButton from "./DigitButton";

export const actions = {
  add: "add-digit",
  clear: "clear",
  delete: "delete-digit",
  select: "choose-operation",
  evaluate: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case actions.add:
      return {
        ...state,
        currentOperand: `${currentOperand || ""}${payload.digit}`,
      };
  }
}

let currentOperand = 4;

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="container">
        <div className="output">
          <div className="previous-operand">
            {previousOperand} {operation}
          </div>
          <div className="current-operand">{currentOperand}</div>
        </div>
        <button className="span-two">AC</button>
        <button>DEL</button>
        <DigitButton digit="÷" dispatch={dispatch} />

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>×</button>

        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>

        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>

        <button>.</button>
        <button>0</button>
        <button className="span-two">=</button>
      </div>
    </div>
  );
}

export default App;
