import { ACTIONS } from "./ACTIONS.JS";

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
    }
}