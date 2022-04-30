import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
export default class Login extends React.Component{
  constructor(){
    super()
    this.state={
      loggedIn:false
    }
  }
    render(){
        return(
        <div style={{width:'auto',margin:'auto',border: '5px solid #23ee00',padding: 10+'px' }}>
  <form style={{padding: 0+'px',display:this.state.loggedIn?"none":"block"}} onSubmit={async (e)=>{
    e.preventDefault()

    let res =await fetch('https://api.jsonbin.io/b/626b2013019db4679693108b')
    let dataCheck = await res.json()
    console.log(dataCheck);
    let d=await dataCheck.filter((v)=>{
    if((e.target[0].value.trim()===v.logons[0])&&(e.target[1].value.trim()===v.logons[1])){
      console.log("logged");
      return true
    }
  }
    )
    if(d.length>0)
    this.setState({loggedIn:true})
   
   
    
  }}>
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
<Link className="card-body" to={{pathname:'/display'}} style={{display:this.state.loggedIn?"block":"none"}}>
            
           
            <button href="#" className="btn btn-primary">Go to display</button>
        </Link>
</div>


        )
    }
}