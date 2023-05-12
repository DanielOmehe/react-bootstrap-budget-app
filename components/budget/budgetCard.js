import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Stack from 'react-bootstrap/Stack';
import { currencyFormatter } from '../../utils';
import { useContext } from 'react';
import { BudgetContext } from '../../widget/budgetContext';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

const BudgetCard =({ name, amount, max, gray, id, ratio })=>{
    const { state, dispatch, ACTIONS, handleEdit } = useContext(BudgetContext);
    const classNames = [];
    if(amount > max){
        classNames.push('bg-danger', 'bg-opacity-10')
    }else if(gray){
        classNames.push('bg-light')
    }



    const deleteBudget =(id)=>{
        dispatch({ type: ACTIONS.DELETE_BUDGET, payload: { id: id } })
    }
  return (
    <Card className={classNames.join(' ')}>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal mb-3'>
                <div className='me-2'>{name}</div>
                <div className='d-flex align-items-baseline'> {currencyFormatter.format(amount)} / <span className='text-muted fs-6 ms-1'>{currencyFormatter.format(max)}</span> </div>
            </Card.Title>
            <ProgressBar className='rounded-pill' min={0} max={max} label={`${ratio()}%`} now={amount} variant={getProgressBarVariant(amount, max)} />
            <Stack direction='horizontal' gap='2' className='mt-4 d-flex justify-content-end'>
                <Button variant='outline-secondary'  onClick={() => handleEdit(id)}><FaEdit /></Button>
                <Button variant='outline-danger'  onClick={() => deleteBudget(id)}><FaTrash /></Button>
            </Stack>
        </Card.Body>
    </Card>
  )
}

function getProgressBarVariant(amount, max){
    const ratio = amount / max;
    if(ratio < .5) return 'primary'
    if(ratio < .75) return 'warning'
    return 'danger'

    console.log(amount)
}

export default BudgetCard
