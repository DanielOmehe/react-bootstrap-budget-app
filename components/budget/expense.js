import { currencyFormatter } from '../../utils';
import {BsFillTrashFill} from 'react-icons/bs'
import Button from 'react-bootstrap/Button'
import { useContext } from 'react'
import { BudgetContext } from '../../pages';

const Expense =({expense, pos})=>{
    const { ACTIONS, dispatch } = useContext(BudgetContext)
    return(
        <tr key={expense.id}>
        <td>{pos + 1}</td>
        <td>{expense.name}</td>
        <td>{currencyFormatter.format(expense.amount)}</td>
        <td>{expense.desc}</td>
        <td>{expense.category}</td>
        <td>
            <Button variant='light' onClick={() => dispatch({ type: ACTIONS.DELETE_EXPENSE, payload: { id: expense.id } })}>
                <BsFillTrashFill />
            </Button>
        </td>
      </tr>
    )
}

export default Expense