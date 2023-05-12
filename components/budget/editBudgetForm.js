import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { BudgetContext } from "../../widget/budgetContext";

const EditBudgetForm =({edit})=>{
    const { state, ACTIONS, dispatch, cancelEdit, handleChange } = useContext(BudgetContext);

    const editBudget =(name, amount)=>{
        dispatch({ type: ACTIONS.EDIT_BUDGET, payload: {name, amount} })
    }
    return(
        <Modal show={edit} onHide={() => cancelEdit(edit)} >
            <Form className='mb-4 p-4'>
                <Form.Group className='mb-3'>
                    <Form.Label>Budget</Form.Label>
                    <Form.Control name='newBudget' placeholder='update budget' onChange={(e)=>handleChange(e)} value={state.newBudget ? state.newBudget : ''} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Budget Amount</Form.Label>
                    <Form.Control placeholder='update amount' name='newAmount' onChange={(e) => handleChange(e)} value={state.newAmount ? state.newAmount : ''}/>
                </Form.Group>
                <Button variant='primary' onClick={()=> editBudget(state.newBudget, state.newAmount)}>Update Budget</Button>
            </Form>
        </Modal>
    )
}

export default EditBudgetForm