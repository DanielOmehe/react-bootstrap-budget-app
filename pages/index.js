import Budget from "../components/budget";
import { createContext, useReducer } from "react";
import { ACTIONS } from "../components/budget/ACTIONS.JS";
import { reducer } from "../components/budget/reducer";

export const BudgetContext = createContext(null);

const initialState = {
  isOpen: false,
  open: false,
  budgets: [],
  expenses: []
};

const BudgetTracker = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e)=>{
    dispatch({
      type: ACTIONS.HANDLE_FORM_INPUT,
      field: e.target.name,
      payload: {
        value: e.target.value
      }
    })
  }

  const handleShow = (type)=>{
    dispatch({ type })
  }
  const handleClose = (type)=>{
    dispatch({ type })
  }
  return (
    <>
      <BudgetContext.Provider value={{ state, ACTIONS, dispatch, handleChange, handleShow, handleClose  }}>
        <Budget />
      </BudgetContext.Provider>
    </>
  );
};

export default BudgetTracker;
