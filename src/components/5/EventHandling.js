import React from 'react'

const EventHandling = () => {
    const handleClick = () => {
        console.log('Click')
    }

    const handleClickParam = (param = '') => {
        console.log(param)
    }

    const handleChange = (event) => {
        console.log(event.target.value)
    } 

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Submit')
    }

    /*
        {handleClick} = {(event) => handleClick(event)}
    */
    return (
        <div>
            <h3>Event Handling</h3>
            <div>
                <button onClick={handleClick} >Without Param</button>
                <button onClick={() => handleClickParam('Coba')} >With Param</button>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EventHandling