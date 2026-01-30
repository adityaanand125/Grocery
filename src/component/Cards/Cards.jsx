import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

const Cards = ({ image, name, price, category }) => {
    return (
        <div className="  bg-zinc-200 p-5 rounded-xl">
            {/* card Icons  */}
            <div className="flex justify-between ">
                <span className='text-3xl text-zinc-300 cursor-pointer'>
                    <FaHeart />
                </span>
                <button className='cursor-pointer bg-gradient-to-b from-orange-400 to-orange-500 text-white text-xl px-3 py-2 rounded-lg'>
                    <FaPlus />
                </button>
            </div>

            {/* card Image  */}
            <div className='w-full h-50  mt-2'>
                <img src={image} alt={name} className='w-full h-full object-contain' />
            </div>

            {/* card content  */}
            <div className='text-center p-2 '>
                <h3 className='text-2xl font-bold'>{name}</h3>
                <p className='text-xl mt-4 mb-3 '>$ {price.toFixed(2)}</p>
                <Button content="Shop Now" />
            </div>
        </div>
    )
}

export default Cards
