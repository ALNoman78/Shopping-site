import React from 'react'
import PropTypes from 'prop-types'
import CartDetails from '../CartDetails/CartDetails'
import Items from '../Items/Items'

const Adjust = props => {
    return (
        <div>
            <CartDetails></CartDetails>
            <Items></Items>
        </div>
    )
}

Adjust.propTypes = {}

export default Adjust