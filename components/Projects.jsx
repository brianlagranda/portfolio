'use client';

import Image from 'next/image';
import { useState } from 'react';

const projects = [
  {
    id: crypto.randomUUID(),
    title: 'Blog',
    skills: ['❤', '🧡', '💛', '💚', '💙', '💜'],
    img: '/img/projects/tecnological.png',
    alt: 'Ecommerce project Tecnological',
    urlDeploy: 'urlDeploy',
    urlGithub: 'urlGithub',
  },
  {
    id: crypto.randomUUID(),
    title: 'Tecnological',
    skills: ['❤', '🧡', '💛', '💚'],
    img: '/img/projects/tecnological.png',
    alt: 'Ecommerce project Tecnological',
    urlDeploy: 'urlDeploy',
    urlGithub: 'urlGithub',
  },
  {
    id: crypto.randomUUID(),
    title: 'Landing Page',
    skills: ['❤', '🧡', '💚', '💙', '💜'],
    img: '/img/projects/tecnological.png',
    alt: 'Ecommerce project Tecnological',
    urlDeploy: 'urlDeploy',
    urlGithub: 'urlGithub',
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const handleCheckboxChange = id => {
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
      {projects.map(({ id, title, skills, img, alt, urlDeploy, urlGithub }) => (
        <label
          key={id}
          className={`group relative overflow-hidden rounded-md shadow-2xl`}
        >
          <input
            type='checkbox'
            className=' hidden h-full'
            checked={activeProject === id}
            onChange={() => handleCheckboxChange(id)}
          />
          <div className={`project ${activeProject === id ? 'active' : ''}`}>
            <Image
              width={500}
              height={500}
              style={{ objectFit: 'contain' }}
              className='rounded-lg ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125'
              src={img}
              alt={alt}
            />
            {activeProject === id && (
              <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/60 hover:animate-curtainEnter'>
                <h2 className='text-white text-lg font-semibold mb-4'>
                  {title}
                </h2>
                <div className='flex space-x-4'>
                  <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                    Button 1
                  </button>
                  <button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>
                    Button 2
                  </button>
                </div>
                <div className='flex justify-center w-full content-center h-12 mt-8 items-center bg-black/40 backdrop-blur-sm'>
                  {skills}
                </div>
              </div>
            )}
          </div>
        </label>
      ))}
    </section>
  );
}

