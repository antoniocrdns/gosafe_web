import { FaCar } from 'react-icons/fa';

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
            <h1>Vehiculos</h1>
            <div className="cards-container">
                {drivers.map(driver => (
                    <div className="card" key={driver.id}>
                        <FaCar className="car-icon" />
                        <div className="card-content">
                            <h2>{driver.brand} - {driver.model}</h2>
                            <p>Numero de identificacion: {driver.identificationNumber}</p>
                            <p>Conductor: {driver.driverName}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* CSS embebido */}
            <style>{`
                /* Contenedor principal */
                .container {
                    padding: 20px;
                    font-family: 'Inter';
                    background-color: "#e9e9e9"
                }

                /* Contenedor de las cartas */
                .cards-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    justify-content: center;
                }

                /* Estilo para cada carta */
                .card {
                    background-color: #fffafa;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    width: calc(33% - 20px);
                    padding: 20px;
                    text-align: center;
                    box-sizing: border-box;
                    transition: transform 0.3s;
                }

                .card:hover {
                    transform: translateY(-10px); /* Efecto hover */
                }

                /* Estilo para el ícono de carro */
                .car-icon {
                    font-size: 40px;
                    color: #4ba961; /* Verde para resaltar */
                    margin-bottom: 10px;
                }

                /* Estilo para el contenido de la carta */
                .card-content {
                    font-family: 'Poppins', sans-serif;
                }

                .card-content h2 {
                    font-size: 18px;
                    font-weight: 700;
                    margin-bottom: 10px;
                }

                .card-content p {
                    font-size: 14px;
                    color: #555;
                }

                /* Media Queries: Ajustes para pantallas más pequeñas */
                @media (max-width: 1024px) {
                    .card {
                        width: calc(50% - 20px); /* En pantallas más pequeñas, las cartas ocupan la mitad */
                    }
                }

                @media (max-width: 768px) {
                    .card {
                        width: 100%; /* En pantallas móviles, las cartas ocupan todo el ancho */
                    }
                }
            `}</style>
        </div>
    );
}

export default App;
