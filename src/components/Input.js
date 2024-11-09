import React, { useEffect, useReducer } from 'react';

import { validate } from '../utils/validators';

const inputReducer = (state, action) => {
    switch(action.type){
        case 'CHANGE':
            return{
                ...state,
                value: action.nextVal,
                isValid: validate( action.nextVal, action.validators )
            };
        case 'TOUCH':
            return{
                ...state,
                isTouched: true
            }
        default: 
            return state
    }
}

const initialArgs = {    
    value: '',
    isTouched: false,       
    isValid:false
}

export default function Input(props) {
    const [inputState, dispatch] = useReducer(inputReducer, initialArgs);

    const { onInput, id } = props;
    const { value, isValid } = inputState

    useEffect(()=>{
        onInput(id, value, isValid)
    },[onInput, id, value, isValid])
    
    function changeHandler(e){
        dispatch({
            type: 'CHANGE',
            nextVal: e.target.value,
            validators : props.validators
        })
    }

    function touchHandler(){
        dispatch({
            type: 'TOUCH'
        })
    }


    let element;

    if(props.element === 'input'){
        element = (
            <input 
                id={props.id}
                type={props.type} 
                placeholder={props.placeholder}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
                
        )
    } else if (props.element === 'textarea'){
        element = (
            <textarea 
                id={props.id} 
                type={props.type} 
                placeholder={props.placeholder}
                onChange={changeHandler}
                value={inputState.value}
                onBlur={touchHandler}
            />
        )
    }
  
  
    return (
    <div
        className={`formControl ${!inputState.isValid &&
          'formControl--invalid'}`}
    >
        {element}
        {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  )
}
