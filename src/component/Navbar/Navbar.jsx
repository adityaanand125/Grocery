import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [iscrolled, setIsScrolled] = useState(false)


    const toggleMenu = () => {   
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)

    })
    return (
        <header className={`fixed top-0 right-0 left-0 z-50 ${iscrolled ? 'shadow-lg' : ''}`}>
            <nav className=' bg-white max-w-[1200px] mx-auto px-14 md:h-[10vh] h-[12vh] items-center flex justify-between' >
                <a href="#" className='text-2xl font-bold uppercase'>Va<span className='text-4xl text-orange-500'>gg</span>es</a>


                <ul className='md:flex items-center gap-x-10 font-semibold cursor-pointer hidden'>
                    <li className='text-orange-400' ><a href="#"></a>Home</li>
                    <li className='hover:text-orange-400'><a href="#"></a>About US</li>
                    <li className='hover:text-orange-400'><a href="#"></a>Process</li>
                    <li className='hover:text-orange-400'><a href="#"></a>Contact Us</li>
                </ul>
                <div className='flex items-center gap-x-3'>
                    <div className=' p-1 border-2 border-orange-500 rounded-full md:flex hidden'>
                        <input type="text" name='text' placeholder='Search.....' autoComplete='off' className=' flex-1 h h-[5vh] px-3 focus:outline-none ' />
                        <button className='bg-orange-500 text-white flex  cursor-pointer w-8 h-8 justify-center items-center rounded-full text-xl'><FaSearch /></button>
                    </div>

                    <a href="#" className=' text-2xl'><FaHeart /></a>
                    <a href="#" className=' text-2xl'><FaShoppingCart /></a>

                    {/* HamBurger menu  */}
                    <a href="#" className=' text-2xl md:hidden ' onClick={toggleMenu}>< GiHamburgerMenu /></a>
                </div>
                <ul className={`flex flex-col gap-y-6 bg-orange-500/15 backdrop-blur-xl p-10 items-center gap-x-10 font-semibold cursor-pointer md:hidden absolute top-32 left-1/2 transform -translate-x-1/2 rounded-xl ${showMenu ? 'flex' : 'hidden'}`}>
                    <li className='text-orange-400' ><a href="#"></a>Home</li>
                    <li className='hover:text-orange-400'><a href="#"></a>About US</li>
                    <li className='hover:text-orange-400'><a href="#"></a>Process</li>
                    <li className='hover:text-orange-400'><a href="#"></a>Contact Us</li>

                    <li className=' p-1 border-2 border-orange-500 rounded-full flex md:hidden'>
                        <input type="text" name='text' placeholder='Search.....' autoComplete='off' className=' flex-1 h h-[5vh] px-3 focus:outline-none ' />
                        <button className='bg-orange-500 text-white flex  cursor-pointer w-8 h-8 justify-center items-center rounded-full text-xl'><FaSearch /></button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar; 
