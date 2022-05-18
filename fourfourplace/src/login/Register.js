import React, { Component } from 'react'
import LoginOrRegister from './LoginOrRegister'
export class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            profile:{
                data:null,
                error:null
            }
        }
    }
    handlePost = async (e) => {

        e.preventDefault()
        let body = {}
        for (let i of e.target) {

            body[i.name] = i.value
        }
        console.log(body);
        const result = await fetch('/login/register', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        const profile_json = await result.json()
        console.log(profile_json);
        this.setState((pre) => {
            return {
                profile: profile_json
            }
        })

    }
    render(){
    return(
        <>
        <p className='warn ' style={{display:this.state.profile.error?'inline':'none', position:'absolute',}}>{this.state.profile.error?this.state.profile.error:''}  </p>
        <form className = 'form'
        method = 'POST'
        onSubmit = {
            this.handlePost
        } >
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
        
    
        </>
    )
    }
}