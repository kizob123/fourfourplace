import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Ads from './recommendations/Ads';
import TopRatings from './recommendations/TopRatings';
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
            <Header logOrReg={this.state.headw} loggedin={false}/>

            <div  className='container '>
            <div className='left-page'>
                <TopRatings />
            </div>
            <div className="mid-page">
                <div style={{display: this.state.logNotReg?"block":'none'}}><Login /></div>
                <div style={{display: this.state.logNotReg?"none":'block'}}><Register /></div>
                <div className="btn btn-dark" onClick={()=>{
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
            <div className='right'>
                <Ads />
            </div>
            
                
                
            </div>
            
            </div>
            
        )
    }
}