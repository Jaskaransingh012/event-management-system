import React from 'react';
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/Logo.png"

function Navbar() {
    return (
        <>
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">

                    <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <img src={logo} alt="Chitkara University Logo" width="40" height="32" />
                        <p className='font-bold'>Sankalp</p>
                    </Link>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
                    <li><Link to="/event/upcoming" className="nav-link px-2">Events</Link></li>
                    <li><Link to="/clubs" className="nav-link px-2">Clubs</Link></li>
                    <li><Link to="/faq" className="nav-link px-2">FAQs</Link></li>
                    <li><Link to="/about" className="nav-link px-2">About</Link></li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <button type="button" className="btn btn-primary">Sign Up</button>
                </div>
            </header>
        </div>
        </>
    );
}

export default Navbar;
