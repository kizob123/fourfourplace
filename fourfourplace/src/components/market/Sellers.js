import React, { Component } from 'react';
import Header from '../Header';
import Person from './Person';
export default class Sellers extends React.Component{
    constructor(props){
        super(props)
        this.state={
            people:[]
            
        }
    }
 getPeopleData = async()=>{
        const peopleData= await fetch('https://api.jsonbin.io/b/626b2013019db4679693108b')
        const peopleDataObj = await peopleData.json()
        this.setState({people:peopleDataObj})
    }
    componentDidMount(){
        
    this.getPeopleData()
    }
    render(){
        let each =this.state.people
        let each_person= null
        if(each.length>0)
        each_person =each.map((v,i)=><li key={i}><Person name = {`${v.fname } ${v.lname}` } /></li>)
        

        return (
            <div>
                <Header logOrReg={false} loggedin={true} one ={false} two={true} three={false}/>
               
                {each_person}
            </div>
        )
    }

}