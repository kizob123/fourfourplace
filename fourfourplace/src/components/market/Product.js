import React, { Component } from 'react';
export default class Product extends React.Component{
    constructor(props){
        super(props)
        console.log(props);
    }
    render(){
        return(
            <div className="card" style={{width: 18 +'rem'}}>
        
        <div className="card-body">
            <h5 className="card-title">{this.props.product.name}</h5>
           
            <span href="#" className="btn btn-primary">{this.props.product.products.one[0]}</span>
            <span href="#" className="btn btn-primary">{this.props.product.products.two[0]}</span>
            <span href="#" className="btn btn-primary">{this.props.product.products.three[0]}</span>
            <span href="#" className="btn btn-primary">{this.props.product.products.four[0]}</span>
        </div>
</div>
        )
    }
}