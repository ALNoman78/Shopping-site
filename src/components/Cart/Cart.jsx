import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom'
import { getCartData } from '../utility/utility'

const Cart = () => {
    const allData = useLoaderData();
    const [cart, setCart] = useState([]);
    console.log(allData);
    
    useEffect(() => {
        const storedCartList = getCartData()
        const cartList = storedCartList.map((id) => parseInt(id))
        const cartData = allData.filter((item) => cartList.includes(item.id))
        setCart(cartData)
    }, [])
    return (
        <div>
            <h2>Cart : {cart.length}</h2>
        </div>
    )
}

Cart.propTypes = {}

export default Cart