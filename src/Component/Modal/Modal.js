import React, { Component} from 'react';
import Aux from '../../Hoc/Auxi';
import classes from './Modal.css'
import BackDrop from '../BackDrop/BackDrop';

class Modal extends Component{
    render(){
        return(
                <Aux>
                    <BackDrop show = {this.props.show} backclicked = {this.props.backclicked}/>
                    <div className = {classes.Modal}
                        style = {{
                            transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                            opacity: this.props.show ? '1' : '0'
                        }}>
                        {this.props.children}
                    </div>
                </Aux>
        );
    }
}

export default Modal;