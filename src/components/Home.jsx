import React, { useState, useEffect } from "react";
import Header from "./Header";
import Cardpizza from "./Cardpizza";
import '../components/Home.css';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:5000/api/pizzas')
      .then(response => response.json())
      .then(data => setPizzas(data))
      .catch(error => console.error('Error fetching pizzas:', error));
  }, []);

  return (
    <div>
      <Header />
      <div className="card-container">
        {pizzas.map((pizza) => (
          <Cardpizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img} 
          />
        ))}
      </div>
    </div>
  );
}

export default Home;