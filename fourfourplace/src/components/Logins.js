import React, { Component, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import RegisterORLogin from './RegisterORLogin';
import Login from './reglog/Login';
import Register from './reglog/Register';
export default function Logins(){
        const loc = useLocation()
        const here = loc.pathname==='/'||'/login'
       
        return(
            
            <div>
            <Routes>
               <Route path="/login" element={<Login />}/>
               <Route path="/register" element={<Register />}/>
            </Routes>
               
            </div>
            
            
           
            
        )
    
}