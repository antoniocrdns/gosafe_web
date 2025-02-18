import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/")
    }
    return (
        <nav style={{ width: "200px", padding: "20px", background: "#f4f4f4", height: "100vh" }}>
        <h3>Menú</h3>
        <ul>
            <li><Link to="/dashboard">Inicio</Link></li>
            <li><Link to="/dashboard/conductores">Conductores</Link></li>
            <li><Link to="/dashboard/pasajeros">Pasajeros</Link></li>
            <li><Link to="/dashboard/codigoqr">Código QR</Link></li>
            <li><Link to="/dashboard/vehiculos">Vehículos</Link></li>
        </ul>
        <button onClick={handleLogout}>Cerrar Sesión</button>
    </nav>
    );
}

export default Sidebar;