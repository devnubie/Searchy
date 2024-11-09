import React from 'react';
import Input from '../components/Input';
import { VALIDATOR_REQUIRE } from '../utils/validators';

export default function Search() {
    const inputHandler = (id, value, isValid) => {

    }
    
    return (
    <form>
        <Input 
            element="input" 
            type="text" 
            id="search" 
            placeholder="Search.."
            errorText="Please enter a Query"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
        />
    </form>
  )
}
