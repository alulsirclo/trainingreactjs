import React, { useState, useEffect } from 'react'
import Children from './Children'

const Parent = () => {
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
            <h1>Parent</h1>
            {meals.length
                ?
                <Children data={meals} title="Children Component" />
                :
                <p>Loading...</p>
            }
        </div>
    )
}

export default Parent