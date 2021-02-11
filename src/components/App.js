import React, { useState } from 'react';
import ButtonsComponent from './ButtonsComponent'
import DisplayComponent from './DisplayComponent'
import {calculate} from '../config/utils'
const initialState = {
    firstValue : 0, 
    displayValue: '0',
    operatorValue: '',
    waitingForNextNumber: false
}
class App extends React.Component {
    constructor(props){
        super(props)
        this.state  ={
            ...initialState
        }
    }
    operatorHanlder = (e)=>{
        const operator = e.target.value
        const { waitingForNextNumber, operatorValue, firstValue, displayValue } = this.state
        
        if(operatorValue && waitingForNextNumber ){
            this.setState({
                operatorValue: operator
            })
            return 
        }
        if(!firstValue){
            this.setState({
                firstValue: Number(displayValue)
            })
        }else{
            const result = calculate(firstValue, Number(displayValue))[operatorValue]
            this.setState({
                displayValue: result, 
                firstValue: result
            })
        }
        this.setState({
            waitingForNextNumber: true,
            operatorValue: operator
        })
    }
    
    /**
     * 
     * @param {*} e 
     */
    numberHandler = (e)=>{
        const num  = e.target.value
        const { waitingForNextNumber, firstValue, displayValue } = this.state
        if(waitingForNextNumber){
           this.setState({
            displayValue: num, 
            waitingForNextNumber: false
           })
        }else{
            this.setState(({displayValue}) => ({displayValue: (displayValue === '0')? num : displayValue + num}))
        }
        
    }

    decimalHanlder = (e) => {
        const {displayValue } = this.state
        if(!displayValue.includes('.')){
            console.log('HEllo')
            this.setState({
                displayValue: `${displayValue}.`
            })
        }
    }
    
    resetHanlder = (e) =>{
        this.setState(initialState)
    }

    render(){
        const { displayValue } = this.state
        return (
            <div className="calculator">
                <DisplayComponent displayValue = {displayValue}/>
                <ButtonsComponent 
                    onOpratorClicked = {this.operatorHanlder}
                    onNumberClicked = {this.numberHandler}
                    onDecimalClicked = {this.decimalHanlder}
                    onResetClicked = {this.resetHanlder}
                />
            </div>
        );
    }
   
};

export default App;