import React from 'react'
import { useReducer } from 'react'
import DigitButton from './DigitButton'
import "./style.css"

const  ACTIONS = {
  ADD_DIGITS: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGITS: "delete-digit",
  EVALUATE : "evaluate"


} 

function reducer(state, {type,payload}) {
  switch(type){
    case ACTIONS.ADD_DIGITS:
      return {
        ... state,
        //currentOperand: `${currentOperand}${payload.digit}` 
        }
      }
  }

 

function App() {
 const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})

 dispatch({type: ACTIONS.ADD_DIGITS, payload: {digit: 1}  })
  return (
    <div className='calculator-grid'>
      <div className='outputs'>
        <div className='previous-operand'>{previousOperand}{operation}</div>
        <div className='current_operand'>{currentOperand}</div>
      </div>
      <button className='span-two'>AC</button>
      <button>DEL</button>
      <DigitButton digit="÷" dispatch={dispatch}/>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className='span-two'>=</button>

    </div>
  )
}

export default App