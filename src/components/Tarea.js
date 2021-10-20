import React from 'react';

const Tarea = ( { tarea, eliminarTarea } ) => {

    const {nombre, apellido, fecha, hora, estado, detalle, id} = tarea;



    return ( 
        <div className="Tarea">
            <p>Nombre del Dev: <span>{nombre}</span></p>
            <p>Apellido del Dev: <span>{apellido}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Estado: <span>{estado}</span></p>
            <p>Detalle: <span>{detalle}</span></p>

            <button onClick={() => eliminarTarea(id)} className="button eliminar u-gull--width">
                Eliminar Tarea
            </button>
        </div>
    );
}
 
export default Tarea;