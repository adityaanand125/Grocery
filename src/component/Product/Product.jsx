import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import productList from '../Productlist/productList'
import Cards from '../Cards/Cards'
import Button from '../Button/Button'


const Product = () => {
    const Categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']
const [activeTab, setActiveTab] = useState('All');

let filteredItems = activeTab === "All" 
  ? productList 
  : productList.filter(item => item.category === activeTab);

const renderCard = filteredItems. slice(0, 8).map((product) => {
  return (
    <Cards 
      key={product.id}
      image={product.image}
      name={product.name}
      price={product.price}
      
    />
  )
})




    return (
        <section>

            <div className='max-w-[1200px] mx-auto px-10 py-20'>
                <Heading   />

                {/* tabs */}

                <div className='flex flex-wrap gap-3 justify-center mt-8 '>
                    {Categories.map(Category=> {
                        return(
                            <button key={Category} 
                            className={` px-5 text-xl cursor-pointer  rounded-lg
                            ${activeTab === Category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100'}`}onClick={()=>setActiveTab(Category)}>

                                {Category}

                            </button>
                        )
                    })}
                </div>

                {/* product listing */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-9 mt-15 '>
                    {renderCard}
                </div>


                <div className='flex justify-center mt-10'>
                    <Button content="View All"/>
                </div>
             </div>
        </section>
    )
}

export default Product
