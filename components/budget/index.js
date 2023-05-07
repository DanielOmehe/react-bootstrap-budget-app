import { Stack, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import BudgetCard from "./budgetCard";
import { useContext } from 'react';
import AddBudgetForm from "./addBudgetForm";
import { BudgetContext } from "../../pages";
import Backdrop from "./backdrop";

const Budget =()=>{

    const { state, ACTIONS, dispatch } = useContext(BudgetContext);
    return (
        <Container className="my-4">
            <AddBudgetForm />
            { state.isOpen ? <Backdrop /> : null }
            <Stack direction='horizontal' gap='2' className="mb-4">
                <h1 className="me-auto">Budgets</h1>
                <Button variant="primary" onClick={()=> dispatch({ type: ACTIONS.OPEN_FORM })}>Add Budget</Button>
                <Button variant="outline-primary">Add Expense</Button>
            </Stack>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr)', gap: '1rem', alignItems: 'flex-start' }}>
                <BudgetCard name='Entertainment' amount={100} max={1000} gray></BudgetCard>
            </div>
        </Container>
    )
}

export default Budget