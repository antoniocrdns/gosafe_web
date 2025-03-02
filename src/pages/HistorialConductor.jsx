import {FaTrashAlt, FaPen, FaSearch } from "react-icons/fa"
import "../Styles/HistorialConductor.css";

const HistorialViajes = () => {
    // Datos de ejemplo para el historial de viajes
    const viajes = [
      {
        id: 1,
        fecha: "10-01-2025",
        hora: "14:30",
        distancia: "3 km",
        direccionInicial: "Calle Prueba 12, San Luis",
        direccionFinal: "Avenida juarez y 13, San Luis",
      },
      {
        id: 2,
        fecha: "13-01-2025",
        hora: "12:30",
        distancia: "5 km",
        direccionInicial: "Calle Prueba 2, San Luis",
        direccionFinal: "Avenida 16 de Septiembre, San Luis",
      },
    ];
  
    return (
      <div className="Historial-container">
        <h1>Historial De Viaje Conductor</h1>
        <table className="viajes-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Distancia</th>
              <th>Dirección Inicial</th>
              <th>Dirección Final</th>
            </tr>
          </thead>
          <tbody>
            {viajes.map((viaje) => (
              <tr key={viaje.id}>
                <td>{viaje.fecha}</td>
                <td>{viaje.hora}</td>
                <td>{viaje.distancia}</td>
                <td>{viaje.direccionInicial}</td>
                <td>{viaje.direccionFinal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default HistorialViajes;

