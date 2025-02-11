import { useState, useEffect } from 'react';
import { navLink } from '../utils';

const Navbar = () => {
  // Initialize state with the current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [navBlack, setNavBlack] = useState('bg-gray-800');

  useEffect(() => {
    const screenSize = () => {
      const currentWidth = window.innerWidth;
      setWindowWidth(currentWidth);

      // If the window is resized to be greater than 768px, close the mobile menu
      if (currentWidth > 768) {
        setMobileMenu(false);
      }
    };

    const scrollEffect = () => {
      if (window.scrollY > 50) {
        setNavBlack('bg-gray-700');
      } else {
        setNavBlack('bg-gray-800');
      }
    };

    // Add the resize event listener
    window.addEventListener('resize', screenSize);
    window.addEventListener('scroll', scrollEffect);

    // Call it once to set the correct state on mount
    screenSize();

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', screenSize);
      window.removeEventListener('scroll', scrollEffect);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  if (mobileMenu) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <nav
      className={`${navBlack} w-screen h-auto md:h-[44px] fixed top-0 left-0 z-100`}>
      <div className='container flex items-center justify-between text-gray-100'>
        <div
          className={`
            ${
              windowWidth > 734
                ? 'opacity-100'
                : mobileMenu
                ? 'opacity-0'
                : 'opacity-100'
            }
          
          `}>
          <a href='#' className='text-gray-100 hover:text-gray-50 '>
            <svg
              fill='currentColor'
              height={windowWidth > 734 ? '44' : '50'}
              viewBox='0 0 14 44'
              width={windowWidth > 734 ? '14' : '20'}
              xmlns='http://www.w3.org/2000/svg'>
              <path d='m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z'></path>
            </svg>
          </a>
        </div>
        <ul
          className={`md:relative fixed top-0 left-0 md:h-auto md:flex items-center justify-between md:bg-transparent bg-gray-900 z-10 text-gray-100
            md:gap-[15px] lg:gap-[28px] xl:gap-[36.4px] w-screen md:w-auto md:p-0  transition-all duration-500 ease-in-out  ${
              windowWidth > 734
                ? 'opacity-100'
                : mobileMenu
                ? 'max-h-full overflow-auto '
                : 'max-h-0 overflow-hidden'
            }`}>
          {navLink.map(({ id, title }) => (
            <li
              key={id}
              className={`${
                id === 1
                  ? 'md:pt-0 pt-[50px] '
                  : id === 11
                  ? 'pb-15 md:pb-0'
                  : ''
              } md-sm-screen text-[28px] font-medium md:font-normal md:text-[12px] active hover:text-white  md:pl-0 pl-[50px]  `}
              onClick={() => setMobileMenu(false)}>
              <a
                href='#'
                className='flex justify-between items-center  md-sm-screen overflow-auto text-gray-100 hover:text-gray-50'>
                <span className='text-[ #ffffffcc]'>{title}</span>
                {mobileMenu && (
                  <span className='md:hidden mr-10'>
                    <svg
                      className='fill-current'
                      viewBox='0 0 9 48'
                      width='9'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='m8.1155 30.358a.6.6 0 1 1 -.831.8653l-7-6.7242a.6.6 0 0 1 -.0045-.8613l7-6.8569a.6.6 0 1 1 .84.8574l-6.5582 6.4238z'
                        transform='rotate(180, 4.55775, 24)'></path>
                    </svg>
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
        <div
          className={`${
            windowWidth > 768
              ? 'opacity-100'
              : mobileMenu
              ? 'opacity-0'
              : 'opacity-100'
          } flex pr-[14.3px] md:pr-0 gap-[26px] md:gap-[18px] lg:gap-[28px] xl:gap-[36.4px] text-gray-100`}>
          <div
            onClick={() => setMobileMenu(false)}
            className=' cursor-pointer hover:text-gray-50'>
            <svg
              className='fill-current '
              xmlns='http://www.w3.org/2000/svg'
              width={windowWidth > 734 ? '15px' : '20px'}
              height={windowWidth > 734 ? '44px' : '50px'}
              viewBox='0 0 15 44'>
              <path d='M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z'></path>
            </svg>
          </div>
          <div
            className='pr-[50px] md:pr-[18px]   cursor-pointer hover:text-gray-50'
            onClick={() => setMobileMenu(false)}>
            <svg
              className='fill-current'
              width={windowWidth > 768 ? '15px' : '20px'}
              viewBox='0 0 14 44'
              height={windowWidth > 768 ? '44px' : '50px'}
              xmlns='http://www.w3.org/2000/svg'>
              <path d='m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z'></path>
            </svg>
          </div>
        </div>
        <div
          onClick={() => setMobileMenu((prev) => !prev)}
          className={`absolute md:top-0 right-[18px] md:right-0 z-100 w-[47px] md:w-auto md:hidden h-[30px] md:h-auto cursor-pointer flex flex-col justify-center items-center ${
            mobileMenu ? 'menuActive' : ''
          }`}>
          <div className='bg-[#808081] mb-[5px] w-[1.125rem] h-[.125rem] block transition-transform duration-500 ease-in-out'></div>
          <div className='bg-[#808081] w-[1.125rem] h-[.125rem] block transition-transform duration-500 ease-in-out'></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
