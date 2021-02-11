import React from 'react';
import { NUMBERS, OPERATORS } from "../config/constants"
const Buttons = (props) => {
    const { onOpratorClicked, onNumberClicked, onDecimalClicked,  onResetClicked} = props
    return (
        <div className="calculator-buttons">
            {
                OPERATORS.map((operator)=> <button className="operator" value={operator.value} onClick = {onOpratorClicked}>{operator.label}</button>)
            }
            {
                NUMBERS.map((number)=> <button value={number} onClick = {onNumberClicked} >{number}</button>)
            }    
            <button className="decimal" onClick = {onDecimalClicked} >.</button>
            <button className="clear" onClick = {onResetClicked} >C</button>
            <button className="equal-sign operator" value="=" onClick = {onOpratorClicked}>=</button>
        </div>
    );
};

export default Buttons;