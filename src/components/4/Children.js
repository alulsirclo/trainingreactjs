import React from 'react'
import Card from './Card'

const Children = (props) => {
    const { title = 'Default Title', data = [] } = props
    return (
        <div>
            <h3>{title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {data.map((meal) => (
                    // <div style={{ margin: 16 }} key={meal.idMeal}>
                    //      <p>{meal.strMeal}</p>
                    //     <img style={{ width: 180, height: 100 }} alt='mealThumb' src={meal.strMealThumb} />
                    // </div>
                    <Card key={meal.idMeal} name={meal.strMeal} imgSrc={meal.strMealThumb} />
                ))}
            </div>
        </div>
    )
}

export default Children