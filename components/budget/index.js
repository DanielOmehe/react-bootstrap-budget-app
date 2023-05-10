import { Stack, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import BudgetCard from "./budgetCard";
import { useContext } from "react";
import AddBudgetForm from "./addBudgetForm";
import { BudgetContext } from "../../pages";
import Backdrop from "./backdrop";
import Placeholder from "./placeholder";
import Table from "react-bootstrap/Table";
import AddExpensesForm from "./addExpensesForm";
import Expense from './expense';

const Budget = () => {
  const { state, ACTIONS, dispatch, handleShow } = useContext(BudgetContext);

  return (
    <>
      <Container className="my-4">
        <AddBudgetForm />
        <AddExpensesForm />
        {state.isOpen | state.open ? <Backdrop /> : null}
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button
            variant="primary"
            onClick={() => handleShow(ACTIONS.OPEN_FORM)}
          >
            New Budget
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => handleShow(ACTIONS.OPEN_EXPENSE_FORM)}
          >
            New Expense
          </Button>
        </Stack>
        {state.budgets.length === 0 && <Placeholder />}
        <div className="budgets-container">
          {state.budgets.map((budget) => (
            <BudgetCard
              name={budget.name}
              amount={0}
              max={budget.amount}
              id={budget.id}
              key={budget.id}
              gray
            />
          ))}
        </div>
        <div className="expenses-container">
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Description</th>
                <th>Category</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {state.expenses.map((expense, id) => (
                <Expense expense={expense} pos={id} />
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
      <style jsx>{`
        .budgets-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-row: minmax(100px, 200px);
          gap: 20px;
          min-height: 200px;
        }

        .expenses-container {
          margin-top: 40px;
        }
      `}</style>
    </>
  );
};

export default Budget;
