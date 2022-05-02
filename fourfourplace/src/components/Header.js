import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export default function Header(props){
    const loc = useLocation()
    
        return (
            <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" 
    style={{display:loc.pathname==='/'?"block":"none"}}>
  <div className="container-fluid">
    <h2 className="navbar-brand" href="#">Login</h2>
    </div>
    </nav>
<nav className="navbar navbar-expand-lg navbar-light bg-light"
  style={{display:loc.pathname==='/'?"none":"block"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to={{pathname:'/display'}}>4-4Places</Link>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"  to={{pathname:'/display'}} style={{}}>Display</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to={{pathname:'/sellers'}} style={{}}>Sellers</Link>
        </li>
       
        
      </ul>
      <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
  <ul className="navbar-nav">
    <li className="nav-item">
          <Link className="nav-link text-end" to={{pathname:'/profile'}} style={{}}>Profile</Link>
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
