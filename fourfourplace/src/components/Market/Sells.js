import React from "react";
import {
    Route,
    Routes
} from 'react-router-dom'
export default class Sells extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            each_sell:null
        }
    }
    componentDidMount(){

    }
    render() {
        return ( 
            <>
            <div>sells</div>
            </>
        )
    }
}