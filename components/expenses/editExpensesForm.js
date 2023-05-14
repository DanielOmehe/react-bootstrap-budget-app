import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { BudgetContext } from "../../widget/budgetContext";
import { expenses } from "./addExpensesForm";

const EditExpensesForm = ({ show }) => {
  const { ACTIONS, dispatch, state, handleChange } = useContext(BudgetContext);

  const updateExpenses =({ name, amount, desc, category })=>{
    dispatch({ type: ACTIONS.UPDATE_EXPENSES, payload: { name, amount, desc, category } });
  }
  return (
    <Modal show={show} onHide={() => dispatch({ type: ACTIONS.CANCEL_EDIT_EXPENSES })}>
      <Form className="mb-4 p-4">
        <Form.Group className="mb-3">
          <Form.Label>Expense</Form.Label>
          <Form.Control
            name="expense"
            placeholder="update expenses"
            onChange={(e) => handleChange(e)}
            value={state.expense}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            placeholder="update expenses"
            name="amount"
            onChange={(e) => handleChange(e)}
            value={state.amount}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            placeholder="update expenses"
            name="desc"
            onChange={(e) => handleChange(e)}
            value={state.desc}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select name="category" onChange={(e) => handleChange(e)}>
            {expenses.map((expense) => (
              <option key={expense.id} value={expense}>
                {expense}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button
          variant="primary"
          onClick={() =>
            updateExpenses({
              name: state.expense,
              amount: state.amount,
              desc: state.desc,
              category: state.category,
            })
          }
        >
          Update expense
        </Button>
      </Form>
    </Modal>
  );
};

export default EditExpensesForm;
