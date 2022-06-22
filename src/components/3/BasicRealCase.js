import React, { useEffect, useState } from 'react'

const BasicUseEffect = () => {
    const [meals, setMeals] = useState([])

    const fetchData = async (category = 'Seafood') => {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        const result = await data.json()
        setMeals(result.meals)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h3>Real Case</h3>
            {meals.length
                ? (
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {meals.map((meal) => (
                            <div style={{ margin: 16 }} key={meal.idMeal}>
                                <p>{meal.strMeal}</p>
                                <img style={{ width: 180, height: 100 }} alt='mealThumb' src={meal.strMealThumb} />
                            </div>
                        ))}
                    </div>
                )
                : <p>Loading...</p>
            }
        </div>
    )
}

export default BasicUseEffect