import ContactLinks from './ContactLinks';

export function Contact() {
  return (
    <section key='contact' id='contact' className='text-center text-6xl'>
      <h2 className=' pr-14'>Get in</h2>
      <h2 className=' pl-10  '>
        touch<span className='text-emerald-500'>.</span>
      </h2>

      <div className='flex items-center justify-evenly h-24 mb-24'>
        <ContactLinks />
      </div>
    </section>
  );
}

export default Contact;

