import React from 'react'
import PropTypes from 'prop-types'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { storedCartList } from '../utility/utility'

const Details = () => {
    const { productId } = useParams()
    const data = useLoaderData()
    const navigate = useNavigate()
    const id = parseInt(productId)
    // console.log(typeof productId);

    const handleBack = () => {
        navigate(-1)
    }

    const items = data.find((itemDetails) => itemDetails.id === id)

    const { cloth_name, image_link, price, review } = items

    const handleAddToCart = (id) => {
        // console.log('ádd to cart clicked' ,typeof id);
        storedCartList(id)
    }

    return (
        <div>
            <div className="flex w-full flex-col lg:flex-row my-8">
                <div className="card bg-base-300 rounded-box grid flex-grow place-items-center">
                    <img src={image_link} className='h-[450px] md:p-8' alt="" />
                </div>
                <div className="card rounded-box grid  flex-grow m-8">
                    <h2 className='md:text-4xl text-xl font-bold'>{cloth_name}</h2>
                    <p className='text-lg font-medium text-[rgba(19,19,19,0.8)] mb-4'>Price : ${price}</p>
                    <div className='border-b-2 mb-5'></div>
                    <h2 className='md:w-[550px] w-full text-wrap'><span className='font-bold text-lg'>Review</span>  : {review}</h2>
                    <div className='border-b-2 my-6'></div>
                    <div>
                        <button onClick={() => handleAddToCart(productId)} className='btn btn-outline mr-5'>Add to Cart</button>
                        <button className='btn btn-accent text-white'>Add to Wishlist</button>
                        <button onClick={handleBack} className='btn btn-error hidden md: text-white ml-4'>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

Details.propTypes = {}

export default Details