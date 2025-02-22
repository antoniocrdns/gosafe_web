import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import '@fontsource/poppins'; // Fuente Poppins
import logo from '../assets/gosafe_logo.png'; // Importa el logo

function Homepage() {
  return (
    <div className="homepage">
      {/* Parte 1 */}
      <section id="parte1" className="section parte1">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="content">
          <h2 className="text">Viaja a cualquier</h2>
          <h2 className="text">lugar con la App</h2>
          <a href="#parte2" className="button button1">
            Descargar
          </a>
          <h3 className="android-text">Para Android</h3>
        </div>
      </section>

      {/* Parte 2 */}
      <section id="parte2" className="section parte2">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="content">
          <h2 className="text">Conéctate con tus</h2>
          <h2 className="text">amigos en tiempo real</h2>
          <Link to="/login" className="button button2">
            Iniciar sesión
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Homepage;


































































/* import { Link } from "react-router-dom";
import "./Homepage.css";
import "@fontsource/poppins"; 
import logo from "../assets/gosafe_logo.png"

function Homepage() {
    return (
        <div className="background">
             <img src={logo} alt="Logo" className="logo" />

            <div className="content">
                <h2 className="text">Viaja a cualquier</h2>
                <h2 className="text">lugar con la App</h2>
                <Link to="/login">
                    <button className="button1">Descargar</button>
                </Link>
                <h2 className="text">Para Android</h2>
            </div>
        </div>
    );
}

export default Homepage;
 */