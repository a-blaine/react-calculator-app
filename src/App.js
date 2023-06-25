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

let currentOperand = "";

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

        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <button>×</button>

        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <button>+</button>

        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <button>-</button>

        <button>.</button>
        <DigitButton digit="0" dispatch={dispatch} />
        <button className="span-two">=</button>
      </div>
    </div>
  );
}

export default App;
