import React from 'react';

const Tabla = ({ data }) => {


    const eliminarElemento = (id) => {
        fetch(`http://localhost/Myproyecto/Api/api.php`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: id }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("se elimino");
            });
    };
    const eliminar = (id) => {
        eliminarElemento(id)
    }


    // const agregarElemento =()

    return (
        <div>
            <table className='table border border-black '>
                <thead>
                    <tr className='table-dark'>
                        <th className="col border border-black ">id</th>
                        <th className="col border border-black ">nombre</th>
                        <th className="col border border-black ">descripcion</th>
                        <th className="col border border-black ">Acciones</th>
                    </tr>
                </thead>
                <tbody className='border border-black'>
                    {data?.map((user) => (
                        <tr key={user.id}>
                            <td className='border border-black'>{user.id}</td>
                            <td className='border border-black'>{user.nombre}</td>
                            <td className='border border-black'>{user.descripcion}</td>
                            <div>
                                <button type='button'
                                    className='btn btn-danger'
                                    onClick={() => eliminar(user.id)}>Eliminar</button>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                > 
                                    Editar
                                </button>
                            </div>

                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default Tabla;
