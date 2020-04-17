import React from 'react';
import 'materialize-css';
import './listado.css';
import {Collection, CollectionItem, Icon} from 'react-materialize';

export default (props) => {

    const noImage = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

    let bandas = props.bandas;

    let creadorDeElementosDeLaLista = (value) => {
        return (
            <CollectionItem className="avatar list-item">
            <img
            alt=""
            className="circle"
            src={value.hasOwnProperty("imagen_url") ? value["imagen_url"] : noImage}
            />
            <span className="title">
                {value.nombre}
            </span>
            <p>
                {value.origen}
            <br />
                Número de discos: { " "+  value.numero_discos }
            </p>
            <a
            className="secondary-content"
            href="javascript:void(0)"
            >
            </a>
        </CollectionItem>
        );
    }

    let contenidoListado = bandas
                                .filter((value, index) => index < 3)
                                .map((value, index) => creadorDeElementosDeLaLista(value));

    

    return (
        <div className="listado">
            <div className="coleccion">
            <Collection>
                {contenidoListado}
            </Collection>
            </div>
        </div>
    )
}