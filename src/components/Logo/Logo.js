import React from 'react'
import burgerLogo from '../../assets/images/logo.png'
import classes from './Logo.css'

const logo = () => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="Logo"/>
    </div>
);

export default logo;