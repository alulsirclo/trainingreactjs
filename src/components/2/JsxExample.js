import React from 'react'

const JsxExample = () => {
    const exampleVariable = 'Example'
    const exampleConfition = true
    return (
        <div>
            <h1 className='greeting'>Contoh dari Jsx</h1>
            <div>
                {1 + 1}
            </div>
            <div>
                {exampleVariable}
            </div>
            <div>
                {exampleConfition ? <p>'Benar'</p> : <p>Salah</p>}
            </div>
        </div>
    )
}

export default JsxExample