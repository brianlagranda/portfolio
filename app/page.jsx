import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

const sectionIds = [
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Home() {
  return (
    <>
      <NavBar />
      <section id='intro' className='h-screen flex'>
        <h1 className=' mt-32 font-sans text-7xl font-bold  '>
          Brian Lagranda
        </h1>
      </section>
      {sectionIds.map(({ id, label }) => (
        <section key={id} id={id} className='h-screen flex'>
          <h2 className='m-auto font-sans text-7xl font-bold'>{label}</h2>
        </section>
      ))}
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

