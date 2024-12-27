import PropTypes from 'prop-types'

const CartDetails = ({ attier }) => {
    const { cloth_name, image_link, price, review } = attier
    return (
        <div className='md:m-5 '>
            <div className="card bg-base-100  shadow-xl md:flex-row flex-col gap-6">
                <figure className="md:p-10 md:w-[250px] h-auto w-10/12 mx-auto md:m-5 p-5 bg-base-200 ">
                    <img
                        src={image_link}
                        alt="Shoes"
                        className="rounded-xl w-44" />
                </figure>
                <div className="card-body">
                    <h2 className='text-4xl font-bold'>{cloth_name}</h2>
                    <p className='font-medium text-[15px]'>Reviews : {review}</p>
                    <p className='text-lg font-medium text-[rgba(19,19,19,0.8)]'>Price : {price}</p>
                    <div className='flex items-center gap-6'>
                        <button className='btn btn-success rounded-xl text-white'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

CartDetails.propTypes = {
    attier: PropTypes.object.isRequired,
}

export default CartDetails