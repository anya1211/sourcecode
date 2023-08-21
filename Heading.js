import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';
import './navbar.css'


const HomePage = () => {
  return (
    <div className="bg-image contains" style={{ backgroundImage: 'url("https://images.pexels.com/photos/6873141/pexels-photo-6873141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container">
         <Link to='/'> <a className="navbar-brand ">Coforge Mall</a> </Link> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
               <Link to='navbar'><a className="nav-link">Login</a></Link> 
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
      </nav>

      <div className="container text-center mt-5">
        <h1 className="heading">Welcome to Coforge Mall</h1>
        <p className="text-emphasis tagLine">Your one-stop destination for shopping.</p>
      </div>
    </div>
  );
};

export default HomePage;
