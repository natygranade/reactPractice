import React, {useState, useEffect} from 'react';
import shortid from 'shortid';

function Tasks() {
  
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('to do');
  const [lista, setLista] = useState([])
  const [titulo, setTitulo] = useState([])

  useEffect( ()=>{
    const numeroTareas = () => {
      let indexArray = lista.map( (item, i) =>  lista.length === 0 ?   1  :  i+1 )
      setTitulo(indexArray)

    }
    numeroTareas()
  },[lista])
  
  
  const agregarTarea = (e) => {
    e.preventDefault()
    e.target.reset()
    setLista([
      ...lista,
      {id: shortid.generate(), task: task, status: status }
    ])
    setTask('')
    setStatus('to do')
  }
  
  const [modoEdicion, setModoEdicion] = useState(false)
  const [id, setId] = useState('')
  
  const editar = item =>{
    setModoEdicion(true)
    setId(item.id)
  }
  
  const editarTarea = (e) => {
    e.preventDefault()
    
    e.target.reset()
    
    const arrayEditado = lista.map ( item => item.id === id ?  {id: id, task: task, status: status} : item )
    setLista(arrayEditado)
    setModoEdicion(false)
    setId('')
  }
  
  
  const eliminarTarea = id =>{
    const tareasFiltradas = lista.filter( item => item.id !== id)
    setLista(tareasFiltradas)
    
  }
  
  return (
    <div className="container">
    <div className="row">
    <div className="col-6">
    
    
    <h2>Lista de tareas</h2>
    <ul className="list-unstyled">
{ lista.length === 0 ?  <li>No hay tareas</li> : 
      lista.map( (item, i) => (
        <li key={item.id}>
       <p key={`tarea ${item}`} >{`Tarea ${titulo[i]}`}</p>
        <p key={`detalle ${i}`} >{item.task}</p>
        <p key={`status ${i}`} >{item.status}</p>
        <button className="btn btn-warning float-right mx-2" onClick={() => editar(item)}>Editar</button>
        <button className="btn btn-danger float-right mx-2" onClick={() => eliminarTarea(item.id)}>Eliminar</button>
        </li>
        ))
  
      }
      
      </ul>
      
      
      
      <h2> { modoEdicion  ? 'Editar Tarea' : 'Cargar Nueva Tarea' } </h2>
      <form  onSubmit={ modoEdicion  ? editarTarea : agregarTarea}>
      
      <input  className="form-control" 
      placeholder="Ingrese tarea"
      onChange={ e => setTask(e.target.value) }
      type="text"/>
      
      <input  className="form-check-input" 
      type="radio"
      onChange={ e => setStatus(e.target.value) }
      value="done"/>
      <label  className="form-check-label mx-2">Done</label>
      
      <input  className="form-check-input" 
      type="radio"
      onChange={ e => setStatus(e.target.value) }
      value="to-do"/>
      <label >To do</label>
      <br/>
      
      { modoEdicion  ? (
        <button type="submit" className="btn-warning" >Editar</button>
        ) : (
          <button type="submit" className="btn-danger">Agregar</button>
          )
        }
        
        </form>
        </div>
        
        </div>
        
        </div>
        );
      }
      
      export default Tasks;
      
      
      