import React from 'react';
import photo from '../../images/photo.jpg';
import './main.css';
import IngredientsRecipe from '../IngredientsRecipe/IngredientsRecipe.jsx'
import Instructions from '../Instructions/Instructions.jsx'
import TitleRecipe from '../TitleRecipe/TitleRecipe.jsx'
import SelectRecipe from '../SelectRecipe/SelectRecipe.jsx'


const Main = () => {

    
    return (
        <div className="container-fluid">
        <div className="row">
        <div className="col-7">
        <div className="row">

        <div className="col-6">
        <h3>kitchen Recipes</h3>
        </div>

        <SelectRecipe />
       
       <TitleRecipe />
       
        </div>
        
<IngredientsRecipe />

<Instructions />

        </div>
        <div className="col-5 photo-container">
        <img id="photo" src={photo} alt="background"/>
        </div>
        </div>
        
        </div>
        )
    }
    
    export default Main
    