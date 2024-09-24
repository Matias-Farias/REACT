import React from "react";
import { useCart } from "../assets/Context/CartContext";
import '../components/CardPizza.css';

const CardPizza = ({ name, price, ingredients, img }) => {

    const { addToCart } = useCart();

    return (
    <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">ingredientes: {ingredients.join(", ")}</p>
            <p className="card-text">Precio: ${price.toLocaleString()}</p>
            <button className="btn btn-primary">Ver más</button>
            <button className="btn btn-success ml-2" onClick={() => addToCart({ id, name, price, img })}>Añadir</button>
        </div>
    </div> 
        
    )
}

export default CardPizza;