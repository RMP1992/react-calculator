import React from 'react';
import './Input.css';

 //the value of input is displayed on the input container
 export default function Input(props) {
     return (
         <div className="input">
            {props.input}
             
         </div>
     )
 }
 