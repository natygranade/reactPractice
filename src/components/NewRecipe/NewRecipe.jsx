import React from 'react'
import './newRecipe.css'
import ingredientsJson from '../../json_ingredients.json';
//import recipesJson from  '../../json_recipes.json';
import trash from '../../images/icon-trash.svg'

const NewRecipe = () => {
    
    const   ingredientsArray = Array.from(ingredientsJson.ingredients)
    const ingredientsList =  ingredientsArray.map( ingredient => ingredient.name.label )
    
    
    
    return (
        <div className="background">

    
        <div className="new-recipe">
        <form action="" method="POST">
        <div className="recipe-name">
        <label htmlFor="">New Recipe</label>
        <input type="text" name="name" id="name" placeholder="Recipe Name"/>
        <i className="fas fa-times"></i>
        </div>
        
        
        <div className="ingredients">
        <label htmlFor="ingredients">Ingredients</label> <br/>
        <select name="ingredients" id="">
     
        {ingredientsList.map( (ingredient, i) =>
            <option key={i} value="">{ingredient}</option>
            )}

            </select>
            <div className="trash">
            <img src={trash} alt=""/>
            </div>
          
            
            </div>
            
            <div id="add-ingredient">
            
            <i  className="fas fa-plus-circle"></i>
            </div>
            
            <div className="instructions">
            <label htmlFor="instructions">Instructions</label> <br/>
            <textarea name="instructions" id="instructions"/>
            </div>
            
            </form>
            </div>

            </div>
            )
        }
        
        export default NewRecipe
        