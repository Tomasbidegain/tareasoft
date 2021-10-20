import React, { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Tarea from './components/Tarea';
import Footer from './components/Footer';

function App() {

  // Tareas en el localStorage

  let tareasIniciales = JSON.parse(localStorage.getItem('tareas'));
  if (!tareasIniciales){
    tareasIniciales = [];
  }

  // Arreglo de tareas

  const [ tareas, setTareas ] = useState(tareasIniciales);

  //useEffect para realizar ciertas operaciones cuando el State cambia

  useEffect(() => {
    let tareasIniciales = JSON.parse(localStorage.getItem('tareas'));

    if (tareasIniciales) {
      localStorage.setItem('tareas', JSON.stringify(tareas))
    }
    else{
      localStorage.setItem('tareas', JSON.stringify([]))
    }
  }, [tareas])

  // Funcion que tome las tareas y agregue un nueva

  const crearTarea = (tarea) => {
    setTareas([
      ...tareas,
        tarea
    ])
  }

  // Funcion que elimine las tareas

  const eliminarTarea = id => {
      const nuevasTareas = tareas.filter( tarea => tarea.id !== id);
      setTareas(nuevasTareas);
  }

  const titulo = tareas.length === 0 ? "No hay tareas" : "Administra tus tareas"

  return (
  <>
    <div className="header">
      <h1>Administra tus Proyectos</h1>
    </div>
    <div className = "container">
      <div className="row">
        <div className="one-half row">
          <Formulario
            crearTarea = {crearTarea}
          />
        </div>

        <div className="one-half row">
          <h2>{titulo}</h2>
          <div className="grid-tarea">
            {tareas.map((tarea) => (
              <Tarea 
                key = {tarea.id}
                tarea = {tarea}
                eliminarTarea = {eliminarTarea}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
}

export default App;
