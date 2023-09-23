import React from 'react'
import {BsCashCoin} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <BsCashCoin className='icon' />
                <h1> Cryptocurrency <span className='purple'>Tracker</span></h1>
            </div>
        </Link>
    )
}

export default Navbar


