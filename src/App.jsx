import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {auth} from './firebase'

import MyTasks from './components/MyTasks'
import SimpleCrud  from './components/SimpleCrud'
import CrudFirebase from './components/CrudFirebase'
import Recipes from './components/Recipes'
import Cities from './components/Cities'
import Town from './components/Town'
import Login from './components/Login'
import Nav from './components/Nav'
import ResetPass from './components/ResetPass'

function App() {
 
const [firebaseUser, setFirebaseUser] = useState (false)


useEffect ( () =>{

  auth.onAuthStateChanged(user =>{
    if(user){
      setFirebaseUser(user)
    }else{
      setFirebaseUser(null)
    }
  })
},[])




  // si todavia no se cargó el usuario de firebase, o sea q está en false, dirá Loading..., cuando se carga, el usuario de firebase: si está reistrado dirá el user, si no hay nadie registrado dirá null; en cualquier caso se cargará la página.

  return (firebaseUser !== false)? (
    <Router>
    <div className="container">
  <Nav firebaseUser={firebaseUser}/>
    </div>

  <Switch>
    <Route path="/" exact>
     Home...
    </Route >
    <Route path="/crudFirebase">
      <CrudFirebase />
    </Route >
    <Route path="/SimpleCrud">
      <SimpleCrud />
    </Route>
    <Route path="/recipes">
      <Recipes />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
   
    <Route path="/cities" exact>
      <Cities />
    </Route>
    <Route path="/cities/:id" exact>
      <Town />
    </Route>
    <Route path="/MyTasks" exact>
      <MyTasks />
    </Route>
    <Route path="/reset" exact>
      <ResetPass />
    </Route>
  </Switch>
  </Router>
      ) : (
       <p>Loading...</p>
      )
    }
    
    export default App;
    
    
    