import Image from 'next/image';

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
  { src: html5Icon, alt: 'html5' },
  { src: css3Icon, alt: 'css3' },
  { src: reactIcon, alt: 'react' },
  { src: bsIcon, alt: 'bootstrap' },
  { src: gitIcon, alt: 'git' },
  { src: jsIcon, alt: 'javascript' },
  { src: nextjsIcon, alt: 'nextjs' },
  { src: tailwindIcon, alt: 'tailwind css' },
  { src: tsIcon, alt: 'typescript' },
];

export default function Skills() {
  return (
    <section
      id='skills'
      className='w-full mt-24 flex flex-col items-center gap-10'
    >
      <h2 className='m-auto text-5xl text-emerald-900'>Skills</h2>
      <div className='w-full sm:w-3/4 grid grid-cols-3 sm:grid-cols-5 items-center justify-center place-items-center gap-y-6'>
        {skills.map((skill, index) => {
          return (
            <Image key={index} src={skill.src} alt={skill.alt} className='' />
          );
        })}
      </div>
    </section>
  );
}

