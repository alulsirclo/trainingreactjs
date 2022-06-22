import React from 'react'
import styles from './CssModule.module.css'

const CssModule = () => {
    return (
        <div>
            <div className='box'>
                <h3>Css Module</h3>
            </div>

            <div className={styles.box}>
                <h3>Css Module 2</h3>
            </div>
        </div>
    )
}

export default CssModule