import React from 'react';
import {NavLink} from 'react-router-dom'; 
import './navbar.css';
export default (props) => {

    let keys = Object.keys(props.rutas);
    let rutas = props.rutas;

    let links = keys.map((value, index) => <NavLink exact={true} activeClassName={"link-activo"} key={index} to={rutas[value]["ruta"]} > {rutas[value]["palabra"]} </NavLink> )

    return (
        <div className="navbar-j">
            <ul>
                {links}
            </ul>
        </div>
    )
}