import React from 'react';
import classes from './Modal.css'
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";


const modal = (props) => (
    <Aux>
        <div className={classes.Modal}
             style={{transform: props.show? 'translateY(0)': 'translateT()-100vh', opacity: props.show? 1: 0}}>
            {props.children}
        </div>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
    </Aux>
);

export default modal;