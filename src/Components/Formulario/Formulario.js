import React from 'react';
import formularioBanda from './formularioBanda.json';
import './formulario.css';

// librerias usadas

import Axios from 'axios';

//components
import Tarjeta from '../Tarjeta/Tarjeta';
import Input from '../Input/input';

class Formulario extends React.Component {

    constructor(props) {
        super(props);
        if (props.tipo === "agregarBanda") {
            this.state = {
                tipo: props.tipo,
                campos: formularioBanda,
                name: "Agregar banda",
                result: ''
            };
        }
    }

    componentDidMount() {
     
    }

    inputHandler = (event) => {
        let value = event.target.value;
        let name = event.target.name;

        this.setState({
            ...this.state,
            campos: {
                ...this.state.campos,
                [name]: {
                    ...this.state.campos[name],
                    value: value
                }
            }
        })
    }

    agregarBandaHandler = () => {
        let banda = {
            "id": this.state.campos.id.value,
            "nombre": this.state.campos.nombre.value,
            "numero_discos": this.state.campos.numero_discos.value,
            "origen": this.state.campos.origen.value
        }

        let url = "https://k3n8bt3pcf.execute-api.us-east-1.amazonaws.com/Test/bandas";

        Axios.post(url, banda)
             .then(
                 (data) => this.imprimirTarjeta("Banda agregada a la base de datos de DynamoDB")
             )
             .catch(
                 (error) => this.imprimirTarjeta("Error no se pudo agregar la banda " + error)
             )
        
    }

    imprimirTarjeta = (mensaje) => {
        this.setState({
            ...this.state ,
            result:mensaje
        }, () => {
            setTimeout(() => {
                this.setState({
                    ...this.state, 
                    result: ''
                })
            }, 2000);
        })
    }

    render() {
        let keys = Object.keys(this.state.campos);

        let camposFormulario = this.state.campos;


        let camposDeFormularioEnInputs = keys.map((value , index) => <Input 
                                                                        name={value} 
                                                                        value={camposFormulario[value]["value"]}
                                                                        change={(event) => this.inputHandler(event)}
                                                                        key={index}
                                                                        texto={camposFormulario[value]["texto"]}
                                                                    />);

        let action = this.state.tipo === "agregarBanda" ? this.agregarBandaHandler : null;       
        
        let formulario = (
            <div className="formulario">
            <h1>Formulario para {this.state.name}</h1>
                {camposDeFormularioEnInputs}
                <a onClick={action} className="waves-effect waves-light btn">{this.state.name}</a>
            </div>
        );

        let uiAMostrar = (this.state.result.length > 2) ? <Tarjeta mensaje ={this.state.result} /> : formulario;
 
        return (
            
            <div className="ui-formulario">
                {uiAMostrar}
            </div>
        )
    }

}

export default Formulario;