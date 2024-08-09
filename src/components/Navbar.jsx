import React from "react";
import '../components/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="brand">
            <h1>Pizzería Mamma Mia!</h1>
        </div>
        <ul className="nav-links">
            <li><a href="#home">🍕 Home</a></li>
            <li><a href="#login">🔒 Login</a></li>
            <li><a href="#register">🔓 Register</a></li>
            <li className="total"><a href="#total">🛒 Total: $25.000</a></li>
        </ul>
    </nav>
    )
}

export default Navbar