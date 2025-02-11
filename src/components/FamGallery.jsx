import FamGalleryItem from './FamGalleryItem';
import sliderItems from '../utils/sliderItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef, useState } from 'react';

const FamGallery = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef(null); // Ref to access the Slider instance

  const togglePlayPause = () => {
    setIsPlaying((prevState) => {
      const newState = !prevState;
      if (sliderRef.current) {
        if (newState) {
          sliderRef.current.slickPlay(); // Play slider
        } else {
          sliderRef.current.slickPause(); // Pause slider
        }
      }
      return newState;
    });
  };

  const settings = {
    infinite: true, // Loop infinitely
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: isPlaying, // Enable autoplay
    speed: 8000, // Transition speed
    autoplaySpeed: 8000, // Default autoplay speed
    pauseOnHover: false, // Do not stop autoplay on hover
    cssEase: 'linear', // Smooth transition effect
    fade: false,
    adaptiveHeight: false,
    waitForAnimate: false, // Start autoplay immediately

    responsive: [
      {
        breakpoint: 734,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 448,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className='mt-8 mb-5'>
      <div>
        <div className='fam-gallery'>
          <h3 className='sr-only'>FAM Gallery</h3>
          <div>
            <Slider {...settings} ref={sliderRef}>
              {sliderItems.map((sliderItem) => (
                <FamGalleryItem
                  key={sliderItem}
                  title={sliderItem.title}
                  svg={sliderItem.svg}
                  bgLeftImg={sliderItem.bgLeftImg}
                  bgImgClass={sliderItem.bgImgClass}
                  bgColor={sliderItem.bgColor}
                  textClass={sliderItem.textClass}
                  famLogo={sliderItem.famLogo}
                  btnText={sliderItem.btnText}
                  isThemeDark={sliderItem.isThemeDark}
                  isThemeWhite={sliderItem.isThemeWhite}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className='flex justify-end  mt-4 '>
        <button
          className={`fam-gallery-play-pause ${
            isPlaying ? 'playing' : 'paused'
          } `}
          onClick={togglePlayPause}></button>
      </div>
    </section>
  );
};

export default FamGallery;
