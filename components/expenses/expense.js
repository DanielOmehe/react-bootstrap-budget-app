import { currencyFormatter } from "../../utils";
import { BsFillTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { BudgetContext } from "../../widget/budgetContext";
import EditExpensesForm from "./editExpensesForm";

const Expense = ({ expense: { id, name, desc, amount, category, edit }, pos }) => {
  const { ACTIONS, dispatch, handleEdit } = useContext(BudgetContext);
  return (
    <>
      <EditExpensesForm show={edit} />
      <tr>
        <td>{pos + 1}</td>
        <td>{name}</td>
        <td>{desc}</td>
        <td>{category}</td>
        <td>{currencyFormatter.format(amount)}</td>
        <td>
          <Button
            variant="light"
            onClick={() => handleEdit(ACTIONS.EDIT_EXPENSES, id)}
          >
            <FaEdit />
          </Button>
        </td>
        <td>
          <Button
            variant="light"
            onClick={() =>
              dispatch({
                type: ACTIONS.DELETE_EXPENSE,
                payload: { id: id },
              })
            }
          >
            <BsFillTrashFill />
          </Button>
        </td>
      </tr>
    </>
  );
};

export default Expense;
