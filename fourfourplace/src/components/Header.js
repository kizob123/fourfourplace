import React, { Component } from 'react';
export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            logOrReg:'Login',
            isLoggedIn:false,
            inWhere:[false,false,false],
            user:{
                name:"",
                photoUrl:"",
                notification:0,
                sales:0

            }
        }
    }
    componentDidMount(){
      this.setState({logOrReg:this.props.logOrReg, isLoggedIn:this.props.loggedin,inWhere:[this.props.one,this.props.two,this.props.three]})
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
          <a className="nav-link active" aria-current="page" href="/display" style={{fontWeight:this.state.inWhere[0]?"bold":"normal"}}>Display</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/sellers" style={{fontWeight:this.state.inWhere[1]?"bold":"normal"}}>Sellers</a>
        </li>
       
        
      </ul>
      <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
  <ul className="navbar-nav">
    <li className="nav-item">
          <a className="nav-link text-end" href="#" style={{fontWeight:this.state.inWhere[2]?"bold":"normal"}}>Profile</a>
        </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Sign Out</a>
    </li>
  </ul>
</div>
    </div>
  </div>
</nav>
            </div>
        )
    }
}