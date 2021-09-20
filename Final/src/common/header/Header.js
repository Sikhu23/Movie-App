import './Header.css';
import logo from './logo.svg';
// import React from 'react';
import React from 'react';

// import { Component } from "react";

import Button  from '@material-ui/core/Button';


export default function Header() {
    
   

        return(

        <div className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <Button  style={{position:'absolute',right:'10px'}}variant="contained" color="default">LOGIN</Button>

        </div>

        )



    
}