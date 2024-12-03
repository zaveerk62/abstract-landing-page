import Image from 'next/image';
import HeroImg from '../../public/assets/illustration-intro.svg';
import TabletImg from '../../public/assets/bg-tablet-pattern.svg';

const Hero = () => {
  return (
    <div className='w-full relative'>
    <section className='pt-10 pb-20 px-4 items-center justify-center relative'>
      <div className='lg:container flex flex-col md:items-center md:justify-between lg:flex-row-reverse px-4 mx-auto'>
        <div className=''>
          <Image
            src={HeroImg}
            alt='Hero Image'
            className='w-full md:h-full md:w-auto md:max-w-none'
          />
        </div>
        <div className='text-center md:text-start px-12 md:max-w-2xl'>
          <h1 className='text-[40px] md:text-6xl text-blue font-bold leading-tight'>
            Bring everyone together to build better projects.
          </h1>
          <p className='text-lg text-grayBlue mt-2 tracking-tight leading-relaxed md:mt-6 md:text-xl md:tracking-normal lg:px-0'>
            Manage makes it simple for software teams to plan day-by-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className='mt-6 rounded-full bg-red px-9 py-3 text-white shadow-md shadow-red/50 md:mt-8'>
            <a href='#' className='text-sm font-medium'>
              Get Started
            </a>
          </button>
        </div>
      </div>
    </section>
   
   <Image
        src={TabletImg}
        alt='Tablet Image'
        className='absolute -top-24 left-12 -z-30 md:-top-80 md:-right-2 md:left-auto md:w-[900px]'
      />
      <Image
        src={TabletImg}
        alt='Tablet Image'
        className='absolute w-[420px] -bottom-4 -right-60 -z-30 md:w-[900px] opacity-80 md:hidden'
      />   
   
    </div>
  );
};

export default Hero;
