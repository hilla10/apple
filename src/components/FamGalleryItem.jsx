import React from 'react';

const FamGalleryItem = ({
  title,
  svg,
  bgImgClass,
  bgLeftImg,
  bgColor,
  textClass,
  famLogo,
  btnText,
  isThemeDark,
}) => {
  return (
    <div
      className={`relative item-width item-height m-[6px] px-[10px] py-[8px] md:py-[15px] lg:px-[12x] lg:py-[20px] flex `}>
      <a href='#' className='item-height item-width block group'>
        <div
          className={`${
            bgImgClass ? bgImgClass : ''
          } item-width h-full relative bg-no-repeat fam-gallery-bg`}
          style={{ backgroundColor: bgColor }}>
          <div
            className={`${famLogo} ${
              isThemeDark && 'fill-black'
            } fam-gallery-logo `}>
            {svg}
          </div>
          <div className='fam-gallery-overlay group-hover:!opacity-100'>
            <span className='fam-gallery-button btn-light group-hover:!translate-y-0'>
              {btnText}
            </span>
          </div>
          {bgLeftImg && (
            <div className={`${bgLeftImg} fam-gallery-album-art`} />
          )}
        </div>
        <div className={`${textClass} ml-4 z-10`}>
          <p
            className={`${
              isThemeDark ? 'text-gray-950' : 'text-gray-950 lg:text-white'
            } font-[600] text-[12px] md:text-[14px] leading-[1.33337] md:leading-[1.28577`}>
            {title}
          </p>
        </div>
      </a>
    </div>
  );
};

export default FamGalleryItem;
