import NavBar from '../components/NavBar';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import Link from 'next/link';

import ScrollToTopButton from '../components/ScrollToTopButton';

const sectionIds = [
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
];

export default function Home() {
  return (
    <>
      <NavBar />
      <Intro />
      <Projects />

      {sectionIds.map(({ id, label }) => (
        <section key={id} id={id} className='h-screen flex'>
          <h2 className='m-auto text-6xl text-emerald-900'>{label}</h2>
        </section>
      ))}
      <div className='rounded-full bg-emerald-400/70 blur-3xl h-24 w-24 md:h-28 md:w-28 ml-40 md:ml-96'></div>
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
