import React, { useContext } from 'react'
import { BudgetContext } from '../../pages'

const Backdrop = () => {
    const { ACTIONS, dispatch } = useContext(BudgetContext);
  return (
    <>
    <div className='backdrop' onClick={()=> dispatch({ type: ACTIONS.CLOSE_FORM })} ></div>
    <style jsx>{`
        .backdrop{
            width: 100%;
            height: 100%;
            background: linear-gradient(to right, rgba(0,0,0,.67), rgba(0,0,0,.78));
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
        }
    `}</style>
    </>
  )
}

export default Backdrop
