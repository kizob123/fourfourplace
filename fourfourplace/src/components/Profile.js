import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile(props){
    const navigate = useNavigate()
    useEffect(() => {
        console.log(props.userData, 'profile');
        if (props.userData)
            navigate('/')
    })
    return(
        <>
        </>
    )
}