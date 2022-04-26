import React, { Component } from 'react';
import Header from './Header';
import Login from './reglog/Login';
import Register from './reglog/Register';
export default class Logins extends React.Component{
    constructor(){
        super()
        this.state={
            logNotReg:true,
            headw:'Login'
        }
    }
    render(){
        console.log(this.state);
        return(
            <div>
            <Header logOrReg={this.state.headw}/>
            <div style={{width:33+'%'}}>
                <div style={{display: this.state.logNotReg?"block":'none'}}><Login /></div>
                <div style={{display: this.state.logNotReg?"none":'block'}}><Register /></div>
                

                <div className="btn btn-primary" onClick={()=>{
                    this.setState((prev)=>{
                        let test = prev.logNotReg
                        let h=!test?'Login':'Register'
                        console.log(test,h);
                        return{
                            logNotReg:!test,
                            headw:h
                        }
                    })
                }}>You {this.state.logNotReg?<span>don't</span>:<span>already</span>} have an account?</div>
            </div>
            </div>
        )
    }
}