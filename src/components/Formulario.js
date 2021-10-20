import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Formulario = ( { crearTarea } ) => {
    
    const [tarea, setTarea] = useState({
        nombre: '',
        apellido: '',
        fecha: '',
        hora: '',
        estado: '',
        detalle: ''
    });

    //Funcion que se ejecuta cada vez que el usuario escribe un input
    const actualizarState = (e) =>{
        setTarea({
            ...tarea,
            [e.target.name] : e.target.value
        });
    }

    const [error, setError] = useState(false);

    // Extraer los valores

    const { nombre, apellido, fecha, hora, estado, detalle } = tarea;

    // Cuando el usuario presione el boton agregar tarea

    const submitTarea = (e) => {
        e.preventDefault();

        // Validar el formulario
        if (nombre.trim() === '' || apellido.trim() === '' || fecha.trim() === '' || hora.trim() === '' || estado.trim() === '' || detalle.trim() === ''){
             setError(true)
             return;
        }

        // Eliminar el mensaje previo
        setError(false);

        // Asignar un ID
        tarea.id = uuidv4();

        // Crear la nueva tarea

        crearTarea(tarea);

        // Reiniciar el form

        setTarea({
            nombre: '',
            apellido: '',
            fecha: '',
            hora: '',
            estado: '',
            detalle: ''
        });
    }

    return ( 
        <>
            <h2>Crear Tarea</h2>
            <form
                onSubmit={submitTarea}
            >
                <label>Nombre del Dev</label>
                <input 
                    type="text"
                    name="nombre"
                    className="u-full.width"
                    placeholder="Nombre del desarrollador"
                    onChange={actualizarState}
                    value={nombre}
                />

                <label>Apellido del Dev</label>
                <input 
                    type="text"
                    name="apellido"
                    className="u-full.width"
                    placeholder="Apellido del desarrollador"
                    onChange={actualizarState}
                    value={apellido}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full.width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full.width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Estado de la tarea</label>
                <input 
                    type="text"
                    name="estado"
                    className="u-full.width"
                    placeholder="Estado de la tarea"
                    onChange={actualizarState}
                    value={estado}
                />

                <label>Detalle de la tarea</label>
                <textarea 
                    type="text"
                    name="detalle"
                    className="u-full.width"
                    placeholder="Detalle de la tarea"
                    onChange={actualizarState}
                    value={detalle}
                />
                {error ? <p className="alert-error" >¡¡¡ Todos los campos son obligatorios !!!</p> : null}
                <button
                    type="submit"
                    className="button eliminar u-full-width"
                >
                    Agregar Tarea
                </button>
            </form>
        </>
     );
}
 
export default Formulario;