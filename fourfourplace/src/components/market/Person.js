import React, { Component } from 'react';
export default class Person extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:''
        }
    }
    componentDidMount(){
        this.setState({name:this.props.name})
    }
    render(){
        return(
            <div>
<div className="card" style={{width: 18 +'rem'}}>
        
        <div className="card-body">
            
           
            <span href="#" className="btn btn-primary">{this.state.name}</span>
    </div>
</div>
                
            </div>
        )
    }
}