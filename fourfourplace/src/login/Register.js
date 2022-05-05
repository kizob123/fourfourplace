import React, { Component } from 'react'
import LoginOrRegister from './LoginOrRegister'
export function Register(){
    return(
        
        <form>
            <input type='text' name='fname' placeholder='First Name' required/><br/>
            <input type='text' name='lname' placeholder='Last Name' required/><br/>
            <input type='location' name='location' placeholder='location' required/><br/>
            <input type='email' name='email' placeholder='email' required/><br/>
            <input type='password' name='password' placeholder='password' required/><br/>
            <LoginOrRegister />
        </form>
        
    )
}