import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom"
import {auth} from '../firebase'


const Nav = (props) => {


    
let logOut = () => {
    auth.signOut()
    .then(()=>{
      props.history.push('/login')
    })
    .catch(err =>{
      console.log(err)
    })
    }
    
    return (
        <div className="row">
        <ul className="nav nav-pills ">
        <li className="nav-item"> <Link to="/" className="nav-link btn-dark mr-3 mr-3">Home</Link></li>
       <li className="nav-item"> <Link to="/crudFirebase" className="nav-link btn-dark mr-3">CRUD Firebase</Link></li>
       <li className="nav-item">   <Link to="/SimpleCrud" className="nav-link btn-dark mr-3">Simple CRUD </Link></li>
       <li className="nav-item">   <Link to="/MyTasks" className="nav-link btn-dark mr-3">My Tasks </Link></li>
       <li className="nav-item">   <Link to="/recipes" className="nav-link btn-dark mr-3">Recipes</Link> </li>
       <li className="nav-item"> <Link to="/cities" className="nav-link btn-dark mr-3">Cities</Link></li>  
       <li className="nav-item"> <Link to="/login" className="nav-link btn-dark mr-3">Login</Link></li>  
       {
        props.firebaseUser !== null &&(<li className="nav-item"> 
       <button className="nav-link"
       onClick= { () => logOut()}>Log out</button>
       </li>)
       }  
        </ul>
  
        </div>
    )
}

export default withRouter(Nav)
