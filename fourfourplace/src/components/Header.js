import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            logOrReg:'Login',
            isLoggedIn:false,
            inWhere:[false,false,false],
            user:{
                name:"",
                email:"",
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
    <h2 className="navbar-brand" href="#">{this.props.logOrReg}</h2>
    </div>
    </nav>
<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{display:this.state.isLoggedIn?"block":"none"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to={{pathname:'/display'}}>4-4Places</Link>
    
      <i className="fas fa-bars"></i>
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"  to={{pathname:'/display'}} style={{fontWeight:this.state.inWhere[0]?"bold":"normal"}}>Display</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to={{pathname:'/sellers'}} style={{fontWeight:this.state.inWhere[1]?"bold":"normal"}}>Sellers</Link>
        </li>
       
        
      </ul>
      <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
  <ul className="navbar-nav">
    <li className="nav-item">
          <Link className="nav-link text-end" to={{pathname:'/profile'}} style={{fontWeight:this.state.inWhere[2]?"bold":"normal"}}>Profile</Link>
        </li>
    <li className="nav-item">
      <Link className="nav-link"  to={{pathname:'/signout'}}>Sign Out</Link>
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