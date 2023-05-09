import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Cancel from "./cancel";
import { useContext } from "react";
import { BudgetContext } from "../../pages";

const expenses = ['Electricity', 'Education', 'Transportation', 'Internet', 'Charity', 'Feeding', 'Electricity', 'Utilites']

const AddExpensesForm =()=>{
  const { state, ACTIONS, dispatch, handleChange } = useContext(BudgetContext);

  return (
    <>
      <div className="w-50 shadow p-5 mb-lg-5 add-expense-form">
        <Cancel type={ACTIONS.CLOSE_EXPENSE_FORM} />
        <Form className="mb-3">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name='expense' placeholder="enter budget" value={state.expense} onChange={(e) => handleChange(e)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" name='amount' placeholder="enter budget amount" value={state.amount} onChange={(e) => handleChange(e)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="enter budget description" name='desc' value={state.desc} onChange={(e) => handleChange(e)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Select>
              <option selected disabled>choose category</option>
              {expenses.map((expense)=>(
                <option>{expense}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button variant="primary mb-3">Add expense</Button>
        </Form>
      </div>
      <style jsx>{`
        .add-expense-form {
            width: 700px;
            margin-left: 12rem;
            z-index: 2;
            position: absolute;
            background: #fff;
            top: 10%;
            left: ${state.open === false ? '-100%' : '10%'};
            transition: all .5s linear;
        }
      `}</style>
    </>
  );
};

export default AddExpensesForm;
