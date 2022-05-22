import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignOut(props){
    const navigate = useNavigate()
    useEffect(()=>{
        props.userData({
            data: null,
            error: null
        })
        navigate('/')
    })
}