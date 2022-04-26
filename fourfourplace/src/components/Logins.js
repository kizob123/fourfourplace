import React, { Component } from 'react';
import Login from './reglog/Login';
export default class Logins extends React.Component{
    render(){
        return(
            <div style={{width:33+'%'}}>
                <Login /><br/>
                <div className="btn btn-primary">You don't have an account?</div>
            </div>
        )
    }
}