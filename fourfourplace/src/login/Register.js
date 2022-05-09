import React, { Component } from 'react'
import LoginOrRegister from './LoginOrRegister'
export function Register(){
    return(
        
        <form form className = 'form'
        action = '/post/register'
        method = 'POST' >
            <input className='top-input' type='text' name='fname' placeholder='First Name' required/><br/>
            <input type='text' name='lname' placeholder='Last Name' required/><br/>
            <input type='text' name='location' placeholder='location' required/><br/>
            <input type='email' name='email' placeholder='email' required/><br/>
            <input type='password' name='password' placeholder='password' required/><br/>

            <input type='text' name='business' placeholder='business' required/><br/>
            <input type='tel' name='phone' placeholder='phone number' required/><br/>
            <input className='end-input' type='text' name='routes' placeholder='where and where to exchange merchandise' required/><br/>
            
            <LoginOrRegister />
        </form>
        
    )
}