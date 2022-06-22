import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link style={{margin: 24}} to='/'>Home</Link>
            <Link style={{margin: 24}} to='/category'>Category</Link>
        </div>
    )
}

export default Navbar