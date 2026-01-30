import React from 'react'
import Heading from '../Heading/Heading'
import Fruits from '../../assets/fruits-and-Veggies.png'
import Meat from '../../assets/meat-and-seafood.png'
import Diry from '../../assets/dairy-and-eggs.png'
import Button from '../Button/Button'

const Category = () => {

    const renderCards = category.map(card => {
        return (
            <div className='flex-1 basis-[300px] mb-5' key={card.id}>
                <div className='w-full min-h-[30vh] relative -mb-10'>
                    <img src={card.image}  className='absolute bottom-0'/>
                </div>
                <div className='bg-zinc-200 pt-17 p-6 rounded-xl'>

                    <h3 className='text-zinc-800 text-2xl font-bold'>{card.title}</h3>
                    <p className='text-zinc-600 mt-3  mb-9'>{card.description}</p>
                    <Button content='See All'/>
                
                </div>

            </div>
        )
    })


    return (
        <div className=' max-w-[1200px] mx-auto px-10 p-20 '>
            <Heading highlight="Shop" Heading=" By Category" />
            <div className='flex flex-wrap gap-10 mt-15'>
                {renderCards}
            </div>
        </div>


    )
}

export default Category


const category = [
    {

        id: 1,
        title: 'Fruits & Veggies',
        description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
        image: Fruits

    },
    {

        id: 2,
        title: 'Dairy & Eggs',
        description: 'Wholesome dairy products and free- range eggs.From creamy milk and yogurt to artisanal cheeses.',
        image: Diry

    },
{

    id: 3,
        title: 'Meat & SeaFood',
            description: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
                image: Meat

},
]
