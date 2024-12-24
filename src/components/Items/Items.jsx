import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Items = ({ items }) => {
    // console.log(items);
    const { id, cloth_name, image_link, price } = items
    return (
        <Link to={`/product/${id}`}>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={image_link}
                        alt="Shoes"
                        className="rounded-xl h-[300px] object-cover w-full top-0" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-left items-start">{cloth_name}</h2>
                    <p className='font-semibold text-left items-start justify-start'>Price : ${price}</p>
                </div>
            </div>
        </Link>
    )
}

Items.propTypes = {
    items: PropTypes.object.isRequired,
}

export default Items