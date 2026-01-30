import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Heading from '../Heading/Heading'
// import required modules
import { Navigation } from 'swiper/modules';
import { FaStar } from "react-icons/fa6";

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import CuS1 from '../../assets/customer1.jpg'
import CuS2 from '../../assets/customer2.jpg'
import CuS3 from '../../assets/customer3.jpg'
import CuS4 from '../../assets/customer4.jpg'
import CuS5 from '../../assets/customer5.jpg'


import 'swiper/css';
import 'swiper/css/navigation';

const Testimonial = () => {
  return (
    <section>
      <div className='max-w-[1200px] mx-auto px-10 py-20'>
        <Heading highlight="Customer" Heading=" Saying" />
        <div className='flex justify-end py-5 gap-x-3'>

          <button className='custom-prev text-xl rounded-lg w-8 h-8 flex justify-center items-center  bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'>
            <MdArrowBackIosNew />
          </button>

          <button className='custom-next text-xl rounded-lg w-8 h-8 flex justify-center items-center  bg-zinc-100  hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'>
            <MdArrowForwardIos />
          </button>

        </div>

        <Swiper navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev"
        }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 }

          }}
          modules={[Navigation]} className="mySwiper">

          {
            review.map(item => {
              return (
                <SwiperSlide className='bg-zinc-100 rounded-xl p-8'>
                  <div className='flex gap-5 items-center'>
                    <div className='w-12 h-12  rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden'> 
                      <img src={item.image}  className='w-full h-full' />
                    </div>

                    <div>
                      <h5 className='text-lg font-bold '>{item.name}</h5>
                      <p className='text-zinc-600'>{item.profession}</p>
                      <span className='flex mt-1 text-yellow-400'>
                        {Array.from({ length: item.rating }, (_, index) => (
                          <FaStar />
                        ))}
                      </span>
                    </div>
                  </div>
                  <div className='mt-10 min-h-[15vh]'>
                    <p className='text-zinc-600'>
                      {item.para}
                    </p>
                  </div>
                </SwiperSlide>
              )
            })
          }

        </Swiper>


      </div>
    </section>
  )
}

export default Testimonial


const review = [
  {
    id: 1,
    name: 'Aditi',
    profession: 'Food Blogger',
    rating: 3,
    para: 'dolor sit amet consectetur adipisicing elit. Aperiam beatae cumque architecto nihil! Ipsum, dolore, labore modi numquam architecto eum',
    image: CuS1
  },
  {
    id: 2,
    name: 'Sunny',
    profession: 'Model',
    rating: 4,
    para: 'dolor sit amet consectetur adipisicing elit. Aperiam beatae cumque architecto nihil! Ipsum, dolore, labore modi numquam architecto eum',
    image: CuS2
  },
  {
    id: 3,
    name: 'Ankita',
    profession: 'Chef',
    rating: 2,
    para: 'dolor sit amet consectetur adipisicing elit. Aperiam beatae cumque architecto nihil! Ipsum, dolore, labore modi numquam architecto eum',
    image: CuS3
  },
  {
    id: 4,
    name: 'Shivam',
    profession: 'FItness Coach',
    rating: 5,
    para: 'dolor sit amet consectetur adipisicing elit. Aperiam beatae cumque architecto nihil! Ipsum, dolore, labore modi numquam architecto eum',
    image: CuS4
  },
  {
    id: 5,
    name: 'Rani',
    profession: 'Food Blogger',
    rating: 2,
    para: 'dolor sit amet consectetur adipisicing elit. Aperiam beatae cumque architecto nihil! Ipsum, dolore, labore modi numquam architecto eum',
    image: CuS5
  },
]
