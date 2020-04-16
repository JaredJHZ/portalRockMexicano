import './App.css';

import React from 'react';

import Axios from 'axios';

//pages
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

//component
import Navbar from './Components/Navbar/Navbar';
import Formulario from './Components/Formulario/Formulario';
import Footer from './Components/Footer/Footer';  
import Loader from './Components/Loader/Loader';

//hoc 
import HOC from './hoc/hoc';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {

  state = {
    bienvenida: "",
    rutas: {
      home: {
        ruta: "/",
        palabra:"Home"
      },
      agregarBanda: {
        ruta:"/agregarBanda",
        palabra:"Agregar Banda"
      },
      about: {
        ruta: "/about",
        palabra:"About"
      }
    },
    bandas: [],
    url:"https://k3n8bt3pcf.execute-api.us-east-1.amazonaws.com/Test",
    loading: true
  }

  componentDidMount(){
    this.cargarBandas();
  }

  cargarBandas = () => {
    Axios.get(this.state.url+"/bandas")
         .then((response) => {
           let data = response.data.bandas;
           this.setState({
             ...this.state,
              bandas: data,
              loading: false
           })
         })
         .catch((err) => console.log(err));
  }

  render() {

    let defaultApp = <HOC>
                        <div className="contenedor">
                          <Router>
                          <Navbar rutas={this.state.rutas} />
                            <Switch>
                              <Route path="/about">
                                <About />
                              </Route>
                              <Route path="/agregarBanda">
                                <Formulario tipo="agregarBanda" />
                              </Route>
                              <Route path="/">
                                <Home bandas={this.state.bandas} title={this.state.bienvenida} />
                              </Route>
                            </Switch>
                          </Router>
                        </div>
                        </HOC>

    let aplicacion = (this.state.loading) ? <Loader/> : defaultApp;

    
    return (
        <div className="parent-container">
          
            {aplicacion}
          <div className="contenedor-footer">
                            <Footer info = {"josafhatsoftwares.com.mx"} />
          </div>
        </div>
    )
  }
}

export default App;
