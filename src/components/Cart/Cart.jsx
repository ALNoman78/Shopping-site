import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom'
import { getCartData } from '../utility/utility'
import CartDetails from '../CartDetails/CartDetails'

const Cart = () => {
    const allData = useLoaderData();
    const [cart, setCart] = useState([]);
    // console.log(allData);

    useEffect(() => {
        const storedCartList = getCartData()
        const cartList = storedCartList.map((id) => parseInt(id))
        const cartData = allData.filter((item) => cartList.includes(item.id))
        setCart(cartData)
    }, [])

    // const { cloth_name, image_link, price, review } = items

    return (
        <div>
            <h2 className='text-3xl text-center font-medium'>Cart : {cart.length}</h2>
            {
                cart.map((item , idx) => <CartDetails key={idx} attier={item}></CartDetails>)
            }
        </div>
    )
}

Cart.propTypes = {}

export default Cart