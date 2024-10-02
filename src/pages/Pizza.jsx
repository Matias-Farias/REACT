import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Pizza = ({ pizzaId }) => {
  const [pizza, setPizza] = useState(null);
  const { id } = useParams();

  useEffect(() => {
   
    fetch(`http://localhost:5000/api/pizzas/${pizzaId}`)
      .then(response => response.json())
      .then(data => setPizza(data)) 
      .catch(error => console.error('Error fetching pizza:', error));
  }, [id]); 
  if (!pizza) return <div>Cargando...</div>;
  return (
    <div>
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} />
      <p>{pizza.desc}</p>
      <p>Ingredientes: {pizza.ingredients.join(", ")}</p>
      <p>Precio: ${pizza.price}</p>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default Pizza;