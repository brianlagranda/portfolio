'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import bsIcon from '../public/img/icons/skills/bs.svg';
import gitIcon from '../public/img/icons/skills/git.svg';
import jsIcon from '../public/img/icons/skills/js.svg';
import reactIcon from '../public/img/icons/skills/react.svg';

const projects = [
  {
    id: crypto.randomUUID(),
    title: 'Tecnological',
    skills: [
      [reactIcon, 'React'],
      [jsIcon, 'JavaScript'],
      [bsIcon, 'Bootstrap'],
      [gitIcon, 'Git'],
    ],
    img: '/img/projects/tecnological.png',
    alt: 'Ecommerce project Tecnological',
    urlDeploy: 'https://tecnological.vercel.app/',
    urlGithub: 'https://github.com/brianlagranda/tecnological',
  },
  {
    id: crypto.randomUUID(),
    title: 'Calculator',
    skills: [
      [reactIcon, 'React'],
      [jsIcon, 'JavaScript'],
      [bsIcon, 'Bootstrap'],
      [gitIcon, 'Git'],
    ],
    img: '/img/projects/calculator.png',
    alt: 'Calculator App project',
    urlDeploy: 'https://calculator-chi-opal.vercel.app/',
    urlGithub: 'https://github.com/brianlagranda/calculator',
  },
  {
    id: crypto.randomUUID(),
    title: 'Landing Page',
    skills: [
      [reactIcon, 'React'],
      [jsIcon, 'JavaScript'],
      [bsIcon, 'Bootstrap'],
      [gitIcon, 'Git'],
    ],
    img: '/img/projects/tecnological.png',
    alt: 'Ecommerce project Tecnological',
    urlDeploy: 'urlDeploy',
    urlGithub: 'urlGithub',
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const handleCheckboxChange = (id) => {
    if (activeProject === id) {
      setActiveProject(null);
    } else {
      setActiveProject(id);
    }
  };

  return (
    <section
      id='projects'
      className='w-full mt-24 flex flex-wrap gap-10 justify-center'
    >
      <h2 className='m-auto text-5xl text-emerald-900'>Projects</h2>
      {projects.map(({ id, title, skills, img, alt, urlDeploy, urlGithub }) => (
        <label
          key={id}
          className={`group relative overflow-hidden rounded-md shadow-2xl`}
        >
          <input
            type='checkbox'
            className='hidden h-full'
            checked={activeProject === id}
            onChange={() => handleCheckboxChange(id)}
          />
          <div className={`project ${activeProject === id ? 'active' : ''}`}>
            <Image
              width={500}
              height={500}
              className='rounded-lg ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125'
              src={img}
              alt={alt}
            />
            {activeProject === id && (
              <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/60 hover:animate-curtainEnter'>
                <h2 className='text-white text-3xl font-semibold mb-4'>
                  {title}
                </h2>
                <div className='flex gap-8 filter invert'>
                  <div className='bg-black/60 p-1 rounded-full'>
                    <Link href={urlGithub}>
                      <Image
                        src='/img/icons/github.svg'
                        width='0'
                        height='0'
                        alt='Github icon'
                        className='bg-white rounded-full p-1 w-12 h-auto hover:scale-125 hover:invert transition-all'
                      />
                    </Link>
                  </div>
                  <div className='bg-black/60 p-1 rounded-full'>
                    <Link href={urlDeploy}>
                      <Image
                        src='/img/icons/link.svg'
                        width='0'
                        height='0'
                        alt='Github icon'
                        className='bg-white rounded-full p-1 w-12 h-12 hover:scale-125 hover:invert transition-all'
                      />
                    </Link>
                  </div>
                </div>
                <div className='flex justify-center w-full content-center h-12 mt-3 items-center bg-black/40 backdrop-blur-sm gap-2'>
                  {skills.map((skill, index) => {
                    return (
                      <div
                        key={index}
                        className='w-8 h-8 overflow-hidden filter invert'
                      >
                        <Image
                          priority
                          key={index}
                          src={skill[0]}
                          alt={skill[1]}
                          className='w-full h-full object-contain'
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </label>
      ))}
    </section>
  );
}
