import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import logo from "../assets/gosafe_logo.png"; // Asegúrate de que la imagen esté en la carpeta correcta

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/dashboard");
    };

    return (
        <div className="login-container">
            <img src={logo} alt="Logo" className="login-logo" />
            <div className="login-form">
                <h2>Iniciar sesión</h2>
                <input type="email" placeholder="Correo electrónico" className="login-input" />
                <input type="password" placeholder="Contraseña" className="login-input" />
                <button onClick={handleLogin} className="login-button">Iniciar sesión</button>
            </div>
        </div>
    );
}

export default Login;
