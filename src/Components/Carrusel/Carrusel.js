import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carrusel.css";
export default (props) => {

    let bandas = props.bandas;

    let contenidoCarrusel = bandas.filter((value , index) => value.hasOwnProperty("imagen_url"))
                                  .map((value, index) => {
                                                            return (
                                                                <div className="carrusel-contenido" key={value}>
                                                                    <img width="250px" height="400px" src={value["imagen_url"]} />
                                                                    <p className="carrusel-leyenda">{value.nombre}</p>
                                                                </div>
                                                         )
    })

    return (
        <div className="carrusel-parent">
            <div className="carrusel">
                <Carousel showStatus={false} showThumbs={false} showIndicators={false}>
                    {contenidoCarrusel}
                </Carousel>
            </div>
        </div>
    );
}