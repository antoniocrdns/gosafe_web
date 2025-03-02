import {FaTrashAlt, FaPen, FaSearch, FaPlus } from "react-icons/fa"
import React, {useState} from "react";
import "../Styles/AdminConductor.css";

function AdminConductor(){
    const [isModalOpen, setIsModalOpen] =useState(false);
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
    const handleCreateProfile = () =>{
        setIsModalOpen(true);   //aqui abre el modal

    };
    const closeModal = () => {
        setIsModalOpen(false); //aqui cierra el modal
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const nuevoPerfil = Object.fromEntries(formData.entries());

        console.log("Nuevo Perfil", nuevoPerfil);
        closeModal();
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
                    <tr><th>Correo</th><th>Nombre</th><th>Apellidos</th><th>Telefono</th><th>Rol</th><th>Acciones</th></tr>
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
            <button className="create-profile-button" onClick={handleCreateProfile}>
                <FaPlus /> Crear Perfil
            </button>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Agregar Nuevo Perfil</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Nombre:
                                <input type="text" name="nombre" required />
                            </label>
                            <label>
                                Apellidos:
                                <input type="text" name="apellido" required />
                            </label>
                            <label>
                                Correo:
                                <input type="email" name="correo" required />

                            </label>
                            <label>
                                Telefono:
                                <input type="tel" name="telefono" required />
                            </label>
                            <label>
                                Contraseña:
                                <input type="password" name="contraseña" required />
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

export default AdminConductor;


