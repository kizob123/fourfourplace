import React, { Component } from 'react';
import Header from '../Header';
import Ads from '../recommendations/Ads';
import TopRatings from '../recommendations/TopRatings';
import Product from './Product';
export default class Display extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
}
productGet = async ()=> {
            let produced=await fetch("https://api.jsonbin.io/b/626b1a3438be296761f99352/1");
            let productsdata = await produced.json()
            
            this.setState({data:productsdata.products})
    }
    componentDidMount(){
        
    this.productGet()
}
    render(){
        let productData=this.state.data[0]?this.state.data:[]
        let prod=productData.map((v,i)=><li key={i}><Product product ={v} /></li>)
        return(
            <div>
                <Header logOrReg={false} loggedin={true} one ={true} two={false} three={false}/>
                <div  className='container '>
            <div className='left-page'>
                <TopRatings />
            </div>
            <div className="mid-page">
                <ul style={{ listStyleType:"none" }}>
                    {prod}
                </ul>
                </div>
            <div className='right-page'>
                <Ads />
            </div>
                </div>
                </div>
           
        )
    }
}