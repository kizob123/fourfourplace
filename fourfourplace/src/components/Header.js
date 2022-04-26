import React, { Component } from 'react';
export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            logOrReg:'Login',
            isLoggedIn:false,
            user:{
                name:"",
                photoUrl:"",
                notification:0,
                sales:0

            }
        }
    }
    componentDidMount(){
      this.setState({logOrReg:this.props.logOrReg})
    }
    render(){
        return (
            <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" 
    style={{display:this.state.isLoggedIn?"none":"block"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{this.props.logOrReg}</a>
    </div>
    </nav>
<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{display:this.state.isLoggedIn?"block":"none"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">4-4Places</a>
    
      <i className="fas fa-bars"></i>
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
            </div>
        )
    }
}