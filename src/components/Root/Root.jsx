import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Root = () => {
    return (
        <div className='md:max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

Root.propTypes = {}

export default Root