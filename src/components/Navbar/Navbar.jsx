import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  return (
    <div className='text-white py-2 absolute top-0 left-0 w-full z-20'>
        <div className='container'>
            <div className='flex justify-between items-center'>
                <h1 className='text-4xl font-bold uppercase'>Straw<span className='font-normal'>Berries</span></h1>
                <ul className='flex space-x-14 text-xl'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Where To Find</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                <div>
                    <GiHamburgerMenu className='text-3xl cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar