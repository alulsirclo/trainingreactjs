import React, { useState, useEffect } from 'react'

const FuncEffect = () => {
    const [state, setState] = useState(true)

    const handleChange = () => {
        setState(!state)
    }

    useEffect(() => {
        console.log('Selalu terpanggil')
    })

    // componentDidMount
    useEffect(() => {
        console.log('Terpanggil diawal')
    }, [])

    // componentDidUpdate
    useEffect(() => {
        console.log('Terpanggil saat perubahan state')
    }, [state])

    // componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('Terpanggil diawal')
        }
    }, [])

    return (
        <div>
            <h3>Functional Effect</h3>
            <div>
                <h4>{state ? 'True' : 'False'}</h4>
            </div>
            <button onClick={handleChange}>Change State</button>
        </div>
    )
}

export default FuncEffect