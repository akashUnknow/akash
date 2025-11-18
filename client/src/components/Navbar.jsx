import React from 'react'
import logo from '../assets/logo.jpg';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-full px-6 py-3 bg-[#1A0B2E]'>
            <div className='w-16 h-16 flex items-center'>
                <img src={logo} alt="Logo" className='w-full h-full object-contain' />
            </div>
            <div className="mr-6">
                <ul className="flex space-x-16">
                    {["Home", "About", "Lab"].map((item, index) => (
                        <li
                            key={index}
                            className="text-white font-semibold cursor-pointer 
                        transition-all duration-300 ease-in-out 
                        hover:text-blue-400 hover:scale-110"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar