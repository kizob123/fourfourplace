
import { Route, Routes} from 'react-router-dom'

import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './login/LoginPage';
import Ratings from './components/Ratings';

export let pet ='hate'


class App extends React.Component{
 

  // async  componentDidMount(){
  //       console.log('hr')
  //       fetch('/post', {
  //           method: 'GET',
  //           //mode: "no-cors",

  //           headers: {
  //             'Access-Control-Allow-Origin': "*",
  //             Accept: '*/*'

  //           }

            
  //         }).then((data) =>{console.log(data);
  //           data.json().then(jsoninfo=>console.log(jsoninfo))
  //         }
  //         )
  //         //.then(d => setData(d[0].fname))
  //         .catch((e) => console.log(e))
        

  //   }
render(){
  console.log(pet,'in app');
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
                <div className = 'right-pane'
                 >
                    <Ratings />
                </div>      
            </div>
    <div className = 'page-width-footer'>
      <Footer />
    </div>
    </>
  );
}
}
export default App;
