const HeroesCard = ({ title, text, imgClass, wImg, mdBottom, btnLight }) => {
  return (
    <a className='w-screen relative top-12 md:top-10 left-0 h-[500px] md:h-[570px] flex justify-center flex-col items-center bg-black '>
      <div
        className={`${
          wImg
            ? 'text-gray-950 top-7 md:top-10'
            : mdBottom
            ? 'bottom-8 md:top-10 text-white'
            : 'text-white top-7 md:top-10'
        } absolute  left-[50%] z-20 -translate-x-[50%] pr-3 text-center `}>
        {wImg ? (
          <h2 className='aws-10 mb-2 text-center mx-auto'>
            <span className='sr-only'>Apple Watch Series 10</span>
          </h2>
        ) : (
          <h2 className=' font-extrabold tracking-[1px] md:tracking-[3px] text-[30px] md:text-[46px] lg:text-[50px] pt-1 mr-1'>
            {title}
          </h2>
        )}
        <p
          className={`text-[18px] md:text-[20px] lg:text-[26px] pb-[13px] -mt-1 `}>
          {text}
        </p>

        <div className='flex justify-center items-center gap-[12px]'>
          <button
            className={`
            ${btnLight ? 'btn-light' : 'btn-blue'}
           btn-lg`}>
            Learn more
          </button>
          <button
            className={`
                    ${btnLight ? 'btn-light-border' : 'btn-blue-border'}
                   btn-lg`}>
            Buy
          </button>
        </div>
      </div>
      <div className='w-full h-full '>
        <figure className={`unit-image ${imgClass}`}></figure>
      </div>
    </a>
  );
};

export default HeroesCard;
