import Input from './components/Input';
import Button from './components/Button';
import './App.css';
import Clearbtn from './components/Clearbtn';

import React, { Component } from 'react';

class App extends Component {
  state ={
    input: "",
    previousNumber: "",
    operator: "",
    currentNumber: "",
    
  };

//whatever we press number now become the value of input
concatStringValues = (val)=>{
  
  this.setState({input: this.state.input + val});
};
addDecimal = (val) =>{
  //only add a decimal if there is no current decimal point present
  if(this.state.input.indexOf(".") === -1){
    //indexOf searches for the string and -1 is the result of when the search can not find the string in question.
    this.setState({input: this.state.input + val});
  }
  
};

addZeroToInput = (val) =>{
  //only add zero if there the input box is not empty
  if (this.state.input !== ""){
    this.setState({input: this.state.input + val});
  }
  
};
//this function assigns values to the states
add = () =>{
  this.setState({previousNumber: this.state.input})//the first number that you have pressed is assigned to the state previousNumber
  this.setState({input: ""});//after you press the math sign it clears the input
  this.setState({operator: "plus"});// assigns "plus" operator state, to be used in the evaluate function
  this.setState({currentNumber: parseInt(this.state.input)})// assigns the second number to the state currentNumber
  console.log(typeof(this.state.input)) 
  console.log(typeof(this.state.previousNumber))
  
};
//this function assigns values to the states
subtract =() =>{
  this.setState({previousNumber: this.state.input});//the first number that you have pressed is assigned to the state previousNumber
  this.setState({input: ""});//after you press the math sign it clears the input
  this.setState({operator: "subtract"});// assigns "subtract" operator state, to be used in the evaluate function
  this.setState({currentNumber: parseInt(this.state.input)})// assigns the second number to the state currentNumber
  console.log(typeof(this.state.input)) 
  console.log(typeof(this.state.previousNumber))
};
//this function assigns values to the states
multiply = () =>{
  this.setState({previousNumber: this.state.input});//the first number that you have pressed is assigned to the state previousNumber
  this.setState({input: ""});//after you press the math sign it clears the input
  this.setState({operator: "multiply"});// assigns "multiply" operator state, to be used in the evaluate function
  this.setState({currentNumber: parseInt(this.state.input)})// assigns the second number to the state currentNumber
  console.log(typeof(this.state.input)) 
  console.log(typeof(this.state.previousNumber))
};
//this function assigns values to the states
divide = () =>{
  this.setState({previousNumber: this.state.input});//the first number that you have pressed is assigned to the state previousNumber
  this.setState({input: ""});//after you press the math sign it clears the input
  this.setState({operator: "divide"});// assigns "divide" operator state, to be used in the evaluate function
  this.setState({currentNumber: parseInt(this.state.input)})// assigns the second number to the state currentNumber
  console.log(typeof(this.state.input)) 
  console.log(typeof(this.state.previousNumber))
};
//this functions turns the value to strings, does the math and assigns the result to the input state.
evaluate = () =>{
 console.log(typeof(this.state.currentNumber))
 if(this.state.operator === "plus"){
   this.setState({input: parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber)});
 }else if (this.state.operator === "subtract"){
   this.setState({input: parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber)});
 }else if (this.state.operator === "multiply"){
   this.setState({input: parseInt(this.state.previousNumber) * parseInt(this.state.currentNumber)});
 }else if (this.state.operator === "divide"){
   this.setState({input: parseInt(this.state.previousNumber) / parseInt(this.state.currentNumber)});
 }
};

render() {
  

  return (
    <div id="app">
      <div className="calcContainer">
        <Input input={this.state.input}/>
        <div className="row">
          <Button number={7} handleClick={this.concatStringValues}/>
          <Button number={8} handleClick={this.concatStringValues}/>
          <Button number={9} handleClick={this.concatStringValues}/>
          <Button number={"/"} handleClick={this.divide}/>
        </div>
        <div className="row">
          <Button number={4} handleClick={this.concatStringValues}/>
          <Button number={5} handleClick={this.concatStringValues}/>
          <Button number={6} handleClick={this.concatStringValues}/>
          <Button number={"*"} handleClick={this.multiply}/>
        </div>
        <div className="row">
          <Button number={1} handleClick={this.concatStringValues}/>
          <Button number={2} handleClick={this.concatStringValues}/>
          <Button number={3} handleClick={this.concatStringValues}/>
          <Button number={"+"} handleClick={this.add}/>
        </div>
        <div className="row">
          <Button number={"."} handleClick={this.addDecimal}/>
          <Button number={0} handleClick={this.addZeroToInput}/>
          <Button number={"="} handleClick={this.evaluate}/>
          <Button number={"-"} handleClick={this.subtract}/>
        </div>
        <div className="row">
          <Clearbtn clear="Clear" handleClear={() => this.setState({input: ""})}/>
          {/* Clearbtn has an annonimous function which simply sets the value of input to be nothing  */}
        </div>
        
      </div>
    </div>
  )

}
  
}
export default App
