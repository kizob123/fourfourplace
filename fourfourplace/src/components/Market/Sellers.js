import React, { useEffect } from "react";
import {
    Route,
    Routes,
    useNavigate
} from 'react-router-dom'
import Sells from "./Sells";
export default function Sellers(props){
    
       const navigate = useNavigate()
       useEffect(() => {
           console.log(props.userData, 'sellers');
           if (props.userData)
               navigate('/')
       })
    
    
        return (
            <>
            </>
        )
    
}