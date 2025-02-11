import React, { useState } from 'react';
import { footers } from '../utils';

const FooterItems = ({ id }) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(prev => !prev)
  }

  return (
    <div className='pb-[7px]'>
      <h3 className='text-gray-550 font-bold mb-[7px] tracking-[0.5px] flex items-center justify-between' onClick={ toggleActive}>
        <span>{footers[id].title}</span>
        <span className={`${active ? 'rotate' : ''} mobile-block`}>
          <svg class='footer-icon-svg' width='11' height='6' viewBox='0 0 11 6'>
            <polyline
              data-footer-icon-shape=''
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              fill='none'
              fill-rule='evenodd'
              points='10.075 0.675 5.5 5.323 0.925 0.675'>
              <animate
                data-footer-animate='expand'
                attributeName='points'
                values='10.075 0.675 5.5 5.323 0.925 0.675;
					10.075 3 5.5 3 0.925 3;
					10.075 5.325 5.5 0.676 0.925 5.325'
                dur='320ms'
                begin='indefinite'
                fill='freeze'
                keyTimes='0;
					0.5;
					1'
                calcMode='spline'
                keySplines='0.12, 0, 0.38, 0;
						0.2, 1, 0.68, 1'></animate>
              <animate
                data-footer-animate='collapse'
                attributeName='points'
                values='10.075 5.325 5.5 0.676 0.925 5.325;
					10.075 3 5.5 3 0.925 3;
					10.075 0.675 5.5 5.323 0.925 0.675'
                dur='320ms'
                begin='indefinite'
                fill='freeze'
                keyTimes='0;
					0.5;
					1'
                calcMode='spline'
                keySplines='0.2, 0, 0.68, 0;
						0.2, 1, 0.68, 1'></animate>
            </polyline>
          </svg>
        </span>
      </h3>
      <ul className={`${active ? 'active' : ''} footer-list  bb-mobile`}>
        {footers[id].links.map((link, index) => (
          <li className='mb-[7px]'>
            <a
              href='#'
              key={index}
              className='block text-gray-850 hover:underline '>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItems;
