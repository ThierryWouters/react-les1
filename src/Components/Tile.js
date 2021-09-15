import React from "react";

function Tile(props) {
    if (props.image != null) {
        return(
        <section>
           <img src={props.image} alt={props.text}/>
            <h2>{props.title}</h2>
            <p>{props.paragraphs}</p>
        </section>
    )}
    else {
        return (
            <section>
                <h2>{props.title}</h2>
                <p>{props.paragraphs}</p>
            </section>
        )
    }
}

export default Tile;
