import React, { Component } from 'react'
import LoginOrRegister from './LoginOrRegister'
export function Login(){
    return(
        <div>
        <form>
            <input type='email' name='email' placeholder='email' required/><br/>
            <input type='password' name='password' placeholder='password' required/><br/>
            <LoginOrRegister/>
        </form>
        </div>
    )
}