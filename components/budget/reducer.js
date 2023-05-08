import { ACTIONS } from "./ACTIONS.JS";

const generateId =()=>{
    let string = 'abcdefghij123456789',
    idString = ''

    for(let i = 0; i < 7; i++){
        idString += string[Math.floor(Math.random() * string.length)]
    }

    return idString;
}

export function reducer(state, {type, payload}){
    switch(type){
        case ACTIONS.OPEN_FORM: 
        return {
            ...state, 
            isOpen: true
        }
        case ACTIONS.CLOSE_FORM: 
        return {
            ...state, 
            isOpen: false
        }
        case ACTIONS.ADD_BUDGET:
            return {
                ...state,
                budgets: [
                    ...state.budgets,
                    {
                        id: generateId(),
                        name: payload.name,
                        amount: payload.amount
                    }
                ]
            }
        case ACTIONS.DELETE_BUDGET:
            return{
                ...state,
                budgets: state.budgets.filter(budget => budget.id !== payload.id)
            }
    }
}