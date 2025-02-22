import React from 'react';
import { FaCar } from 'react-icons/fa';
import '../styles/Vehiculos.css'; 

function App() {
    // Datos de ejemplo
    const drivers = new Array(10).fill(null).map((_, index) => ({
        id: index + 1,
        brand: "Marca " + (index + 1),
        model: "Modelo " + (index + 1),
        identificationNumber: (1000 + index),
        driverName: "Conductor " + (index + 1),
    }));

    return (
        <div className="container">
            <h1>Vehículos</h1>
            <div className="cards-container">
                {drivers.map(driver => (
                    <div className="card" key={driver.id}>
                        <FaCar className="car-icon" />
                        <div className="card-content">
                            <h2>{driver.brand} - {driver.model}</h2>
                            <p>Número de identificación: {driver.identificationNumber}</p>
                            <p>Conductor: {driver.driverName}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;