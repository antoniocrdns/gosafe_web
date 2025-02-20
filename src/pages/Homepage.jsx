import { Link } from "react-router-dom";
import "./Homepage.css";
import "@fontsource/poppins"; 
import logo from "../assets/gosafe_logo.png";

function Homepage() {
    return (
        <div>
            {/* Parte 1 */}
            <section id="parte1" style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <div>
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <div>
                    <h2 className="text">Viaja a cualquier</h2>
                    <h2 className="text">lugar con la App</h2>
                    {/* Botón que enlaza a la Parte 2 */}
                    <a href="#parte2" className="button1" style={{ textDecoration: "none" }}>Descargar</a>
                    <h2 className="text">Para Android</h2>
                </div>
            </section>

            {/* Parte 2 */}
            <section id="parte2" style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <div>
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <div>
                    <h2 className="text">Conéctate con tus</h2>
                    <h2 className="text">amigos en tiempo real</h2>
                    {/* Botón de Iniciar sesión con mismo estilo que Descargar */}
                    <Link to="/login" className="button2" style={{ textDecoration: "none", display: "inline-block", textAlign: "center" }}>
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