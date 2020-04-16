import React from 'react';
import './input.css';
import {TextInput} from 'react-materialize';

export default (props) => {
    return (
        <div className="input-field">
            <TextInput
                id={props.name}
                label={props.name}
                name={props.name} 
                type={props.type}  
                value={props.value} 
                onChange={props.change}
            />
        </div>
    )
}