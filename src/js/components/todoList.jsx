import React, { useState } from "react";

const TodoList = () => {

  const [tasks, setTasks] = useState("")
  const [newTasks, setNewTasks] = useState([])

  //funcion para agregar tareas igual que en clases almacenados en[array]//
  const handelSubmit = (e) => {
    e.preventDefault();
    setNewTasks([...newTasks, tasks])
    setTasks('')
  }
  //funcion para obtener el valor del input igual que en clases 'input controlado'//
  const handelChange = (e) => {
    const { name, value } = e.target
    console.log(name, value)
    setTasks(value)
  }

  //he trabajando con lo indeces para poder eliminar los elementos creados, lo intente con (el) pero no me funcionó //
  const deleteTask = (index) => {                                        // 0, 0 --> entonces 0 no es diferente de 0//
    const filteredTasks = newTasks.filter((_, i) => console.log('este es mi indice:', i, index) || i !== index)
    setNewTasks(filteredTasks)
  }

  return (

    <div className="card text-center mx-auto mt-5 pt-2 todo">
      <p className="title"> Todo List </p>
      <form onSubmit={handelSubmit} className="d-flex gap-2 mx-auto p-2 d-block w-75">
        <input className="form-control" type="text" name='newTasks' value={tasks} onChange={handelChange} />
      </form>

      <ul className="list-group mb-2 gap-2 d-flex list-group text-center rounded w-75 mx-auto mb-3">
        {/* map para crear nuevas tareas, utilizamos clases css para el efecto hover li-button */}
        {newTasks.map((el, i) =>
          <li className="list-group-item text-primary shadow mb-s task-item" key={i}>{el}
          <button className="btn btn-danger btn-sm float-end delete-btn " onClick={() => deleteTask(i)}> X </button>
          </li>)}
      </ul>
      <p className="text-start fw-bold text-light my-2 ms-3">
        {/*utilizamos ternarias, aplicadas a la longitud[idices] del array de tareas, para mostrar total de tareas creadas */}
        {newTasks.length === 0 ? "There are no tasks" : `${newTasks.length} item left`}
      </p>
    </div>
  );
};
export default TodoList;
