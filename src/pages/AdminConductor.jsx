import {FaTrashAlt, FaPen, FaSearch } from "react-icons/fa"
import "../Styles/AdminConductor.css";

function AdminConductor(){
    const usuarios = [
        { correo: 'ejemplo1@gmail.com', nombre: 'Juan Jose', apellidos: 'Lopez Perez', telefono: 6541423435, rol: 'Conductor' },
        { correo: 'ejemplo2@gmail.com', nombre: 'Juan Jose', apellidos: 'Lopez Perez', telefono: 6541423435, rol: 'Conductor' },
        { correo: 'ejemplo3@gmail.com', nombre: 'Juan Jose', apellidos: 'Lopez Perez', telefono: 6541423435, rol: 'Conductor' },
    ];

    const handleEdit = (correo) => {
        console.log("Editar Usuario:", correo); //Esto es para editar el usuario
    };
    const handleDelete = (correo) => {
        console.log("Eliminar Usuario", correo); // esto es poara elimiar usuario
    };
    
    return (
        <div className="container">
            <h1>Administrar Conductor</h1>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaSearch />
                <input type="text" placeholder="Buscar nombre" className="inp" />
            </div>

            <div className="listcontainer">
                <table className="tabla">
                    <thead>
                        <tr>
                            <th>Correo</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Telefono</th>
                            <th>Rol</th>
                            <th>Acciones</th> {/* Nueva columna para acciones */}
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.correo}>
                                <td>{usuario.correo}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellidos}</td>
                                <td>{usuario.telefono}</td>
                                <td>{usuario.rol}</td>
                                <td>
                                    <FaPen
                                        className="icon"
                                        onClick={() => handleEdit(usuario.correo)}
                                    />
                                    <FaTrashAlt
                                        className="icon"
                                        onClick={() => handleDelete(usuario.correo)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminConductor;


