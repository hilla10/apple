import React from 'react';
import TextContent from './TextContent';

const GalleryItem = ({
  title,
  text,
  imgClass,
  logoClass,
  bgImgClass,
  activeIndex,
  index,
}) => {
  return (
    <div className='w-[995px] h-[495px] md:h-[367.79359px] lg:h-[523.13167px] absolute top-0 left-[50%] -translate-x-[50%]'>
      <h3 className='sr-only'>Apple Tv</h3>
      <div className=' md:w-[704px] lg:w-[995px] '>
        <div className='absolute left-[50%] -translate-x-[50%]  h-[495px] md:h-[367.79359px] lg:h-[523.13167px]'>
          <a href='#' className={`${bgImgClass} gallery `}>
            <div className='inner'>
              <div className='absolute top-0 left-0 w-full md:hidden block z-10  '>
                <figure className={imgClass}></figure>
                <figure className={`${logoClass} logo`}></figure>
              </div>

              <TextContent
                isActive={activeIndex === index}
                text={text}
                title={title}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
