import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/bookData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>Product : {products.length}</div>
    )
}

Product.propTypes = {}

export default Product