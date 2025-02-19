import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import gosafeLogo from "../assets/gosafe_logo2.png";

function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{ display: "flex", minHeight: "100vh", flexDirection: "row", justifyContent: "flex-start" }}>
            {/* Importar las fuentes dentro del componente */}
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Inter:wght@400&display=swap');
                `}
            </style>

            {/* Botón para abrir/cerrar el sidebar */}
            {!isOpen && (
                <button onClick={toggleSidebar} style={{
                    position: "fixed",
                    top: "20px",
                    left: "20px",
                    background: "#1c1919",
                    border: "none",
                    color: "white",
                    fontSize: "24px",
                    cursor: "pointer",
                    padding: "10px",
                    borderRadius: "5px",
                    zIndex: 1000
                }}>
                    <FaBars />
                </button>
            )}

            {/* Sidebar */}
            <nav style={{
                width: isOpen ? "240px" : "0",
                backgroundColor: "#1c1919",
                color: "white",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: isOpen ? "20px 0" : "0",
                overflow: "hidden",
                transition: "width 0.3s ease",
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: 999,
                flexShrink: 0,
                boxSizing: "border-box",
                fontFamily: "Inter",
            }}>
                {isOpen && (
                    <>
                        {/* Botón de cerrar */}
                        <button onClick={toggleSidebar} style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            background: "transparent",
                            border: "none",
                            color: "#fffafa",
                            fontSize: "20px",
                            cursor: "pointer"
                        }}>
                            <FaTimes />
                        </button>

                        {/* Logo como imagen */}
                        <img src={gosafeLogo} alt="Go Safe Logo" style={{ width: "120px", height: "auto", marginBottom: "20px" }} />

                        {/* User Info */}
                        <div style={{ marginTop: "20px", textAlign: "center" }}>
                            <div style={{
                                width: "50px",
                                height: "50px",
                                border: "2px solid #fffafa",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "20px"
                            }}>👤</div>
                            <p style={{ fontWeight: "bold", marginTop: "8px" }}>Nombre</p>
                            <p style={{ fontSize: "12px", color: "#fffafa" }}>Correo Electrónico</p>
                        </div>

                        {/* Navigation Links */}
                        <ul style={{ width: "100%", marginTop: "20px", paddingLeft: "0" }}>
                            {[ 
                                { path: "/dashboard", label: "Dashboard" },
                                { path: "/dashboard/conductores", label: "Administrar Conductor" },
                                { path: "/dashboard/pasajeros", label: "Administrar Pasajero" },
                                { path: "/dashboard/vehiculos", label: "Vehículos" },
                            ].map((item) => (
                                <li key={item.path} style={{ listStyle: "none", padding: "10px 20px", width: "100%" }}>
                                    <Link to={item.path} style={{
                                        textDecoration: "none",
                                        color: "#fffafa",
                                        display: "block",
                                        padding: "10px",
                                        borderRadius: "5px",
                                        width: "100%",
                                        backgroundColor: location.pathname === item.path ? "#4ba961" : "transparent",
                                        fontFamily: "Poppins",
                                        fontWeight: "700",
                                    }}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Logout Button */}
                        <button className="logout-btn" onClick={handleLogout}
                        style={{
                            position: "absolute",
                            bottom: "20px",
                            left: "20px",
                            color: "#fffafa",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "10px",
                            cursor: "pointer",
                            width: "100%",
                            backgroundColor: "transparent",
                            border: "none",
                            fontFamily: "Poppins",
                        }}>
                            <FaSignOutAlt /> Cerrar Sesión
                        </button>
                    </>
                )}
            </nav>

            {/* Contenedor principal que empuja el contenido cuando la sidebar está abierta */}
            <div style={{
                marginLeft: isOpen ? "240px" : "0",
                transition: "margin-left 0.3s ease",
                padding: "20px",
                width: "100%",
                boxSizing: "border-box",
            }}>
            </div>
        </div>
    );
}

export default Sidebar;
