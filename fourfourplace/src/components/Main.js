import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import Ratings from './Ratings';
export default function Main(){
    return(
        
            <div className='grids container'>
                <div className='left-pane'>
                    <Routes>
                        <Route path='/' element={<LoginPage />}/>
                    </Routes>
                    </div>
                <div className='right-pane'>
                    <Ratings />
                </div>      
            </div>

        
    )
}