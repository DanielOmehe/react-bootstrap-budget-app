import { Stack, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import BudgetCard from "./budgetCard";
import { useContext } from "react";
import AddBudgetForm from "./addBudgetForm";
import { BudgetContext } from "../../pages";
import Backdrop from "./backdrop";
import Placeholder from "./placeholder";

const Budget = () => {
  const { state, ACTIONS, dispatch } = useContext(BudgetContext);

  return (
    <>
      <Container className="my-4">
        <AddBudgetForm />
        {state.isOpen ? <Backdrop /> : null}
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button
            variant="primary"
            onClick={() => dispatch({ type: ACTIONS.OPEN_FORM })}
          >
            Add Budget
          </Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>
        { state.budgets.length === 0 && <Placeholder /> }
        <div className="budgets-container">
          {
            state.budgets.map((budget) => (
              <BudgetCard
                name={budget.name}
                amount={100}
                max={budget.amount}
                id={budget.id}
                key={budget.id}
                gray
              />
            ))
          }
        </div>
      </Container>
      <style jsx>{`
        .budgets-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
      `}</style>
    </>
  );
};

export default Budget;
