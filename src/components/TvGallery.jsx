import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
  EffectFade,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import GalleryItem from './GalleryItem';
import { slides } from '../utils';

const TvGallery = () => {
  const swiperRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePaginationClick = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };

  const onSwiperInit = (swiper) => {
    swiperRef.current = swiper;
    const paginationEl = swiper.pagination.el;
    if (paginationEl) {
      paginationEl.addEventListener('click', (e) => {
        if (
          e.target &&
          e.target.classList.contains('swiper-pagination-bullet')
        ) {
          const bullets = Array.from(paginationEl.children);
          const bulletIndex = bullets.indexOf(e.target);
          swiper.slideToLoop(bulletIndex, 1000, true);

          //   swiper.autoplay.stop();
          //   setAutoplayStopped(true);
          handlePaginationClick();
        }
      });
    }
  };

  return (
    <section>
      <Swiper
        className='hero-section !top-12 md:!top-10 swiper-effect'
        effect={'coverflow'}
        grabCursor={true}
        modules={[
          EffectFade,
          EffectCoverflow,
          Autoplay,
          Pagination,
          Navigation,
        ]}
        slidesPerView={2}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
        centeredSlides={true}
        speed={1000}
        fadeEffect={{ crossFade: true }} // Smooth fading
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          320: { spaceBetween: 180 }, // Very small screens (phones)
          480: { spaceBetween: 40 }, // Small phones
          640: { spaceBetween: -80 }, // Bigger phones
          768: { spaceBetween: 590 }, // Tablets
          1024: { spaceBetween: 380 }, // Small laptops
          1280: { spaceBetween: 650 }, // Large laptops
          1440: { spaceBetween: 440 }, // Desktop screens
          1920: { spaceBetween: 70 }, // Ultra-wide screens
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={onSwiperInit}>
        {slides.map(
          ({ id, title, text, imgClass, logoClass, bgImgClass, index }) => (
            <SwiperSlide key={id}>
              <GalleryItem
                title={title}
                text={text}
                imgClass={imgClass}
                logoClass={logoClass}
                bgImgClass={bgImgClass}
                index={index}
                activeIndex={activeIndex}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default TvGallery;
