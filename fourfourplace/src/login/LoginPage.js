import React, { Component, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Display from '../components/Market/Display';
import Sellers from '../components/Market/Sellers';
import Profile from '../components/Profile';

import { Login } from '../login/Login';
import { Register } from '../login/Register';
export default function LoginPage(){
   const [userInfo,setUserInfo]=useState(null)
   let data =(data)=>{
       console.log(data);
       setUserInfo(data)
   }
    
    return(
        
        <div>
        <Routes>
            
            <Route path='/' element={<Login userData={data}/>}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/display' element={<Display userData={userInfo}/>}/>
            <Route path='/sellers' element={<Sellers userData={userInfo}/>}/>
            <Route path='/profile' element={<Profile userData={userInfo}/>}/>
        </Routes>
        </div>

    )
}