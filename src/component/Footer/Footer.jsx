import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
    return (
        <footer className='bg-zinc-200 py-20'>
            <div className='flex flex-wrap gap-y-12 max-w-[1200px] mx-auto px-10 '>
                <div className='flex-1'>
                    <a href="#" className='text-2xl font-bold uppercase'>Va<span className='text-4xl text-orange-500'>gg</span>es</a>

                    <p className='text-zinc-600 mt-6 max-w-[350px]'>
                        Bred for a high content beneficial substances. <br />Our product are all fresh and healthy.
                    </p>
                    <p className='text-zinc-800 mt-6'>
                        2025 &copy; All Right Reseved
                    </p>
                </div>

                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>
                    </li>
                    <li className='mt-5'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>About</a>
                    </li>
                    <li className='mt-5'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>FAQ'S</a>
                    </li>

                </ul>


                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>
                    </li>
                    <li className='mt-5'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>Support Centre</a>
                    </li>
                    <li className='mt-5'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>Feedback</a>
                    </li>
                    <li className='mt-5'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>Contact us</a>
                    </li>

                </ul>


                <div className='flex-1'>
                    <h5 className='text-zinc-800 text-2xl font-bold'>
                        Stay Connected
                    </h5>
                    <p className='mt-5 text-zinc-600'>
                        Question or Feedback?<br /> We'd love to hear from you.
                    </p>
                    <div className='flex flex-1 bg-white p-1 rounded-lg mt-6'>
                        <input type="email" name='email' id='email' autoComplete='off' placeholder='Email Address' className=' flex-1 pl-4 h-[5vh] focus:outline-none' />
                        <button className='bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl cursor-pointer'>
                            <IoIosArrowForward />
                        </button>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer
