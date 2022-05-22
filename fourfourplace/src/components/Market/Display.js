import React, { useEffect } from "react";
import { Route, Routes, useNavigate} from 'react-router-dom'
import AddSale from "./AddSale";
import Sells from "./Sells";
export default function Display(props){
        const navigate = useNavigate()
        useEffect(()=>{
            console.log(props.userData, 'disp');
            if (!props.userData)
            navigate('/')
        })
        

    
    
        return(
           <>
           <AddSale />
           <Sells />
           </>
        )
    
}