import React from "react";
import { Link } from 'react-router-dom';
import { useCart } from "../assets/Context/CartContext";
import '../components/Navbar.css';

const Navbar = () => {

    const { total } = useCart();

    return (
        <nav className="navbar">
        <div className="brand">
            <h1>Pizzería Mamma Mia!</h1>
        </div>
        <ul className="nav-links">
        <li><Link to="/">🍕 Home</Link></li>
                <li><Link to="/login">🔒 Login</Link></li>
                <li><Link to="/register">🔓 Register</Link></li>
                <li className="total"><Link to="/cart">🛒 Total: ${total ? total.toLocaleString() : '0'}</Link></li>
        </ul>
    </nav>
    )
}

export default Navbar;