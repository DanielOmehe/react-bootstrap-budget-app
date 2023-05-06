import Form from "react-bootstrap/Form"
import Button from  'react-bootstrap/Button'

const AddBudgetForm =()=>{
    <Form className="mb-5">
        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="enter budget" />
        </Form.Group>
        <Form.Group>
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" placeholder="enter budget amount" />
        </Form.Group>
        <Button variant="primary">Add Budget</Button>
    </Form>
}

export default AddBudgetForm