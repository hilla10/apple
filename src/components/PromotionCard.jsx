import React from 'react';

const PromotionCard = ({
  sr,
  text,
  title,
  imgClass,
  titleImg,
  btnText,
  textBlack,
  textWhite,
  textBottom,
  sup,
  btnBlue,
}) => {
  const getButtonClass = (index) => {
    if (textWhite && index === 0) return 'btn-light';
    if (btnBlue) return index === 0 ? 'btn-blue' : 'btn-blue-border';
    return 'btn-light-border';
  };

  return (
    <a href='#' className='w-full md-h relative top-0  left-0 overflow-hidden '>
      <div className='flex justify-center items-center '>
        <div
          className={`${
            textBottom ? 'bottom-10' : 'top-0'
          } absolute z-10  text-center flex flex-col items-center justify-center `}>
          {titleImg ? (
            <h3
              className={`${titleImg} max-w-[90%] md:w-[90%] md:max-w-[330px] xl:w-[88%] xl:max-w-[430px] mt-[30px] lg:mt-[56px]`}>
              {sr && <span className='sr-only'>{sr}</span>}
            </h3>
          ) : (
            <h3 className='text-[32px] lg:text-[40px] font-bold mt-[40px] md:mt-[48px] lg:mt-[56px] -mb-3'>
              {title}
            </h3>
          )}

          <p
            className={`${
              textBlack ? 'text-gray-800' : 'text-white'
            } text-[19px] lg:text-[21px] leading-[1.19048] max-w-[330px] mt-3 font-[500] `}>
            {text}{' '}
            {sup && (
              <sup className='text-[11px] font-bold -ml-1 -mt-1'>{sup}</sup>
            )}
          </p>
          <div className='flex justify-center items-center gap-5'>
            {Array.isArray(btnText) ? (
              btnText.map((text, index) => (
                <button key={index} className={`${getButtonClass(index)} btn`}>
                  {text}
                </button>
              ))
            ) : (
              <button
                className={`
                              ${btnBlue ? 'btn-blue' : 'btn-light'}
                                btn`}>
                {btnText}
              </button>
            )}
          </div>
        </div>
        <div
          className={`${
            textWhite ? 'bg-black' : 'bg-gray-100'
          } w-full h-full absolute top-0 left-0 overflow-hidden`}>
          <figure className={`${imgClass} promo-image`}></figure>
        </div>
      </div>
    </a>
  );
};

export default PromotionCard;
