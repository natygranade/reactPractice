// eslint-disable-next-line
import React, {useState, useEffect} from 'react'
import {auth, db} from '../firebase'
import { withRouter } from 'react-router-dom'

const Login = (props) => {
    
    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')
    const [errors, setErrors] = useState(null)
    const [register, setRegister] = useState(true)
    
    const processData = e => {
        e.preventDefault()
        
        if(!mail.trim()){
            setErrors('Write your email')
            return
        }
        if(!pass.trim()){
            setErrors('Write your password')
            return
        }
        if(pass.length <6){
            setErrors('Password must be more than 6 characters')
            return
        }
        setErrors(null)
        register?  registration() : access()
        
        
    }
    
    const registration = React.useCallback( async () =>{
        
        try {
            let response = await auth.createUserWithEmailAndPassword(mail,pass)

            await db.collection('users').doc(response.user.email).set({
                    mail: response.user.email,
                    id: response.user.uid
                })
            
                await db.collection(response.user.uid).add({
                    detalle: 'Tarea de muestra',
                    status: 'done'
                })
            setMail('')
            setPass('')
            setErrors(null)
// withRouter tiene una propiedad "push" que permite empujar al usuario a otra ruta.
            props.history.push('/MyTasks')

        } catch (error) {
            console.log(error)
            setErrors(error.message)
        }
        
    }, [mail, pass, props])
    
    const access = React.useCallback( async () =>{
        try {
            let response = await auth.signInWithEmailAndPassword(mail,pass)

        console.log(response.user.email + ' logueado')
            
            setMail('')
            setPass('')
            setErrors(null)
            props.history.push('/MyTasks')

        } catch (error) {
            console.log(error)
            setErrors(error.message)
        } 
    }, [mail, pass, props])
    
    const resetPassword = () =>  props.history.push('/reset')

  

    
    return (
        <div className="mt-5">
        { register ?
            <h3 className="text-center">Sign Up </h3>
            :
            <h3 className="text-center">Log In</h3>
            
        }
        <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
        
        {
            //&& operador terneario, si errors es null, no hace nada
            errors &&(
                <div className="alert alert-danger m-2">
                {errors}
                </div>
                )                
            }
            <form onSubmit={processData}>
            <input type="email" 
            className="form-control m-2" 
            placeholder="Enter your email"
            onChange={ e => setMail(e.target.value)}
            value={mail}
            />
            <input type="password"
            className="form-control m-2" 
            placeholder="Enter your password"
            onChange={ e => setPass(e.target.value)}
            value={pass}
            />
            <button type="submit" className="btn btn-info btn-lg btn-block m-2">
            { register ? 'Register' : 'Access' } 
            </button>
            <button type="button" className="btn btn-dark btn-md btn-block m-2"
            onClick= {()=> setRegister(!register)}
            >
            { register ? 'Already have an acount?' : 'Create an acount?' } 
            </button>
            <button type="button" style={{color: '#5bc0de'}} className="btn btn-light"
            onClick= {resetPassword}
            >
            { register ? null : 'Forgot password?' } 
            </button>
            </form>
            
            </div>
            </div>
            
            </div>
            )
        }
    //withRouter genera props en el componente

        export default  withRouter(Login)
        