import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useContext } from 'react';
import { BudgetContext } from '../../widget/budgetContext'

const EditBudgetForm =({})=>{
    const { ACTIONS, state, handleClose } = useContext(BudgetContext)
    return(
        <Modal show={state.isEditting} handleClose={() => handleClose(ACTIONS.CLOSE_EDIT)} >
            <Form>
                <Form.Group>
                    <Form.Label>Budget</Form.Label>
                    <Form.Control placeholder='update budget' />
                </Form.Group>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
            </Form>
        </Modal>
    )
}