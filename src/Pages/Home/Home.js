import React from 'react';
import "./home.css";

//components
import Carousel from '../../Components/Carrusel/Carrusel';
import Listado from '../../Components/Listado/listado';
export default (props) => {
    
    let title = props.title; 

    return (

        <div>
          <h1>Estas son las bandas mas importantes de la escena actualmente</h1>
          <article className="home">
            <div className="izquierdo">
                <Carousel bandas={props.bandas} />
            </div>
            <div className="derecha">
                <h1>Top tres populares</h1>
                <Listado bandas={props.bandas} />
            </div>
          </article>

        </div>
    );


}