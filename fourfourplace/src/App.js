
import { Route, Routes} from 'react-router-dom'

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './login/LoginPage';
import Ratings from './components/Ratings';



class App extends React.Component {
  constructor(props){
    super(props)
   
  }

  render(){
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
}}
export default App;
