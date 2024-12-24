import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Items from '../Items/Items'

const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/bookData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2>Product : {products.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
                {
                    products.map((product, idx) => <Items key={idx} items={product}></Items>)
                }
            </div>
        </div>
    )
}

Product.propTypes = {}

export default Product