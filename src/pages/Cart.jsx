import React, { useState } from "react";
import { useUser } from "../assets/Context/UserContext";
import pizzaCart from "../pizzas";
import '../components/Cart.css';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart.map(item => ({ ...item, quantity: 0 })));
  const { token } = useUser();
  const [message, setMessage] = useState("");

  const increaseQuantity = (id) => {
    const newCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(newCart);
  };

  const decreaseQuantity = (id) => {
    const newCart = cart.map(item => {
      if (item.id === id && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter(item => item.quantity > 0);
    setCart(newCart);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (response.ok) {
        setMessage("Compra realizada con éxito.");
      } else {
        setMessage("Error al procesar la compra.");
      }
    } catch (error) {
      setMessage("Error al procesar la compra.");
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Carrito de Compras:</h2>
      </div>
      <ul className="cart-items">
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} />
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p>Precio: ${item.price.toLocaleString()}</p>
            </div>
            <div className="cart-item-actions">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h3>Total: ${total.toLocaleString()}</h3>
        <button disabled={!token} onClick={handleCheckout}>Pagar</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Cart;