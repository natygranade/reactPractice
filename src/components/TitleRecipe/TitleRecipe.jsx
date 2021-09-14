import React from 'react'
import './titleRecipe.css'
import StarsReview from '../StarsReview/StarsReview.jsx';
import trash from '../../images/icon-trash.svg'

const TitleRecipe = () => {
    return (
        <div className="col-12 title-recipe">
        <p className="recipe-name">
        Mixed Berry Melody
        </p>
        <p>|</p>
       
        <StarsReview />
       
        <div className="trash">
        <img src={trash} alt=""/>
        </div>

        </div>
    )
}

export default TitleRecipe
