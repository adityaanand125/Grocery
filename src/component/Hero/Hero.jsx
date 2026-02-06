import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'

const Hero = () => {
    return (
        <section className=''>
            <div className='min-h-screen max-w-[1200px] mx-auto px-10 md:flex items-center pt-30'>

                {/* hero content */}

                <div className='flex-1'>
                    <span className='bg-orange-100 text-orange-500 text-l px-5 py-1 rounded-full'>
                        Export Best quality....
                    </span>
                    <h1 className='md:text-7xl/20  text-4xl/14 font-bold'>
                        Testy Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> In Your City
                    </h1>
                    <p className='text-zinc-600 max-w-[530px] mt-5 mb-6'>
                        Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                    </p>
                    <Button content='Ogrder Now' />
                </div>

                {/* hero image */}
                <div className='flex-1'>
                    <img src={Grocery} alt="Hero image" className="block" />
                </div>

            </div>

        </section>
    )
}

export default Hero
