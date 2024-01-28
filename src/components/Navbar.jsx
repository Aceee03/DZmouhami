import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ContextProvider from '../context/ContextProvider'
import { useContext } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const location = useLocation()
    const isHomepage = location.pathname === '/'
    const { isLoggedIn } = useContext(ContextProvider)

    return (
        <div className="flex flex-row items-center justify-between p-4 bg-transparent">
            {/* Logo */}
            <Link to="/" className="font-bold text-black">DZ<span className='font-normal'> Mouhami</span></Link>
            <div className="flex flex-row items-center gap-8">
                {isHomepage && <Link to="/lawyers" className="font-medium hover:font-bold hover:underline">Lawyers</Link>}
                {location.pathname === '/' && <Link to="/signin">
                    <button className='bg-black font-semibold px-10 py-2 text-white hover:bg-[#800020] hover:outline-none'>Sign in</button></Link>
                }
            </div>
        </div>
    );
}

export default Navbar;