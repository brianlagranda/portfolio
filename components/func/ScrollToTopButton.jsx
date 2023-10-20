'use client';

import { useEffect, useState } from 'react';

const SCROLL_SPEED = 45;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollTop = () => {
    window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false);
  };

  const scrollToTop = () => {
    const scrollStep = currentY => {
      if (currentY > 0) {
        window.requestAnimationFrame(() => {
          window.scrollTo(0, currentY - SCROLL_SPEED);
          scrollStep(currentY - SCROLL_SPEED);
        });
      }
    };

    scrollStep(window.scrollY);
  };

  useEffect(() => {
    const handleScroll = () => {
      checkScrollTop();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible
          ? `opacity-90 hover:opacity-100 scale-100 animate-bounceTwice shadow-md`
          : 'opacity-0'
      } fixed bottom-5 right-5 z-50 md:right-32 lg:right-44 xl:right-52 2xl:right-60 p-3 bg-black/90 hover:bg-black text-white rounded-full transform md:hover:scale-105 duration-300 ease-in-out`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='3'
          d='M5 10l7-7m0 0l7 7m-7-7v18'
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;

