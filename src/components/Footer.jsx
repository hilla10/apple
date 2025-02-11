import React from 'react';
import { footers } from '../utils';
import FooterItems from './FooterItems';

const Footer = () => {
  return (
    <footer className='bg-gray-150 text-[13px] py-6'>
      <div className='container'>
        <div className='border-b border-b-gray-750 text-gray-850'>
          <p className='pb-4'>
            1. Trade‑in values will vary based on the condition, year, and
            configuration of your eligible trade‑in device. Not all devices are
            eligible for credit. You must be at least the age of majority to be
            eligible to trade in for credit or for an Apple Gift Card. Trade‑in
            value may be applied toward qualifying new device purchase, or added
            to an Apple Gift Card. Actual value awarded is based on receipt of a
            qualifying device matching the description provided when estimate
            was made. Sales tax may be assessed on full value of a new device
            purchase. In‑store trade‑in requires presentation of a valid photo
            ID (local law may require saving this information). Offer may not be
            available in all stores, and may vary between in‑store and online
            trade‑in. Some stores may have additional requirements. Apple or its
            trade‑in partners reserve the right to refuse, cancel, or limit
            quantity of any trade‑in transaction for any reason. More details
            are available from Apple’s trade-in partner for trade‑in and
            recycling of eligible devices. Restrictions and limitations may
            apply.
          </p>
          <p className='pb-4'>Subscription required for MLS Season Pass.</p>
          <p className='pb-4'>
            To access and use all Apple Card features and products available
            only to Apple Card users, you must add Apple Card to Wallet on an
            iPhone or iPad that supports and has the latest version of iOS or
            iPadOS. Apple Card is subject to credit approval, available only for
            qualifying applicants in the United States, and issued by Goldman
            Sachs Bank USA, Salt Lake City Branch.
          </p>
          <p className='pb-4'>
            If you reside in the U.S. territories, please call Goldman Sachs at
            877-255-5923 with questions about Apple Card.
          </p>
          <p className='pb-4'>
            Learn more about how Apple Card applications are evaluated at{' '}
            <a href='#' className='text-gray-860 underline'>
              {' '}
              support.apple.com/kb/HT209218.
            </a>
          </p>
          <p className='pb-4'>
            Apple Intelligence is available in beta on all iPhone 16 models,
            iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and
            Mac models with M1 and later, with Siri and device language set to
            English (Australia, Canada, Ireland, New Zealand, South Africa, UK,
            or U.S.), as part of an iOS 18, iPadOS 18, and macOS Sequoia
            software update. Additional features and languages will be available
            in April, with more languages coming over the course of the year.
            Languages supported in 2025 include Chinese, English (India,
            Singapore), French, German, Italian, Japanese, Korean, Portuguese,
            Spanish, and Vietnamese.
          </p>
          <p className='pb-4'>
            A subscription is required for Apple Arcade, Apple Fitness+, Apple
            Music, and Apple TV+.
          </p>
          <p className='pb-4'>
            Features are subject to change. Some features, applications, and
            services may not be available in all regions or all languages.
          </p>
        </div>

        <div className='footer-item'>
          <div>
            <FooterItems id={0} />
            <FooterItems id={1} />
          </div>
          <div>
            <FooterItems id={2} />
            <FooterItems id={3} />
          </div>
          <div>
            <FooterItems id={4} />
          </div>
          <div>
            <FooterItems id={5} />
            <FooterItems id={6} />
            <FooterItems id={7} />
            <FooterItems id={8} />
          </div>
          <div>
            <FooterItems id={9} />
            <FooterItems id={10} />
          </div>
        </div>
        <div className='mb-[16px] pb-[19px] border-b border-b-gray-750 text-gray-850'>
          More ways to shop:{' '}
          <a href='#' className='text-[#0066cc] underline'>
            {' '}
            Find an Apple Store
          </a>{' '}
          or{' '}
          <a href='#' className='text-[#0066cc] underline'>
            {' '}
            other retailer
          </a>{' '}
          near you. Or call{' '}
          <a href='#' className='text-[#0066cc] underline'>
            1-800-MY-APPLE
          </a>
        </div>

        <div className='text-gray-850 flex justify-between  flex-col-reverse md:flex-row'>
          <div className='block lg:flex items-center gap-8 justify-between '>
            <p>
              Copyright © {new Date().getFullYear()} Apple Inc. All rights
              reserved
            </p>

            <ul className='text-gray-860 flex  items-center relative'>
              <li className='pr-4 lg:px-2 after:h-[10px] after:w-[1px] after:my-[3px] after:mx-[8px] after:bg-gray-450 after:absolute '>
                <a href='#'> Privacy Policy</a>
              </li>
              <li className='pr-4 lg:px-2 after:h-[10px] after:w-[1px] after:my-[3px] after:mx-[8px] after:bg-gray-450 after:absolute '>
                <a href='#'> Terms of Use</a>
              </li>
              <li className='pr-4 lg:px-2 after:h-[10px] after:w-[1px] after:my-[3px] after:mx-[8px] after:bg-gray-450 after:absolute '>
                <a href='#'>Sales and Refunds</a>
              </li>
              <li className='pr-4 lg:px-2 after:h-[10px] after:w-[1px] after:my-[3px] after:mx-[8px] after:bg-gray-450 after:absolute '>
                <a href='#'>Legal </a>
              </li>
              <li>
                <a href='#' className='lg:px-2'>
                  Site Map
                </a>
              </li>
            </ul>
          </div>

          <div className='mb-4 md:mb-auto'>
            <a href='#' className='text-gray-850'>
              United State
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
