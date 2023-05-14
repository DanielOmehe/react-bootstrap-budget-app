import { createContext, useReducer } from "react";
import { ACTIONS } from "./ACTIONS.js";
import { generateId } from "./reducer";
import { reducer } from "./reducer";

export const BudgetContext = createContext(null);

const initialState = {
  isOpen: false,
  open: false,
  budgets: [
    {
      id: generateId(),
      name: "Entertainment",
      amount: 1000,
      isEditting: false,
    },
    { id: generateId(), name: "Electricity", amount: 5000, isEditting: false },
    { id: generateId(), name: "Internet", amount: 5000, isEditting: false },
    { id: generateId(), name: "Feeding", amount: 5000, isEditting: false },
    {
      id: generateId(),
      name: "Transportation",
      amount: 2000,
      isEditting: false,
    },
    { id: generateId(), name: "Utilities", amount: 3000, isEditting: false },
  ],
  expenses: [],
};

const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: ACTIONS.HANDLE_FORM_INPUT,
      field: e.target.name,
      payload: {
        value: e.target.value,
      },
    });
  };

  const getTotalExpenses = (category) => {
    return state.expenses
      ? state.expenses
          .filter((expenses) => expenses.category === category)
          .reduce((accum, {amount}) => {
            return accum + parseFloat(amount);
          }, 0)
      : 0;
  };

  const handleShow = (type) => {
    dispatch({ type });
  };

  const handleEdit = (type, id) => {
    dispatch({ type, payload: { id } })
  };

  const cancelEdit =(id)=>{
    dispatch({ type: ACTIONS.CANCEL_EDIT, payload: { id } })
  }

  const handleClose = (type) => {
    dispatch({ type });
  };
  return (
    <BudgetContext.Provider
      value={{
        state,
        ACTIONS,
        cancelEdit,
        dispatch,
        handleChange,
        handleShow,
        handleClose,
        handleEdit,
        getTotalExpenses,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetProvider;
