import NavBar from '../components/NavBar';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import ScrollToTopButton from '../components/ScrollToTopButton';

export default function Home() {
  return (
    <>
      <NavBar />
      <Intro />
      <Projects />
      <Skills />
      <About />
      <div className='absolute rounded-full bg-emerald-400/70 blur-3xl h-24 w-24 md:h-28 md:w-28 ml-40 md:ml-96'></div>
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
