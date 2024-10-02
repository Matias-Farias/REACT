import React from "react";
import { Link } from 'react-router-dom';
import { useCart } from "../assets/Context/CartContext";
import { useUser } from "../assets/Context/UserContext";
import '../components/Navbar.css';

const Navbar = () => {

    const { total } = useCart();
    const { token, logout } = useUser();

    return (
        <nav className="navbar">
        <div className="brand">
            <h1>Pizzería Mamma Mia!</h1>
        </div>
        <ul className="nav-links">
        <li><Link to="/">🍕 Home</Link></li>
        {token ? (
                <>
                    <li><Link to="/profile">👤 Profile</Link></li>
                    <li><button onClick={logout}>🔓 Logout</button></li>
                </>
            ) : (
                <>
                    <li><Link to="/login">🔒 Login</Link></li>
                    <li><Link to="/register">🔓 Register</Link></li>
                </>
            )}
                <li className="total"><Link to="/cart">🛒 Total: ${total ? total.toLocaleString() : '0'}</Link></li>
        </ul>
    </nav>
    )
}

export default Navbar;