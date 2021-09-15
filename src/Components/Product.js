import React from "react";

function Product(props) {
    return (
        <article className="Product">
            <span>{props.label}</span>
            <p>{props.text}</p>
            <img src={props.image} alt={props.text}/>
            <h4>{props.prijs}</h4>
        </article>

    )
}

export default Product;