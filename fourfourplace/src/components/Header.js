import React, { Component } from 'react';
import { useLocation, useNavigate, useState } from 'react-router-dom';
export default function Header(){
    const {pathname} = useLocation();
    const navigate = useNavigate()
    const inLoggin = pathname === '/' || pathname === '/login'
    const inLoginORReg = pathname === '/' || pathname === '/login'||pathname==='/register'
    const inDisplay = pathname==='/display'
    const inSellers = pathname==='/sellers'
    const inProfile = pathname==='/profile'
     
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
                        <li style = {
                            {
                                fontWeight: inDisplay ? "bold" : "normal",
                                cursor: 'pointer'
                            }
                        }
                        onClick = {
                            ()=>{
                                navigate('/display')
                            }
                        }>Display</li>
                        <li style = {
                            {
                                fontWeight: inSellers ? "bold" : "normal",
                                cursor: 'pointer'
                            }
                        }
                        onClick = {
                            () => {
                                navigate('/sellers')
                            }
                        } > Sellers </li>
                    </ul>
                <ul className = 'personal' >
                    <li style = {
                        {
                            fontWeight: inProfile ? "bold" : "normal",
                            cursor: 'pointer'
                        }
                    }
                    onClick = {
                        () => {
                            navigate('/profile')
                        }
                    }> Profile </li> 
                    <li style = {
                        {
                            cursor: 'pointer'
                        }}
                        onClick = {
                        () => {
                            navigate('/signout')
                        }
                    }> SignOut </li> 
                </ul>
            </div>
        </div>
    </nav>
    </div>
    )
}