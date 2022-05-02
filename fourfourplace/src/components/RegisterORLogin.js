import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function RegisterORLogin(){
    const loc = useLocation()
    const here = loc.pathname==='/login'||loc.pathname==='/'
    return <div>
        <Link className="btn btn-dark" to={here?'/register':'/login'}>You {here?<span>don't</span>:<span>already</span>} have an account?</Link>
    </div>
}