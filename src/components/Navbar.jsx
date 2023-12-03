import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    
    return (
        <div className="flex justify-center p-4 bg-violet-950">
            <h1 className="font-bold text-pink-500">Feedback UI</h1>
        </div>
    );
}

export default Navbar;