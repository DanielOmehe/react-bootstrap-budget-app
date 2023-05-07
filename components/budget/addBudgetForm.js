import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Cancel from "./cancel";
import { useContext } from "react";
import { BudgetContext } from "../../pages";

const AddBudgetForm =()=>{

  const { state } = useContext(BudgetContext);
  return (
    <>
      <div className="shadow p-5 mb-lg-5 add-budget-form">
        <Cancel />
        <Form className="mb-3">
          <Form.Group className="mb-5">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="enter budget" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" placeholder="enter budget amount" />
          </Form.Group>
          <Button variant="primary mb-3">Add Budget</Button>
        </Form>
      </div>
      <style jsx>{`
        .add-budget-form {
            width: 700px;
            height: 400px;
            margin-left: 12rem;
            z-index: 2;
            position: absolute;
            background: #fff;
            top: ${state.isOpen === false ? '-100%' : '20%'};
            transition: all .5s linear;
        }
      `}</style>
    </>
  );
};

export default AddBudgetForm;
