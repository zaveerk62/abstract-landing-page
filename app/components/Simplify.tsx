import React from 'react'
import simplifyImg from '../../public/assets/bg-simplify-section-mobile.svg'
import simplifyImgLg from '../../public/assets/bg-simplify-section-desktop.svg'
import Image from 'next/image'

const Simplify = () => {
  return (
    <div className='w-full lg:py-24 lg:mt-32 bg-red mt-10 text-center relative z-0 h-96 lg:h-auto flex items-center overflow-clip'>
      <Image src={simplifyImg} alt='simplify-img' className='-z-10 absolute top-8 md:hidden' />
      <Image src={simplifyImgLg} alt='simplify-img' className='-z-10 sm:hidden md:hidden lg:block absolute w-full' />
      <div className='container mx-auto flex flex-col lg:flex-row gap-8 items-center justify-center lg:justify-between'>
        <h2 className='text-white text-5xl font-semibold lg:max-w-xl lg:text-start'>Simplify how your team works today.</h2>
        <button className='rounded-full bg-white px-9 py-3 text-red shadow-md shadow-red/50'>
            <a href='#' className='text-sm font-medium'>
              Get Started
            </a>
          </button>
      </div>
    </div>
  )
}

export default Simplify