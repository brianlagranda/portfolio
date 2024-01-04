'use client';

import Image from 'next/image';
import { useState } from 'react';

import html5Icon from '../public/img/icons/skills/S-html5.svg';
import css3Icon from '../public/img/icons/skills/S-css3.svg';
import reactIcon from '../public/img/icons/skills/S-react.svg';
import bsIcon from '../public/img/icons/skills/S-bs.svg';
import gitIcon from '../public/img/icons/skills/S-git.svg';
import jsIcon from '../public/img/icons/skills/S-js.svg';
import nextjsIcon from '../public/img/icons/skills/S-nextjs.svg';
import tailwindIcon from '../public/img/icons/skills/S-tailwind.svg';
import tsIcon from '../public/img/icons/skills/S-ts.svg';

const skills = [
  { src: html5Icon, alt: 'html5', skill: 'Html5' },
  { src: css3Icon, alt: 'css3', skill: 'Css3' },
  { src: jsIcon, alt: 'javascript', skill: 'JavaScript' },
  { src: reactIcon, alt: 'react', skill: 'React' },
  { src: tsIcon, alt: 'typescript', skill: 'TypeScript' },
  { src: tailwindIcon, alt: 'tailwind css', skill: 'Tailwind CSS' },
  { src: nextjsIcon, alt: 'nextjs', skill: 'Next.js' },
  { src: bsIcon, alt: 'bootstrap', skill: 'Bootstrap' },
  { src: gitIcon, alt: 'git', skill: 'Git' },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section
      id='skills'
      className='w-full mt-24 flex flex-col items-center gap-24'
    >
      <h2 className='m-auto text-5xl text-emerald-900'>Skills</h2>
      <div className='w-full sm:w-1/2 grid grid-cols-3 items-center justify-center place-items-center gap-y-16'>
        {skills.map(({ src, alt, skill }, index) => {
          return (
            <div
              key={index}
              className='relative group text-center flex flex-col items-center'
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div
                className={`absolute bottom-16 bg-black/60 text-white px-2 rounded-md py-1 whitespace-nowrap opacity-0 transition-opacity duration-300 ${
                  hoveredSkill === index ? 'opacity-100' : ''
                }`}
              >
                <p className='text-md font-semibold'>{skill}</p>
              </div>
              <Image
                key={index}
                src={src}
                alt={alt}
                className='hover:scale-150 hover:rotate-12 transition-all duration-300'
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
