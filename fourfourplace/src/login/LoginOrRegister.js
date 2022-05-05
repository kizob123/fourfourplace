import React, { Component, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
export default function LoginOrRegister(){
     let {pathname}= useLocation()
     let [logOrReg, setLogOrReg]= useState('Login')
    let navigate=useNavigate()
    let handleAccountStatus=()=>{
        if(pathname==='/'){
       navigate('/register')
       setLogOrReg('Register')
    }
       if(pathname==='/register')
       navigate('/')
       setLogOrReg('Login')
    }
    return(
        <div className='reg-login'>

            <input type='submit' className='btn' value={logOrReg} /><div className='btn' onClick={handleAccountStatus}>Do you have|require an account?</div>
        </div>
    )
}