import React, { useState } from 'react';
import { FaCar, FaPlus } from 'react-icons/fa'; 
import '../styles/Vehiculos.css';

function Vehiculos() {
    
    const [drivers, setDrivers] = useState([
        {
            id: 1,
            brand: "Marca 1",
            model: "Modelo 1",
            identificationNumber: 1001,
            driverName: "Conductor 1",
        },
        {
            id: 2,
            brand: "Marca 2",
            model: "Modelo 2",
            identificationNumber: 1002,
            driverName: "Conductor 2",
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddCar = () => {
        setIsModalOpen(true); // Abre el modal para agregar un nuevo vehículo
    };

    const closeModal = () => {
        setIsModalOpen(false); // Cierra el modal
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const nuevoVehiculo = {
            id: drivers.length + 1, // Genera un nuevo ID
            brand: formData.get('brand'),
            model: formData.get('model'),
            identificationNumber: formData.get('identificationNumber'),
            driverName: formData.get('driverName'),
        };

        setDrivers([...drivers, nuevoVehiculo]); // Agrega el nuevo vehículo al estado
        closeModal(); 
    };

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
            <button className="create-button" onClick={handleAddCar}>
                <FaPlus /> Agregar Vehículo
            </button>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Agregar Nuevo Vehículo</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Marca:
                                <input type="text" name="brand" required />
                            </label>
                            <label>
                                Modelo:
                                <input type="text" name="model" required />
                            </label>
                            <label>
                                Número de Identificación:
                                <input type="text" name="identificationNumber" required />
                            </label>
                            <label>
                                Nombre del Conductor:
                                <input type="text" name="driverName" required />
                            </label>
                            <div className="modal-buttons">
                                <button type="button" onClick={closeModal}>
                                    Cancelar
                                </button>
                                <button type="submit">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Vehiculos;
