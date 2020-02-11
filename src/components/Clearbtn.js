import React from 'react'
import './Clearbtn.css'
//creates a prop called handleClear which will be used to call a function,
export default function Clearbtn(props) {
    return (
        <div className="clear-btn" onClick={props.handleClear}>
        {props.clear}
            
        </div>
    )
}
