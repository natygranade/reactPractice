import React from 'react';
import Icon from '../../images/icon.svg';
import './navBar.css';

const NavBar = () => {
    return (
        <div className="container-fluid nav-bar">
        <div className="row">
        
        <div className="col-6" id="add-recipe-icon">
        <i className="fas fa-plus-circle"></i>

        <h4>ADD RECIPE</h4>
        </div>
        
        <div className="col-6" id="icon">
        <img src={Icon} alt=""/>
        </div>
        
        </div> 
        
        </div>
        )
    }
    
    export default NavBar
    