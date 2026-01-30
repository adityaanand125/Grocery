import React from 'react'


const Button = (props) => {
  return (
    <button className=' bg-gradient-to-b from-orange-400 to-orange-500 text-white px-6  py3 rounded-lg text-lg hover:scale-105 duration-300 cursor-pointer'>
        {props.content}
    </button>
  )
}

export default Button
