import Budget from "../components/budget";
import { useState, createContext, useReducer } from "react";
import { ACTIONS } from "../components/budget/ACTIONS.JS";
import { reducer } from "../components/budget/reducer";

export const BudgetContext = createContext(null);

const initialState = {
  isOpen: false,
  budgets: [],
  expenses: []
};

const BudgetTracker = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <BudgetContext.Provider value={{ state, ACTIONS, dispatch }}>
        <Budget />
      </BudgetContext.Provider>
    </>
  );
};

export default BudgetTracker;
