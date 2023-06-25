import React from "react";
import { actions } from "./App";

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: actions.selectOperation, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}
