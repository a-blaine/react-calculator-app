import React from "react";
import { actions } from "./App";

export default function DigitButton({ dispatch, digit }) {
  return (
    <button onClick={() => dispatch({ type: actions.add, payload: { digit } })}>
      {digit}
    </button>
  );
}
