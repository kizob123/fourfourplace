import React, { Component } from 'react';
import { useLocation, useState } from 'react-router-dom';
export default function Header(){
    const {pathname} = useLocation();
    const inLoggin = pathname === '/' || pathname === '/login'
    const inLoginORReg = pathname === '/' || pathname === '/login'||pathname==='/register'
    return(
    <div>

    <nav className = 'navbar container' >
        <h3 className='logo'>4-4 Places</h3>
        <div className='navbar-contents'>
            {/*not logged in*/}
            <div className = 'navbar-login' style = {{display: inLoginORReg?'flex':'none'}}>
               {inLoggin?"Login":"Register"}
            </div>
            {/*logged in*/}
            <div className = 'navbar-in' style = {{display: !inLoginORReg ? 'flex' : 'none'}}>
                <ul className='market'>
                        <li>Display</li>
                        <li>Sellers</li>
                    </ul>
                <ul className = 'personal' >
                    <li> Profile </li> 
                    <li> SignOut </li> 
                </ul>
            </div>
        </div>
    </nav>
    </div>
    )
}