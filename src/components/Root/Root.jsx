import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Root = props => {
    return (
        <div className='md:max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    )
}

Root.propTypes = {}

export default Root