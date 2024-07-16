'use client';import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import bsIcon from '../public/img/icons/skills/bs.svg';
import gitIcon from '../public/img/icons/skills/git.svg';
import jsIcon from '../public/img/icons/skills/js.svg';
import reactIcon from '../public/img/icons/skills/react.svg';
import tsIcon from '../public/img/icons/skills/ts.svg';
import htmlIcon from '../public/img/icons/skills/html5.svg';
import cssIcon from '../public/img/icons/skills/css3.svg';
import tailwindIcon from '../public/img/icons/skills/tailwind.svg';

import multiStepForm from '../public/img/projects/multiStepForm.png';
import tecnologicalImg from '../public/img/projects/tecnological.png';
import calculatorImg from '../public/img/projects/calculator.png';
import administrateYa from '../public/img/projects/administrateYa.png';

const projects = [
    {
        id: crypto.randomUUID(),
        title: 'Multi-Step Form',
        skills: [
            { src: reactIcon, alt: 'react' },
            { src: tsIcon, alt: 'typescript' },
            { src: tailwindIcon, alt: 'tailwind css' },
            { src: gitIcon, alt: 'git' },
        ],
        img: multiStepForm,
        alt: 'Multi Step Form App',
        description:
            'Developed a dynamic multi-step form using React, Redux, TailwindCSS and TypeScript, enabling users to effortlessly select their type of plan, choose between monthly or yearly billing, and customize their experience with various add-ons.',
        urlDeploy: 'https://multi-step-form-psi-wine.vercel.app/',
        urlGithub: 'https://github.com/brianlagranda/multiStepForm',
    },
    {
        id: crypto.randomUUID(),
        title: 'Calculator',
        skills: [
            { src: reactIcon, alt: 'react' },
            { src: tsIcon, alt: 'typescript' },
            { src: tailwindIcon, alt: 'tailwind css' },
            { src: gitIcon, alt: 'git' },
        ],
        img: calculatorImg,
        alt: 'Calculator App',
        description:
            'Crafted a versatile calculator app using React, Tailwind, and TypeScript, offering users a customizable experience through a range of visually appealing themes.',
        urlDeploy: 'https://calculator-chi-opal.vercel.app/',
        urlGithub: 'https://github.com/brianlagranda/calculator',
    },
    {
        id: crypto.randomUUID(),
        title: 'Tecnological',
        skills: [
            { src: reactIcon, alt: 'react' },
            { src: jsIcon, alt: 'javascript' },
            { src: bsIcon, alt: 'bootstrap' },
            { src: gitIcon, alt: 'git' },
        ],
        img: tecnologicalImg,
        alt: 'Ecommerce app Tecnological',
        description:
            'Developed a tech-centric e-commerce platform using React, JavaScript, and Bootstrap, delivering a user-friendly interface and seamless shopping experience.',
        urlDeploy: 'https://tecnological.vercel.app/',
        urlGithub: 'https://github.com/brianlagranda/tecnological',
    },
    {
        id: crypto.randomUUID(),
        title: 'Expense Manager',
        skills: [
            { src: htmlIcon, alt: 'html5' },
            { src: cssIcon, alt: 'css3' },
            { src: jsIcon, alt: 'javascript' },
            { src: bsIcon, alt: 'bootstrap' },
            { src: gitIcon, alt: 'git' },
        ],
        img: administrateYa,
        alt: 'Expense manager app project administrateya',
        description:
            'Built an efficient expense manager application with Html5, Css3, Bootstrap and JavaScript for streamlined financial tracking and management.',
        urlDeploy: 'https://administrate-ya.vercel.app/',
        urlGithub: 'https://github.com/brianlagranda/AdministrateYa',
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section
            id='projects'
            className='w-full mt-24 flex flex-wrap flex-col items-center mx-auto sm:mt-48 gap-10 justify-center sm:w-3/4'
        >
            <h2 className='m-auto text-5xl text-emerald-900'>Projects</h2>
            {projects.map(
                ({
                    id,
                    title,
                    skills,
                    img,
                    alt,
                    description,
                    urlDeploy,
                    urlGithub,
                }) => (
                    <label
                        key={id}
                        className={`group relative overflow-hidden rounded-lg bg-black shadow-2xl h-80 sm:h-72 sm:w-3/4 flex justify-center`}
                        onClick={() =>
                            setSelectedProject(
                                selectedProject === id ? null : id
                            )
                        }
                        onMouseEnter={() => setSelectedProject(id)}
                        onMouseLeave={() => setSelectedProject(null)}
                    >
                        <Image
                            className='rounded-b-lg ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125 sm:group-hover:scale-150'
                            src={img}
                            alt={alt}
                            style={{ objectFit: 'cover' }}
                        />
                        {selectedProject === id && (
                            <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/60 animate-curtainEnter'>
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
                                                className='bg-white rounded-full p-1 w-12 h-full hover:scale-125 hover:invert transition-all'
                                                priority='true'
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
                                                className='bg-white rounded-full p-1 w-12 h-full hover:scale-125 hover:invert transition-all'
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className='text-white text-center p-2 my-2 bg-black/40'>
                                    {description}
                                </div>
                                <div className='flex justify-center w-full content-center h-12 mt-2 items-center bg-black/40 backdrop-blur-sm gap-2'>
                                    {skills.map((skill, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className='w-8 h-8 overflow-hidden filter invert'
                                            >
                                                <Image
                                                    priority
                                                    key={index}
                                                    src={skill.src}
                                                    alt={skill.alt}
                                                    className='w-full h-full object-contain'
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </label>
                )
            )}
        </section>
    );
}
