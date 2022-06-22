import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div>
        <h3>Category</h3>
        <div>
            <p>Products</p>
            <Link style={{margin: 24}} to='/category/detail/1'>Product 1</Link>
            <Link style={{margin: 24}} to='/category/detail/2'>Product 2</Link>
            <Link style={{margin: 24}} to='/category/detail/3'>Product 3</Link>
        </div>
    </div>
  )
}

export default Category