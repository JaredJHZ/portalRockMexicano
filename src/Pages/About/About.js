import React from 'react';
import Imagen1 from '../../static/img/Rock_Mexicano.jpg'
import './about.css';

export default (props) => {
    return (
        <div className="about">
            <h1>Esta es una página tributo a las bandas de la escena mexicana de rock</h1>
            <article className="article">
                <img alt="Logo de rock mexicano" src={Imagen1} />
                <p id="description">
                Esta página se hizo con mucho cariño para los fanaticos de la escena mexicana del rock,
                teniendo información de diversos grupos, ya sea populares o indies.
                </p>
            </article>
        </div>
    )
}