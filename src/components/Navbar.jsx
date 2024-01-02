import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    
    return (
        <div className="flex items-center justify-between p-4 bg-transparent">
            {/* Logo */}
            <h1 className="font-bold text-black">DZ<span className='font-normal'> Mouhami</span></h1>
            {/* Sign in button */}
            <button className='bg-black font-semibold px-8 py-2 text-white'>Sign in</button>
        </div>
    );
}

export default Navbar;