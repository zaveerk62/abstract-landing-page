"use client"

import React from 'react';
import avatarAnisha from '../../public/assets/avatar-anisha.png';
import avatarAli from '../../public/assets/avatar-ali.png';
import avatarRichard from '../../public/assets/avatar-richard.png';
import avatarShanai from '../../public/assets/avatar-shanai.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Anisha Li',
    avatar: avatarAnisha,
    quote:
      'Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.',
  },
  {
    name: 'Ali Bravo',
    avatar: avatarAli,
    quote:
      'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.',
  },
  {
    name: 'Richard Watts',
    avatar: avatarRichard,
    quote:
      'Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!',
  },
  {
    name: 'Shanai Gough',
    avatar: avatarShanai,
    quote:
      'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.',
  },
];

const Testimonials = () => {
  return (
    <>
    <div className='overflow-x-hidden lg:container lg:mx-auto'>
      <h2 className='text-center text-[36px] text-blue font-bold px-8 lg:px-0'>What they’ve said</h2>
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
      <motion.div 
       animate={{
        translateX: '-100%',
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop'

      }}      
      className='mt-20 flex'>
        {testimonials.concat(testimonials).map((testimonial, index) => (
          <div key={index} className='flex flex-col gap-8 justify-center items-center bg-lightGray p-4 mt-8 max-w-80 md:w-[30%] shrink-0 snap-center mx-4'>
            <Image src={testimonial.avatar} alt='avatar-person' className='size-20 -mt-10' />
            <span className='font-medium text-blue text-lg'>{testimonial.name}</span>
            <p className='text-grayBlue text-center'>{testimonial.quote}</p>
          </div>
        ))}
        </motion.div>
      </div>
    </div>
      <div className='pt-16 flex items-center justify-center'>
      <button className='rounded-full bg-red px-9 py-3 text-white shadow-md shadow-red/50'>
            <a href='#' className='text-sm font-medium'>
              Get Started
            </a>
          </button>
      </div>
      </>
  );
};

export default Testimonials;
