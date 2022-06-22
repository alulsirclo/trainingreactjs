import React, { useState, useEffect } from 'react'

const BasicHook = () => {
    const [state, setState] = useState(true)
    // console.log('State =>', state)

    const handleChange = () => {
        setState(!state)
    }

    useEffect(() => {
        console.log('useEffect terpanggil')
    })

    useEffect(() => {
        console.log('Terpanggil diawal')
    }, [])

    useEffect(() => {
        console.log('Terpanggil saat perubahan state')
    }, [state])

    // useEffect(() => {
    //     console.log('Terpanggil saat perubahan state')
    // }, [state])

    return (
        <div>
            <h3>BasicHook</h3>
            <div>
                <h4>{state ? 'True' : 'False'}</h4>
            </div>
            <button onClick={handleChange}>Change State</button>
        </div>
    )
}

export default BasicHook