import React, { Component, useEffect } from 'react'
import LoginOrRegister from './LoginOrRegister'
export function Login(){
   
    return(
        
        <form action='/post' method='POST'>
            <input type='email' name='email' placeholder='email' required/><br/>
            <input type='password' name='password' placeholder='password' required/><br/>
            <LoginOrRegister/>
        </form>
        
    )
}