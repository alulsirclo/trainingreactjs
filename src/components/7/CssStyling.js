import React from 'react'
import './CssStyling.css'

const CssStyling = () => {
    return (
        <div>
            <div className='box'>
                <h3>Css Styling</h3>
            </div>

            <div style={{ border: '1px solid blue', width: 300, marginLeft: 20 }}>
                <h3>Inline Styling</h3>
            </div>
        </div>
    )
}

export default CssStyling