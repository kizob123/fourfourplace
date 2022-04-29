import React, { Component } from 'react';
import Header from '../Header';
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
                <ul style={{ listStyleType:"none" }}>
                    {prod}
                </ul>
            </div>
        )
    }
}