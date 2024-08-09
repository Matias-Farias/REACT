import React from "react";
import Headerjpg from '../assets/Header.jpg';

const Header = () => {
    return (
        <header className="bg-primary text-white text-center py-5" 
        style={{
            backgroundImage: `url(${Headerjpg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '50vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            padding: '20px',
            margin: 0,
        }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0' }}>¡Bienvenido a Pizzeria Mamma Mia!</h1>
            <p style={{ fontSize: '1.5rem', marginTop: '10px' }}>Las mejores pizzas con los ingredientes mas frescos y deliciosos.</p>

        </header>
    )
}

export default Header;