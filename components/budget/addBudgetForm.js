import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Cancel from "./cancel";
import { useContext } from "react";
import { BudgetContext } from "../../pages";
import { useState } from "react";

const AddBudgetForm =()=>{
  const { state, ACTIONS, dispatch } = useContext(BudgetContext);
  const [name, setName] = useState('');
  const [amount, setAmount] =  useState('');
  
  const addBudget =()=>{
    dispatch({ type: ACTIONS.ADD_BUDGET, payload: { name: name, amount: amount }});
    setName('');
    setAmount('');
  }
  return (
    <>
      <div className="shadow p-5 mb-lg-5 add-budget-form">
        <Cancel />
        <Form className="mb-3">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="enter budget" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" placeholder="enter budget amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </Form.Group>
          <Button variant="primary mb-3" onClick={addBudget}>Add Budget</Button>
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
