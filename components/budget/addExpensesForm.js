import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { BudgetContext } from "../../widget/budgetContext";

const expenses = [
  "Choose Category",
  "Entertainment",
  "Education",
  "Transportation",
  "Internet",
  "Charity",
  "Feeding",
  "Electricity",
  "Utilites",
];

const AddExpensesForm = () => {
  const { state, ACTIONS, dispatch, handleChange, handleClose } =
    useContext(BudgetContext);

  const addExpense =()=>{
    dispatch({ type: ACTIONS.ADD_EXPENSE, payload: { name: state.expense, amount: state.amount, category: state.category, desc: state.desc } })
    console.log(state.expenses);
  }
  return (
    <>
      <Modal
        show={state.open}
        onHide={() => handleClose(ACTIONS.CLOSE_EXPENSE_FORM)}
      >
        <div className="w-100">
          <Form className="mb-3 p-4">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="expense"
                placeholder="enter expense"
                value={state.expense ? state.expense : ''}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                placeholder="enter expense amount"
                value={state.amount ? state.amount : ''}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter expense description"
                name="desc"
                value={state.desc ? state.desc : ''}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Select name='category' onChange={(e)=>handleChange(e)}>
                {expenses.map((expense, id) => (
                  <option key={id} value={expense}>{expense}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Button variant="primary mb-3" onClick={addExpense}>Add expense</Button>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default AddExpensesForm;
