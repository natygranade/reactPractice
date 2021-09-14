import React from 'react'
import menuSelect from '../../images/menu-select-icon.svg'
import './selectRecipe.css'

const SelectRecipe = () => {
    return (
        <div className="col-6 select-recipe-button">
       <button><img src={menuSelect} alt=""/> SELECT A RECIPE</button>

        </div>
    )
}

export default SelectRecipe
