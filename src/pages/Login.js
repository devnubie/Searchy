import React from 'react';
import Input from '../components/Input';
import { VALIDATOR_EMAIL } from '../utils/validators';

export default function Login() {
    const inputHandler = (id, value, isValid) => {

    }
 
    return (
    <form>
        <Input 
            element="input" 
            id="email" 
            type="email" 
            placeholder="Email address.."
            errorText="Please enter a valid email address"
            onInput={inputHandler}
            validators={[VALIDATOR_EMAIL()]}
        />
    </form>
  )
}
