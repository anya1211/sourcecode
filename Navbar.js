import { Link } from "react-router-dom"
import Navbar1 from "./Navbar1"
import './styles.css'
import './navbar.css'


export default function Navbar() {
return (
<>
<Navbar1></Navbar1>
<h1 className="heading1">Welcome to The Login page</h1>

<ul className="logsign">
    <li>
        <Link to='/login'>Login</Link>
    </li>

    <li>
        <Link to='/signup'>Signup</Link>
    </li>
</ul>


</>
)
}