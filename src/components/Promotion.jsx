import React from 'react';
import PromotionCard from './PromotionCard';

const Promotion = () => {
  return (
    <>
      <section className='hero-section grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[10px] !top-12 md:!top-10 !w-[98%] mx-auto !h-full md:!h-full '>
        <PromotionCard
          textWhite
          sr='Apple Watch'
          text='United by rhythm. Discover the new Black Unity watch band and face.'
          imgClass='bg-apple-watch'
          titleImg='apple-watch'
          btnText='Buy'
        />
        <PromotionCard
          textBlack
          textBottom
          btnBlue
          text='Last chance to find something special for your special someone.'
          imgClass='bg-valentines-day'
          title='Valentine’s Day'
          btnText='Shop'
        />
        <PromotionCard
          textWhite
          sr='Apple Fitness+'
          text="Move to Kendrick Lamar's hits with Strength, Cycling, and more."
          imgClass='bg-fitness-plus'
          titleImg='fitness-plus'
          btnText={['Learn more', 'Try it free']}
        />
        <PromotionCard
          textBlack
          btnBlue
          text='Lean. Mean. M3 machine.'
          imgClass='bg-macbook-air'
          title='MacBook&nbsp;Air'
          btnText={['Learn more', 'Buy']}
        />

        <PromotionCard
          textBlack
          btnBlue
          sr='Apple Trade In'
          text='Get $180–$650 in credit when you trade in iPhone 12 or higher.'
          sup='2'
          imgClass='bg-iphone-tradein'
          titleImg='iphone-tradein'
          btnText='Get your estimate'
        />

        <PromotionCard
          textBlack
          btnBlue
          sr='Apple Card'
          text='Get up to 3% Daily Cash back with every purchase.'
          imgClass='bg-apple-card'
          titleImg='apple-card'
          btnText={['Learn more', 'Apply now']}
        />
      </section>
    </>
  );
};

export default Promotion;
