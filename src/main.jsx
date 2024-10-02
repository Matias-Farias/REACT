import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import React from 'react';
import { UserProvider } from './assets/Context/UserContext';
import { CartProvider } from './assets/Context/CartContext';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  </React.StrictMode>,
);
