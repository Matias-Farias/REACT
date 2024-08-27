import React from "react";
import Header from "./Header";
import Cardpizza from "./Cardpizza";
import pizzas from "../components/pizzas"
import '../components/Home.css'

const Home = () => {
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
    )
}

export default Home;