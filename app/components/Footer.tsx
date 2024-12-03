import React, { Fragment } from 'react';
import Image from 'next/image';
import Logo from '../../public/assets/logo.svg'
import fbLogo from '../../public/assets/icon-facebook.svg';
import pinterestLogo from '../../public/assets/icon-pinterest.svg';
import twitterLogo from '../../public/assets/icon-twitter.svg';
import ytLogo from '../../public/assets/icon-youtube.svg';
import instaLogo from '../../public/assets/icon-instagram.svg';

const socialIcons = [
  {
    icon: fbLogo,
    link: '#',
  },
  {
    icon: pinterestLogo,
    link: '#',
  },
  {
    icon: twitterLogo,
    link: '#',
  },
  {
    icon: ytLogo,
    link: '#',
  },
  {
    icon: instaLogo,
    link: '#',
  },
];
  
  

export const Footer = () => {
  return (
    <footer className='bg-darkBlue py-16 pb-8 lg:py-20'>
      <div className='lg:flex lg:flex-row-reverse lg:justify-between lg:items-center lg:container lg:mx-auto lg:gap-40'>
        <div className='flex gap-2 items-center justify-center'>
          <input
            type='text'
            placeholder='Updates in your inbox...'
            className='rounded-full px-9 py-3 pr-16'
          />
          <button className='bg-red text-white px-9 py-3 font-semibold rounded-full'>GO</button>
        </div>
        <div className='text-white font-light flex justify-center gap-36 py-10 pt-14'>
          <nav className='flex flex-col gap-4'>
            <a href="#">Home</a>
            <a href="#">Pricing</a>
            <a href="#">Products</a>
            <a href="#">About Us</a>
          </nav>
          <nav className='flex flex-col gap-4'>
            <a href="#">Career</a>
            <a href="#">Community</a>
            <a href="#">Privacy Policy</a>
          </nav>
        </div>
        <div className='lg:flex lg:flex-col-reverse lg:gap-12'>
        <div className='flex justify-center items-center gap-10 lg:gap-4'>
          {socialIcons.map((icon, index) => (
            <div key={index} className='flex'>
              <Image src={icon.icon} alt='social-icon' className='size-10 lg:size-8' />
            </div>
          ))}
        </div>       
        <Image src={Logo} alt='logo' className='mt-10 mx-auto' />
        </div>
      </div>
    </footer>
  );
};
