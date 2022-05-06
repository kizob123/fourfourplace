import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../login/Login';
import { Register } from '../login/Register';
export default function LoginPage(){
    return(
        <div className='card-t'>
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
        </Routes>

        </div>
    )
}