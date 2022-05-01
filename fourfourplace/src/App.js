
import './App.css';
import {Link, Router, Route, Routes} from 'react-router-dom'

import Header from './components/Header';
import Logins from './components/Logins';
import Display from './components/market/Display';
import React from 'react';
import Sellers from './components/market/Sellers';

class App extends React.Component {
  render(){
  return (
    <div className="App" >
      
      <Routes>
                <Route exact path="/" element={<Logins />} />
                <Route path="/display" element={<Display />} />
                <Route path="/sellers" element={<Sellers />} />
      </Routes>
     
    </div>
  );
}}
export default App;
