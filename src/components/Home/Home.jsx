import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../Banner/Banner'
import Product from '../Products/Product'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
        </div>
    )
}

Home.propTypes = {}

export default Home