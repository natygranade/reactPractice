import React from 'react'
import './starsReview.css'
import greyStar from '../../images/grey-star.svg'



const StarsReview = () => {
    return (
        <div className="stars">
             <p>review</p> 
            <img src={greyStar} alt=""/>
            <img src={greyStar} alt=""/>
            <img src={greyStar} alt=""/>
            <img src={greyStar} alt=""/>
        </div>
    )
}

export default StarsReview
