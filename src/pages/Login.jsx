import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/dashboard")
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
    );
}

export default Login;