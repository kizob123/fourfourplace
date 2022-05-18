import React, { Component, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
export default function LoginOrRegister(){
     let {pathname}= useLocation()


     let logOrReg =''
     if (pathname === '/')
     logOrReg ='Login'
     else logOrReg='Register'

    let have = (pathname === '/'?'require':'have')
    let navigate=useNavigate()
    let handleAccountStatus=()=>{
    if(pathname==='/'){
       navigate('/register')
    }
       
    if(pathname==='/register')
       navigate('/')
       
    }
    return(
        <div className='reg-login'>

            <input type='submit' className='btn btn2' value={logOrReg} />
            <div className='btn' onClick={handleAccountStatus}>
                Do you {have} an account?
                </div>
        </div>
    )
}