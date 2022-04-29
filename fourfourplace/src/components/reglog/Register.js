import React, { Component } from 'react';
import Header from '../Header';
export default class Register extends React.Component{
    render(){
         
        return(
       
  <div style={{width:'auto',margin:'auto',border: '5px solid #23ee00',padding: 10+'px' }}>
  <form style={{padding: 0+'px'}} onSubmit={async (e)=>{
    e.preventDefault()
    let logon ={
      
      fname: e.target[0].value.trim(),
      lname: e.target[1].value.trim(),
      logons: [e.target[2].value.trim(),e.target[3].value.trim()],
      timing:new Date()
   
    }
    let res =await fetch('https://api.jsonbin.io/b/626b2013019db4679693108b')
    let dataCheck = await res.json()
    let exists=dataCheck.filter((v)=>{
    if((e.target[2].value.trim()===v.logons[0])&&(e.target[3].value.trim()===v.logons[1])){
      
      return true
    }
  }
    )
    if(exists.length===0){
    let logonJson=JSON.stringify(logon)
    let postData = await fetch("https://api.jsonbin.io/b/626b380a019db46796931623",{
      method:'PUT',
      headers:{
        "Content-Type":"application/json",
        
      },
      body:logonJson
    })
    let jsonResponse = await postData.json()
    if(jsonResponse)
    alert(`New account opened for ${jsonResponse.fname} ${jsonResponse.lname} with email ${jsonResponse.logons[0]}`)
    console.log(jsonResponse);
  }
    else{
      alert(`${e.target[2].value.trim()} already exists in our database`)
    }
  }}>
    <div className="mb-3" >
    <label htmlFor="fname" className="form-label">First Name</label>
    <input type="text" className="form-control" id="fname" aria-describedby="fname"/>
     </div>
     <div className="mb-3" >
    <label htmlFor="lname" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="lname" aria-describedby="lname"/>
     </div>
  <div className="mb-3" >
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="email"/>
    </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>

        )
    }
}