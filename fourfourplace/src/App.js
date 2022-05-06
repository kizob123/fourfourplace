
import { Route, Routes} from 'react-router-dom'

import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './login/LoginPage';
import Ratings from './components/Ratings';



function App () {
 
  
let callBackEnd = async()=>{
        const response = await fetch("api/post")
        console.log(response);
      }
    useEffect(()=>{
        callBackEnd()
        //console.log(callBackEnd());
    })

  return (
    <>
    <div className='page-width'>
      <Header/>
    </div>
    <div className='grids container'>
                <div className='left-pane'>
                    <Routes>
                        <Route path='*' element={<LoginPage />}/>
                    </Routes>
                    </div>
                <div className='right-pane'>
                    <Ratings />
                </div>      
            </div>
    <div className = 'page-width-footer'>
      <Footer />
    </div>
    </>
  );
}
export default App;
