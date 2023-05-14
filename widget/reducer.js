import { ACTIONS } from "./ACTIONS.js";

export const generateId = () => {
  let string = "abcdefghij123456789",
    idString = "";

  for (let i = 0; i < 7; i++) {
    idString += string[Math.floor(Math.random() * string.length)];
  }

  return idString;
};

export function reducer(state, { type, field, payload }) {
  switch (type) {
    case ACTIONS.OPEN_FORM:
      return {
        ...state,
        isOpen: true,
      };
    case ACTIONS.OPEN_EXPENSE_FORM:
      return {
        ...state,
        open: true,
      };
    case ACTIONS.CLOSE_FORM:
      return {
        ...state,
        isOpen: false,
      };
    case ACTIONS.CLOSE_EXPENSE_FORM:
      return {
        ...state,
        open: false,
      };
    case ACTIONS.ADD_BUDGET:
      return {
        ...state,
        budgets: [
          ...state.budgets,
          {
            id: generateId(),
            name: payload.name,
            amount: payload.amount,
          },
        ],
      };
    case ACTIONS.DELETE_BUDGET:
      return {
        ...state,
        budgets: state.budgets.filter((budget) => budget.id !== payload.id),
      };
    case ACTIONS.HANDLE_FORM_INPUT:
      return {
        ...state,
        [field]: payload.value,
      };
    case ACTIONS.ADD_EXPENSE:
      return {
        ...state,
        expenses: [
          ...state.expenses,
          {
            id: generateId(),
            name: payload.name,
            amount: payload.amount,
            category: payload.category,
            desc: payload.desc,
            edit: false
          }
        ]
      };
    case ACTIONS.DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== payload.id),
      };
    case ACTIONS.START_EDIT:
      return {
        ...state,
        budgets: state.budgets.map((budget) =>
          budget.id === payload.id ? { ...budget, isEditting: true } : budget
        ),
      };
    case ACTIONS.CANCEL_EDIT:
      return {
        ...state,
        budgets: state.budgets.map((budget) =>
          budget.isEditting === true ? { ...budget, isEditting: false } : budget
        ),
      };
    case ACTIONS.EDIT_BUDGET:
      return {
        ...state,
        budgets: state.budgets.map((budget) =>
          budget.isEditting
            ? { ...budget, name: payload.name, amount: payload.amount }
            : budget
        ),
      }
    case ACTIONS.EDIT_EXPENSES:
      return {
        ...state,
        expenses: state.expenses.map((expense) => expense.id === payload.id ? { ...expense, edit: true } : expense)
      }
    case ACTIONS.CANCEL_EDIT_EXPENSES:
      return {
        ...state,
        expenses: state.expenses.map(expense => expense.edit ? { ...expense, edit: false } : expense)
      }
    case ACTIONS.UPDATE_EXPENSES:
      return {
         ...state,
         expenses: state.expenses.map(expense => expense.edit ? { ...expense, name: payload.name, amount: payload.amount, desc: payload.desc, category: payload.category } : expense )
      }
    default:
      return state;
  }
}
