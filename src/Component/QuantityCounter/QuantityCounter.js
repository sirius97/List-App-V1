import React from 'react';
import classes from './QuantityCounter.css'

const quantityCounter = (props) => {
    return(
        <div className = {classes.Counter}>
            <div style={{marginRight:'5px'}}><button onClick={props.increment}>+</button></div>
            <p>{props.quantity}</p>
            <div style={{marginLeft:'5px'}}><button onClick={props.decrement}>-</button></div>
        </div>
    );
}

export default quantityCounter;