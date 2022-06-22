import React from 'react'
import './Card.css'

const Card = ({ imgSrc = '', name = '' }) => {
    return (
        <div className='cardWrapper'>
            <img className='cardImage' src={imgSrc} alt='imgthumb' />
            <p className='cardName'>{name}</p>
        </div>
    )
}

export default Card