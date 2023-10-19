'use client';

import { Transition } from '@headlessui/react';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const links = [
  {
    label: 'Projects',
    route: '#projects',
  },
  {
    label: 'Skills',
    route: '#skills',
  },
  {
    label: 'About',
    route: '#about',
  },
  {
    label: 'Contact',
    route: '#contact',
  },
];

export function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [scrollDir, setScrollDir] = useState('down');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      setScrollY(currentScrollY);
      setScrollDir(currentScrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir, scrollY]);

  {
    if (scrollY === 0 || scrollDir === 'up') {
      return (
        <nav
          className={`w-full md:w-3/4 md:mx-auto md:rounded-bl-xl fixed top-0 left-0 right-0 z-10 bg-black/40 backdrop-blur-sm animate-curtainEnter`}
        >
          <div className='flex justify-between items-center h-16'>
            {/* LOGO */}
            <Link href='/' className='ml-4'>
              <h2 className='text-2xl text-cyan-600 font-bold'>Logo</h2>
            </Link>

            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className='md:hidden mr-4'>
              <button
                className='text-gray-700 rounded-md outline-none'
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image
                    src='/img/xmark-icon.svg'
                    width='0'
                    height='0'
                    alt='logo'
                    className='w-6 h-auto'
                  />
                ) : (
                  <Image
                    src='/img/menu-icon.svg'
                    width='0'
                    height='0'
                    alt='logo'
                    className='focus:border-none active:border-none w-6 h-auto'
                  />
                )}
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <Transition
            show={navbar}
            enter='transition-opacity duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <ul
              className={`h-screen flex flex-col justify-center items-center pb-44 gap-4 text-white text-xl my-8 curtainEnter`}
            >
              {links.map(({ label, route }) => (
                <li
                  key={route}
                  className='flex py-3 md:px-6 border-b-2 w-32 justify-center hover:text-black hover:bg-transparent hover:border-black'
                >
                  <Link href={route} onClick={() => setNavbar(!navbar)}>
                    {label}
                  </Link>
                </li>
              ))}
              <div className='flex gap-12 mt-6'>
                <Link href=''>
                  <Image
                    src='/img/linkedin.svg'
                    width='0'
                    height='0'
                    alt='Linkedin icon'
                    className='w-6 h-auto'
                  />
                </Link>

                <Image
                  src='/img/github.svg'
                  width='0'
                  height='0'
                  alt='Github icon'
                  className='w-6 h-auto'
                />
                <Image
                  src='/img/mail.svg'
                  width='0'
                  height='0'
                  alt='Mail icon'
                  className='w-6 h-auto'
                />
              </div>
            </ul>
          </Transition>
        </nav>
      );
    }
  }
}

export default NavBar;
