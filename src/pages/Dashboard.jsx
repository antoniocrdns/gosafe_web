import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import qrCode from "../assets/qrcode.png";

// Datos de ejemplo para la gráfica
const data = [
    { name: 'Lunes', km: 150 },
    { name: 'Martes', km: 200 },
    { name: 'Miércoles', km: 180 },
    { name: 'Jueves', km: 220 },
    { name: 'Viernes', km: 250 },
    { name: 'Sábado', km: 300 },
    { name: 'Domingo', km: 170 },
];


function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Funciones para abrir y cerrar el modal
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            
            {/* Gráfico */}
            <div className="chart-container">
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {/* Asegúrate de que dataKey apunte a 'km' */}
                        <Bar dataKey="km" fill="#4ba961" />
                    </BarChart>
                </ResponsiveContainer>
            </div>


            {/* Botón para mostrar el modal */}
            <button onClick={openModal} className="generate-qr-button">
                Generar QR
            </button>

            {/* Simulación del Modal */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Tu código</h2>
                        <p>123456789</p>
                        <div className="qr-container">
                            <img src={qrCode} alt="QR Code" />
                        </div>
                        <button onClick={closeModal}>Cerrar</button>
                    </div>
                </div>
            )}

            {/* Estilos embebidos */}
            <style>{`
                .dashboard-container {
                    padding: 20px;
                    font-family: 'Inter', sans-serif;
                    background-color: "#e9e9e9";
                }

                .chart-container {
                    margin-bottom: 20px;
                    background-color: #fffafa;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }

                .generate-qr-button {
                    background-color: #4ba961;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    font-size: 16px;
                    border-radius: 8px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: 20px;
                }

                .generate-qr-button:hover {
                    background-color: #16a34a;
                }

                /* Estilos para el modal */
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5); /* Oscurecer el fondo */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }

                .modal-content {
                    background-color: #fffafa;
                    padding: 20px;
                    border-radius: 8px;
                    width: 300px;
                    text-align: center;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                }

                .qr-container img {
                    width: 100px;
                    height: 100px;
                    margin-top: 20px;
                }

                /* Botón para cerrar el modal */
                .modal-content button {
                    background-color: #4ba961;
                    color: #fffafa;
                    padding: 8px 16px;
                    border: none;
                    border-radius: 5px;
                    margin-top: 20px;
                    cursor: pointer;
                }

                .modal-content button:hover {
                    background-color: #16a34a;
                }

                /* Media Queries */
                @media (max-width: 768px) {
                    .chart-container {
                        padding: 10px;
                    }

                    .generate-qr-button {
                        width: 100%;
                        font-size: 14px;
                    }
                }
            `}</style>
        </div>
    );
}

export default Dashboard;
