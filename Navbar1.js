import './navbar.css'
import  {Link} from 'react-router-dom'
export default function Navbar1() {
    return (
<div className="container">
<Link to='/'> <a className="navbar-brand cofMall">Coforge Mall</a> </Link> 
 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
 </button>
 <div className="collapse navbar-collapse" id="navbarNav">
   <ul className="navbar-nav ml-auto">
     <li className="nav-item">
      <Link to='navbar'><a className="nav-link cofMall">Login</a></Link> 
     </li>
     <li className="nav-item">
       <a className="nav-link" href="/products">Products</a>
     </li>
     <li className="nav-item">
       <a className="nav-link" href="/about">About Us</a>
     </li>
     <li className="nav-item">
       <a className="nav-link" href="/contact">Contact Us</a>
     </li>
   </ul>
 </div>
</div>

    )
}