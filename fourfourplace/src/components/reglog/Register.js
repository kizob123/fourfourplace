import React, { Component } from 'react';
import Header from '../Header';
export default class Register extends React.Component{
    render(){
        return(
          
  <div style={{width:'auto',margin:'auto',border: '5px solid #23ee00',padding: 10+'px' }}>
  <form style={{padding: 0+'px'}}>
    <div className="mb-3" >
    <label for="fname" className="form-label">First Name</label>
    <input type="text" className="form-control" id="fname" aria-describedby="fname"/>
     </div>
     <div className="mb-3" >
    <label for="lname" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="lname" aria-describedby="lname"/>
     </div>
  <div className="mb-3" >
    <label for="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="email"/>
    </div>
  <div className="mb-3">
    <label for="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>

        )
    }
}