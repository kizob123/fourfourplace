import React, { Component } from 'react';
import Header from '../Header';
export default class Login extends React.Component{
    render(){
        return(
          
          


          <div style={{width:'auto',margin:'auto',border: '5px solid #23ee00',padding: 10+'px' }}>
           <form style={{padding: 0+'px'}}>
  <div className="mb-3" >
    <label for="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="email"/>
    </div>
  <div className="mb-3">
    <label for="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>


        )
    }
}