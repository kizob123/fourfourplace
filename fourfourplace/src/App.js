
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Register from './components/reglog/Register';
import Logins from './components/Logins';
import Display from './components/market/Display';
import React from 'react';
import Sellers from './components/market/Sellers';
import Header from './components/Header';
import Ads from './components/recommendations/Ads';
import TopRatings from './components/recommendations/TopRatings';
import Login from './components/reglog/Login';

class App extends React.Component {
  render(){
  return (
    <div className="App" >
      <Header />
      
      <div  className='container '>
      <div className='left-page'>
        <TopRatings />
      </div>
      <div className='mid-page'>
      <Routes>
                <Route exact path="*" element={<Logins />} />
                
                <Route path="/display" element={<Display />} />
                <Route path="/sellers" element={<Sellers />} />
      </Routes>
      </div>
      <div className='right-page'>
          <Ads />
      </div>
      </div>
    </div>
  );
}}
export default App;
