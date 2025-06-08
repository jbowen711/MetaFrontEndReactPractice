import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <h1>This card's value is {props.num}</h1>
            <p>This card is: {props.num > 50 ? "High" : "Low"} </p>
        </div>
    )
}

export default Card;
// This card takes in props and displays the prop number and if high or low based on the tererary operator.