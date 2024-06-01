import React, { useState } from 'react';

const Modal = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const agregarClase = () => {
        fetch('http://localhost/Myproyecto/Api/api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, descripcion })
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Error al agregar la clase:', error));
    };

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Agregar Producto</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3 mt-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    placeholder="Ingrese el nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    name="nombre"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="descripcion" className="form-label">Descripción</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="descripcion"
                                    placeholder="Ingrese la descripción"
                                    value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                    name="descripcion"
                                />
                            </div>
                            <button
                                type="button"
                                className="btn btn-success"
                                data-bs-dismiss="modal"
                                id="btnAgregar"
                                onClick={agregarClase}
                            >
                                Agregar
                            </button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
