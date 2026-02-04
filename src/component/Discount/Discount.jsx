import React from 'react'
import Button from '../Button/Button'
import BgDis from '../../assets/fresh-fruits.png'
const Discount = () => {
    return (
        <section className='bg-zinc-100 bg-no-repeat bg-right bg-contain' style={{backgroundImage: `url(${BgDis})`}}>
            <div className=' md:flex-row flex-col max-w-[1200px] mx-auto px-10 flex py-10'>
                <span className='text-5xl md:text-9xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center'>30%</span>
                <div className='max-w-[600px] '>
                    <h3 className='text-4xl md:text-7xl text-zinc-800 font-bold'>Frist order Discount!</h3>
                    <p className=' text-zinc-600 my-6'>
                        Enjoy an exclusive frist order discount on our grocery website! Shop fresh essentials and save big on your first purchase.Fast delivery and quality guaranteed.
                    </p>
                    <Button content="Get Discount" />
                </div>
            </div>
        </section>
    )
}

export default Discount
