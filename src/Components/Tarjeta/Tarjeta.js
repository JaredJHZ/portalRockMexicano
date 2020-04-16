import React from 'react';
import "./tarjeta.css";

export default (props) => {
    return (
        <div className="tarjeta">
            <h1>{props.mensaje}</h1>
        </div>
    )
}