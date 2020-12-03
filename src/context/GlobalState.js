import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
import uuid from 'react-uuid'

//Initialized state
const initialState = {
    transactions: [
        { id: uuid(), text: 'Flower', amount: -20 },
        { id: uuid(), text: 'Salary', amount: 300 },
        { id: uuid(), text: 'Book', amount: -10 },
        { id: uuid(), text: 'Camera', amount: 150 }
    ] 
}

//Create context

export const GlobalContext = createContext(initialState)

//Provider Component

export const GlobalProvider = ({children})=>{
    const[state,dispatch] =  useReducer(AppReducer, initialState)
    
    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })

    }

    function addTransaction(transaction){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    return(<GlobalContext.Provider value = {{transactions:state.transactions , deleteTransaction , addTransaction}}>
        {children}
    </GlobalContext.Provider>)
}
