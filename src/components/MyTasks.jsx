import React, {useState, useEffect} from 'react'
import {auth, db} from '../firebase'
import { withRouter } from 'react-router-dom'

const MyTasks = (props) => {
    
    const [user, setUser] = useState(null)
    const [tareas, setTareas] = useState([])
    const [tarea, setTarea] = useState('')
    const [status, setStatus] = useState('')
    const [modoEdicion, setModoEdicion] = useState(false)
    const [id, setId] = useState('')
    
    useEffect( () => {
        
        if(auth.currentUser){
            console.log("usuario registrado " + auth.currentUser.uid)
            setUser(auth.currentUser)   
        }  else {
            console.log("no existe usuario" + auth.currentUser)
            props.history.push('/login')
        }
        
    }, [props])
    
    useEffect( () => {
        
        const obtenerDatos = async () => {
            
            
            try {
                const data = await db.collection(user.uid).get()
                const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
                setTareas(arrayData) 
            } catch (error) {
                console.log(error)
            }
        }
        obtenerDatos()
        
    }, [user])
    
   
    
    const agregarTarea = async (e) => {
        e.preventDefault()
        e.target.reset()
        
        try{
            let nuevaTarea = {
                detalle: tarea,
                status: status
            }
            let data = await db.collection(user.uid).add(nuevaTarea)
            
            setTareas([...tareas, {...nuevaTarea, id: data.id}])
            setTarea('')
            setStatus('')
            
        }catch(err){
            console.log(err)
            
        }
    }
    
    
    const eliminar = async (id) =>{
        
        try{
            await db.collection(user.uid).doc(id).delete()
            
            const tareasFiltradas = tareas.filter( item => item.id !== id)
            setTareas(tareasFiltradas)
            
        }catch(err){
            console.log(err)
            
        }
    }
    
    const editar =  (item) =>{
        setModoEdicion(true)
        setTarea(item.detalle)
        setId(item.id)
        
    }
    
    const editarTarea = async (e) => {
        e.preventDefault()
        if(!tarea.trim()){
            console.log('escribir una tarea')
            return
        }
        
        try{
            
            // si no quiero modificar un campo del objeto puedo no ponerlo, y quedará el mismo en la db.
            
            await db.collection(user.uid).doc(id).update({detalle: tarea, status: status})
            
            const arrayEditado = tareas.map ( item => item.id === id ?  {id: id, detalle: tarea, status: status} : item )
            
            setTareas(arrayEditado)
            setModoEdicion(false)
            setId('')
            setTarea('')
            
        }catch(err){
            console.log(err)
            
        }
    }
    return (
        <div className="container mt-5">
        <div className="row">
        
        
        <div className="col-6">
        <h2>Lista de tareas</h2>
        <ul >
        { tareas.map( (item, i) => (
            <li key={item.id} >
            {'Tarea ' + (i+1)} - {item.detalle} - {item.status}
            <div className="flex-right">
            <button className="btn btn-warning mx-2" onClick={()=> editar(item)}>Editar</button>
            <button className="btn btn-danger mx-2" onClick={()=> eliminar(item.id)}>Eliminar</button>
            </div>
            </li>
            
            ))}
            </ul>
            
            </div>
            <div className="col-6">
            <h2> { modoEdicion  ? 'Editar Tarea' : 'Cargar Nueva Tarea' } </h2>
            <form  onSubmit={ modoEdicion  ? editarTarea : agregarTarea}>
            
            <input type="text" placeholder="Ingrese tarea" className="form-control m-2"
            value={tarea}
            onChange={ e => setTarea(e.target.value) }/>
            <input type="radio" className="check-control ml-2 mr-1" 
            name="status"
            value="to do"
            onChange={ e => setStatus(e.target.value) }/>
            <label >To do</label>
            <input type="radio" className="check-control ml-2 mr-1" 
            name="status"
            value="done"
            onChange={ e => setStatus(e.target.value) }/>
            <label >Done</label>
            
            { modoEdicion  ? (
                <button type="submit" className="btn-warning ml-2 mr-1" >Editar</button>
                ) : (
                    <button type="submit" className="btn-danger ml-2 mr-1">Agregar</button>
                    )
                }
                </form>
                </div>
                </div>
                </div>
                )
            }
            
            export default withRouter(MyTasks)
            