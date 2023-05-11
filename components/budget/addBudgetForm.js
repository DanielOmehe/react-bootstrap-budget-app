import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Cancel from "./cancel";
import { useContext } from "react";
import { BudgetContext } from "../../widget/budgetContext";
import Modal from "react-bootstrap/Modal";

const AddBudgetForm = () => {
  const { state, ACTIONS, dispatch, handleChange, handleClose } =
    useContext(BudgetContext);

  const addBudget = () => {
    dispatch({
      type: ACTIONS.ADD_BUDGET,
      payload: { name: state.budget, amount: state.budgetAmount },
    });
  };

  return (
    <>
      <Modal
        show={state.isOpen}
        onHide={() => handleClose(ACTIONS.CLOSE_FORM)}
        className=" mb-5 "
      >
        <div className="w-100">
          <Form className="mb-3 p-4">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="budget"
                placeholder="enter budget"
                value={state.budget}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                name="budgetAmount"
                placeholder="enter budget amount"
                value={state.budgetAmount}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Button variant="primary mb-3" onClick={addBudget}>
              Add Budget
            </Button>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default AddBudgetForm;
