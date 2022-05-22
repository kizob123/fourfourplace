import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { pet } from '../App'

import LoginOrRegister from './LoginOrRegister'
export function Login(props){
const [state, setState] = useState({data:null,error:null})
let navigate = useNavigate()
useEffect(()=>{
  
  
    if(state.data)
    navigate('/display')
})
let handlePost =async(e)=>{
    
    e.preventDefault()
    console.log('here');
    let body = {}
    for(let i of e.target){
        
        body[i.name] = i.value
    }
    console.log(body);
    const result = await fetch('/login',{
       method: 'POST',
       headers:{
           'Access-Control-Allow-Origin': "*",
           "Content-Type":"application/json"
       },
       body:JSON.stringify(body)
    })
    const profile_json = await result.json()
    console.log('here',profile_json.error);
    props.userData({
        data: profile_json.data,
        error: profile_json.error
    })
    setState({data:profile_json.data, error:profile_json.error})
     
}




    return(
        
        <>
        {
            console.log(state)
        }
        <div className = 'form-container card'
        style = {
            {
                display: state.data ? 'none' : 'block'
            }
        } >
        <p className='warn ' style={{display:state.error?'inline':'none', position:'absolute',}}>{state.error?state.error:''}  </p>
        <form className = 'form'
        method = 'POST'
        onSubmit = {
            handlePost
        }>
            <input className='top-input' type='email' name='email' placeholder='email' required/><br/>
            <input className='end-input' type='password' name='password' placeholder='password' required/><br/>
            <LoginOrRegister/>
           
        </form>

        </div>
         
        </>
    )
}
