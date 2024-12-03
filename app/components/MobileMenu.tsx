import React from 'react'

const MobileMenu = () => {
  return (   
      <div className='fixed top-20 left-12 md:left-24 md:w-[80%] z-50 w-[50%] h-[400px] bg-white shadow-lg flex items-center justify-center lg:hidden'>
      <nav className='flex flex-col gap-4 p-6'>
      <a href="#" className="nav-item text-xl font-bold">Pricing</a>
      <a href="#" className="nav-item text-xl font-bold">Product</a>
      <a href="#" className="nav-item text-xl font-bold">About Us</a>
      <a href="#" className="nav-item text-xl font-bold">Careers</a>
      <a href="#" className="nav-item text-xl font-bold">Community</a>
      </nav>
    </div>

  )
}

export default MobileMenu