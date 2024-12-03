'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../public/assets/logo.svg';
import HamburgerIcon from '../../public/assets/icon-hamburger.svg';
import CloseIcon from '../../public/assets/icon-close.svg';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className='inline-flex items-center lg:justify-evenly justify-between py-6 px-4 w-full'>
        <Image src={Logo} alt='Logo' className='' />
        <nav className='hidden lg:flex gap-6'>
          <a href='#' className='nav-item'>
            Pricing
          </a>
          <a href='#' className='nav-item'>
            Product
          </a>
          <a href='#' className='nav-item'>
            About Us
          </a>
          <a href='#' className='nav-item'>
            Careers
          </a>
          <a href='#' className='nav-item'>
            Community
          </a>
        </nav>
        <button className='hidden lg:inline-block rounded-full bg-red px-9 py-3 text-white shadow-md shadow-red/50'>
          <a href='#' className='text-sm font-medium'>
            Get Started
          </a>
        </button>
        <button onClick={toggleMenu}>
          {isOpen ? (
            <Image
              src={CloseIcon}
              onClick={() => setIsOpen(!isOpen)}
              alt='Close Icon'
              className='lg:hidden cursor-pointer'
            />
          ) : (
            <Image
              src={HamburgerIcon}
              alt='Hamburger Icon'
              className={`lg:hidden cursor-pointer`}
            />
          )}
        </button>
        {isOpen && <MobileMenu />}
      </header>
    </>
  );
};

export default Header;
