import React from 'react';
import "./home.css";

//components
import Carousel from '../../Components/Carrusel/Carrusel';
import Listado from '../../Components/Listado/listado';
export default (props) => {
    
    let title = props.title; 

    return (

        <div className="home">
          <h1>Estas son las bandas mas importantes de la escena actualmente</h1>
          <Carousel bandas={props.bandas} />
          <div>
              <h1>Bandas Top</h1>
              <Listado bandas={props.bandas} />
          </div>
        </div>
    );


}