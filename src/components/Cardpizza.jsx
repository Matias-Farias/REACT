import React from "react";
import '../components/CardPizza.css';

const CardPizza = ({ name, price, ingredients, img }) => {
    return (
    <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">ingredientes: {ingredients.join(", ")}</p>
            <p className="card-text">Precio: ${price.toLocaleString()}</p>
            <a href="#" className="btn btn-primary">Ver más</a>
            <a href="#" className="btn btn-success ml-2">Añadir</a>
        </div>
    </div> 
        
    )
}

export default CardPizza;