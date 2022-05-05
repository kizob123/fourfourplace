
import { Route, Routes} from 'react-router-dom'

import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';



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
    <div >
      <Main />
    </div>
    <div className = 'page-width-footer'>
      <Footer />
    </div>
    </>
  );
}}
export default App;
