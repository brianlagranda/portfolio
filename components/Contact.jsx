import ContactLinks from './ContactLinks';

export default function Contact() {
  return (
    <section key='contact' id='contact' className='text-center text-6xl mt-24'>
      <h2 className='pr-14 text-emerald-900'>Get in</h2>
      <h2 className='pl-10 text-emerald-900'>
        touch<span className='text-emerald-500'>.</span>
      </h2>

      <div className='flex items-center justify-evenly h-24 pt-20 mb-20'>
        <ContactLinks />
      </div>
    </section>
  );
}
