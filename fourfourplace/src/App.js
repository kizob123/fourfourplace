
import './App.css';
import {Link, Router, Route, Routes} from 'react-router-dom'

import Header from './components/Header';
import Logins from './components/Logins';
import Display from './components/market/Display';
import React from 'react';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      

      
      <Routes>
                <Route path="/" element={<Logins />} exact />
                <Route path="/display" element={<Display />} />
      </Routes>

      
           
    </div>
  );
}}
export default App;
