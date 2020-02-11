import React from 'react'
import './Button.css';

const isOperator = val =>{
    return !isNaN(val) || val === "." || val === "=";
}
//this function says that val is not not a number, a dot or an equal
function Button(props) {
    return (
        <div className={`button-wrapper ${isOperator(props.number) ? null: "operator"}`} onClick={() => props.handleClick(props.number)}> 
        
            
            {props.number}
        </div>
    )
}
export default Button

//created a prop called handleClick that whenever a number is pressed it runs a function