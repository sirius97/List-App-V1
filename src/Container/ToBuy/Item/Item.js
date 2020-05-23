import React from 'react';
import classes from './Item.css'
import QuantityCounter from '../../../Component/QuantityCounter/QuantityCounter';

const item = (props) => {

      return  (
            <div className={classes.Item}>
                <div style = {{display:'block'}}>
                <div className ={classes.A}>
                    <div>
                    <input type="text" onChange = {props.changeName} placeholder="Enter here" value={props.name}/>
                    </div>
                    <QuantityCounter quantity = {props.quantity} increment = {props.increment} decrement = {props.decremet} />
                </div>
                
                <button onClick={props.delete} className = {classes.Delete}>Delete</button>
                <button onClick = {props.done} className={classes.Done}>Done</button> 
                </div>
            </div>
        );

}

export default item;