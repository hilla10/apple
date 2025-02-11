import React from 'react';
import HeroesCard from './HeroesCard';

const Heroes = () => {
  return (
    <>
      <section className='hero-section !mb-5 !h-[490px] md:!h-[560px] lg:!h-[570px]'>
        <HeroesCard
          // for screen size < 768px to be the content on the bottom
          mdBottom
          title='iPhone 16 Pro'
          text='Hello, Apple Intelligence'
          imgClass='iphone-16-pro'
        />
      </section>
      <section className='hero-section  !h-[490px]  md:!h-[560px] lg:!h-[570px] !mb-5'>
        <HeroesCard
          btnLight
          title='iPhone 16 '
          text='Hello, Apple Intelligence'
          imgClass='iphone-16'
        />
      </section>

      <section className='hero-section  !h-[490px]  md:!h-[560px] lg:!h-[565px] !mb-5'>
        <HeroesCard
          wImg
          title='iPhone 16 Pro'
          text='Thinstant classic.'
          imgClass='watch-s10'
        />
      </section>
    </>
  );
};

export default Heroes;
