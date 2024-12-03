import React from 'react'

const MobileMenu = () => {
  return (   
      <div className='fixed left-14 md:left-28 top-20 z-50 w-[80%] h-[400px] bg-white shadow-lg flex items-center justify-center lg:hidden'>
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