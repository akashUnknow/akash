import React from 'react'
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-full px-6 py-3 bg-[#1A0B2E]'>
            <div className='w-16 h-16 flex items-center'>
                <img src={logo} alt="Logo" className='w-full h-full object-contain' />
            </div>
            <div className="mr-6">
                <ul className="flex space-x-16">
                    {["Home", "About", "Lab"].map((item, index) => (
                       <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} key={index}>
                            <li className="text-white hover:text-[#7127BA] transition cursor-pointer">
                                {item}
                            </li>
                       </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar